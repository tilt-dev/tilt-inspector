#!/bin/bash

set -ex

TAG=$(date +%Y%m%d)
docker build -t tiltdev/tilt-inspector .
docker tag tiltdev/tilt-inspector "tiltdev/tilt-inspector:v$TAG"
docker push tiltdev/tilt-inspector
docker push "tiltdev/tilt-inspector:v$TAG"
