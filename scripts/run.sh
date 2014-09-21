#!/bin/bash

export NODE_ENV="production"
export DEBUG="wheeladmin:*"
export HOME=$(dirname $0)/..

pm2 start ${HOME}/server.js
