# Battle Page
> Training application for testers and for building functional and non-function test-stack.

## Instalation application stack
`npm i`


## Build application stack
```
docker build -t rdpanek/battle-page:1.0 .
```


## Run application stack
Run docker images with Elasticsearch
```
docker run --name elastic -v "$PWD/data":/usr/share/elasticsearch/data -p 9200:9200 -p 9300:9300 -d elasticsearch:5.0 -Etransport.host=0.0.0.0
```
Run docker images with Kibana
```
docker run --name kibana -p 5601:5601 --link elastic:elasticsearch -d kibana:5.0
```
Run application via Docker
```
docker run -d --name battle -p 3000:3000 -e ELASTIC_URI='http://IP:9200' rdpanek/battle-page:1.0
```

Without docker
```
yarn start
```


In dev mode `yarn start`

## Harness / E2E tests
```
docker run -it --name harness -v `PWD`/tests/functionTests/:/home/harness rdpanek/docker_harness:1.6
docker attach harness
cd /home/harness && harness 'batchAddTodos' -c localChrome -t 25000 -b
```

## Selenium local
```
java -Dwebdriver.chrome.driver=chromedriver2.27 -jar selenium-server-standalone-3.2.0.jar
```

## Kubernetes
```
kubectl create -f kubernetes/battle.yml
minikube service battle --url
```

## Kubernetes Dashboard

```
git clone https://github.com/kubernetes/heapster/
kubectl create -f heapster/deploy/kube-config/influxdb/
minikube dashboard
```

# CI

## Git Commit / Unit tests
More info: https://benmccormick.org/2017/02/26/running-jest-tests-before-each-git-commit/