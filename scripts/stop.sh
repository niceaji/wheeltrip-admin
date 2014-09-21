#!/bin/bash

export HOME=$(dirname $0)/..

pm2 stop ${HOME}/server.js
