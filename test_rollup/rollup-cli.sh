#!/bin/bash

#rollup src/main.js --output bundle.js --format cjs
rollup src/main.js --output bundle.js --format umd --name mybundle