# Kubernetes deployment

Manual for now:

```
kubectl apply -f k8s/personal-web.yaml
```

TODO automate:
1. add a Role, ServiceAccount for deploying in personal-web namespace
2. add github action job in release-please.yml to deploy to k8s