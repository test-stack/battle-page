# Battle Page
> Training application for testers and for building functional and non-function test-stack.

## Instalation application stack
`yarn install`


## Build application stack
```
docker build -t rdpanek/battlepage:1.0 .
```


## Run application stack
Run docker images with Elasticsearch
```
docker run --name elastic -p 9200:9200 -d elasticsearch:5.0 -Etransport.host=0.0.0.0
```
Run docker images with Kibana
```
docker run --name kibana -p 5601:5601 --link elastic:elasticsearch -d kibana:5.0
```
Run application via Docker
```
docker run -d --name battle -p 8080:8080 -e ELASTIC_URI='http://IP:9200' rdpanek/battlepage:1.0
```

Without docker
```
yarn build
yarn server
```

In dev mode `yarn start`
