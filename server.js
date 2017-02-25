import express from 'express';
import bodyParser from 'body-parser';
import morgan from 'morgan';
import elasticsearch from 'elasticsearch';
import moment from 'moment';

let client = new elasticsearch.Client({
  host: 'localhost:9200',
  log: 'trace',
  apiVersion: '5.0',
  requestTimeout: 30000,
  keepAlive: true,
  maxSockets: 10,
});

const app = express(); // Our express server!
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

router.route('/list')
  .post((req, res) => {
    console.log(req.body);

    client.create({
      index: `battle-page-${moment().format('YYYY.MM.DD')}`,
      type: 'battle-page',
      id: new Date().getTime(),
      body: Object.assign({'timestamp': new Date().toISOString()}, req.body),
    }, function (error, response) {
      if (error) res.send(error);
      res.json({
        elastic: response
      });
    });
  })

  .get((req, res) => {
    client.msearch({
      body: [
        // query_string query, on index/mytype
        { index: `battle-page-${moment().format('YYYY.MM.DD')}`, type: 'battle-page' },
        {}
      ]
    }, function (error, response) {
      if (error) res.send(error);
      res.json({
        elastic: response
      });
    });
  });

router.route('/list/:list_id')

  .get((req, res) => {
    client.get({
      index: `battle-page-${moment().format('YYYY.MM.DD')}`,
      type: 'battle-page',
      id: req.params.list_id
    }, function (error, response) {
      if (error) res.send(error);
      res.json({
        elastic: response
      });
    });
  })

  .delete((req, res) => {
    client.delete({
      index: `battle-page-${moment().format('YYYY.MM.DD')}`,
      type: 'battle-page',
      id: req.params.list_id
    }, function (error, response) {
      if (error) res.send(error);
      res.json({
        elastic: response
      });
    });
  });

app.use('/api', router);

app.listen(port);

console.log(`listening on port ${port}`);
