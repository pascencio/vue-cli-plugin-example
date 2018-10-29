#!/bin/bash
if [ -d karibu ];
then
    ./clean.sh
fi
export DEBUG=*
vue create -n -d karibu
cd karibu
yarn add file:../.. --dev
clear
vue invoke example
export DEBUG=