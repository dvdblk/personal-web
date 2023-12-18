# Kubernetes deployment

Manual for now:
```
# if k8s manifests are changed
kubectl apply -f k8s/personal-web.yaml
# if docker image is changed
kubectl rollout restart deployment/personal-web-deployment -n personal-web
```

TODO automate:
1. add a Role, ServiceAccount for deploying in personal-web namespace
2. add github action job in release-please.yml to deploy to k8s