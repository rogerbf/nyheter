#!/usr/bin/env node

const nyheter = require('../index.js')
const style = require('chalk')

nyheter()
  .then(news => news.map(n => {
    console.log(
      `${style.bgRed.bold.white(n.title)}\n${style.dim(n.datetime)}\n${style.white.italic(n.summary)}\n`
    )
  }))
