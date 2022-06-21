const kue = require('kue');

const queue = kue.createQueue();

// To open Kue Dashboard: ./node_modules/kue/bin/kue-dashboard -p 3050
// workers in redis are the maintainn the specific type of queues
module.exports = queue;
