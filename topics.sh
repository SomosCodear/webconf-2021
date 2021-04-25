#!/bin/bash
echo 'Cloning GitHub Explore topics...'
git clone --depth 1 -b main https://github.com/github/explore ./tmp-topics
echo 'Running processor...'
node topics.js
echo 'Cleaning up...'
rm -rf ./tmp-topics
echo 'Done!'
