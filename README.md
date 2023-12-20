# react-app-template

Boiler plate for creating react with typescript using vite as bundler

Technology stack
Frontend - React | Typescript | Vite

URLs
Local react app - http://localhost:3000

Run frontend locally

To install dependencies -
npm install

To run the frontend application -
npm run start

To run the frontend test cases -
npm run test

Docker setup

#build the docker image

./deploy.sh prod build

#tag the docker image

docker tag client-prod-i gayathri8/reactapp:v1.0

#check the docker image

docker images

#login to docker hub

docker login

#push and pull image

docker push gayathri8/reactapp:v1.0

#pull the image

docker pull gayathri8/reactapp:v1.0

Kubernetes setup

#make the docker image private and login

#this still doesn't help to access a private registry to kubernetes cluster, we have to login in minikube for that

docker login -u username -p password https://index.docker.io/v1/

#command to SSH into the Minikube virtual machine

minikube ssh

#login to docker there,

docker login -u username -p password https://index.docker.io/v1/

#this should have cat .docker/config.json

scp -i $(minikube ssh-key) docker@$(minikube ip):.docker/config.json .docker/config.json

cat .docker/config.json | base64

#create the secret key

#there are other ways to generate key for single registry, this was is to create single secret for pulling multiple docker images from different registry

kubectl apply -f docker-secret.yaml

#check the secret key

kubectl get secret -o yaml

#To pull image and deploy the pods

kubectl apply -f my-app-deployment.yaml
