#!/bin/bash

tag=s2i-build/valeriaportal

if [[ "$1" = "local" ]] ; then
  port=4200
  npm_run=local
else
  port=8080
  npm_run=start
fi

docker run \
-p ${port}:${port} \
-e NPM_RUN=${npm_run} \
${tag}
