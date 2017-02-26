# Battle Page
> Training application for testers and for building functional and non-function test-stack.

## Instalation application stack
`yarn install`


## Run application stack
Run docker images with Elasticsearch
```
docker run --name elastic -p 9200:9200 -d elasticsearch:5.0
```
Run docker images with Kibana
```
docker run --name kibana -e ELASTICSEARCH_URL=127.0.0.1:9200 -p 5601:5601 -d kibana:5.0
```

In public mode
```
yarn build
yarn server
```

In dev mode `yarn start`
