import express from 'express';
import bodyParser from 'body-parser';
import morgan from 'morgan';
import elasticsearch from 'elasticsearch';
import moment from 'moment';
import {getTodos, getTodo, addTodo, deleteTodo} from './app/todo';

const elasticUri = process.env.ELASTIC_URI || 'http://localhost:9200';

let client = new elasticsearch.Client({
  host: elasticUri,
  log: 'trace',
  apiVersion: '5.0',
  requestTimeout: 10000,
  keepAlive: true,
  maxSockets: 10,
});

client.ping({
  requestTimeout: 10000
}, function (error) {
  if (error) {
    console.trace('[Elasticsearch] cluster is down!');
  } else {
    console.log('[Elasticsearch] Successful connection');
  }
});

const app = express();
const port = process.env.PORT || 8080;

// Body parser and Morgan middleware
app.use(bodyParser.urlencoded({ extended: true}));
app.use(bodyParser.json());
app.use(morgan('dev'));

// We tell express where to find static assets
app.use(express.static(__dirname + '/client/dist'));

// Enable CORS so that we can make HTTP request from webpack-dev-server
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header('Access-Control-Allow-Methods', 'GET,POST,DELETE');
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

let router = express.Router();

router.get('/', function(req, res) {
    res.json({ message: 'Api is live!' });
});

router.route('/todo')
  .post((req, res) => {
    addTodo(client, req.body, (error, response) => {
      if (error) return res.send(error);
      res.json({
        elastic: response
      })
    })
  })

  .get((req, res) => {
    getTodos(client, (error, response) => {
      if (error) res.send(error);
      res.json({
        elastic: response
      })
    })
  })

router.route('/todo/:todo_id')

  .get((req, res) => {
    getTodo(client, req.params.todo_id, (error, response) => {
      if (error) res.send(error);
      res.json({
        elastic: response
      })
    })
  })

  .delete((req, res) => {
    deleteTodo(client, req.params.todo_id, (error, response) => {
      if (error) res.send(error);
      res.json({
        elastic: response
      });
    });
  });

app.use('/api', router);

app.route("*").get((req, res) => {
  res.sendFile('client/dist/index.html', { root: __dirname });
});

app.listen(port);

console.log(`listening on port ${port}`);
