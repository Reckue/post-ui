#!/bin/bash

# docker
bash ./config/docker/create_image.sh
bash ./config/docker/push_image.sh

# autodeploy
kubectl delete -f ./config/k8s/deploy.yaml
kubectl create -f ./config/k8s/deploy.yaml
