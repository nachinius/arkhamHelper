

arkhamHelper [![Build Status](https://travis-ci.org/nachinius/arkhamHelper.svg?branch=master)](https://travis-ci.org/nachinius/arkhamHelper)
============

See it live at http://nachinius.github.io/arkhamHelper/#/

Helper to play the arkham horror game board.

## Purpose

This is a client app for helping with arkham playing.
However, for developing it uses node.js

## Usage

run 

    grunt serve
and it should run the node.js server and open
a browser at 

    http://localhost:9001

with

    grunt build

all files are copy to /dist which can be
served statically.

## Develop

Run 

    grunt serve
and modify files as needed. It
should automatically reload.

## generated initial structure with

    yo angular

Yeoman is used for generating new angular's
services, directives, controllers, and misc. See

    yo angular -h
and https://github.com/yeoman/generator-angular
