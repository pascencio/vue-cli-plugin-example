#!/bin/bash
if [ -d example ];
then
    ./clean.sh
fi
export DEBUG=vue-cli-plugin-example:generator
vue create -n -d example
cd example
yarn add file:../.. --dev
clear
vue invoke example
export DEBUG=