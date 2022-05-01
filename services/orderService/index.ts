// import { faker } from '@faker-js/faker';
import express, { Express, Request, Response } from 'express';
const cote = require('cote'),
    OrderModel = require('./order.model');



    // const randomName = faker.name.findName(); // Rowan Nikolaus
    // const randomEmail = faker.internet.email(); // Kassandra.Haley@erich.biz
    // const randomCard = faker.helpers.createCard();

const orderResponder = new cote.Responder({
    name: 'Order Responder',
    namespace: 'order',
    respondsTo: ['list']
});

const orderPublisher = new cote.Publisher({
    name: 'Order Publisher',
    namespace: 'order',
    broadcasts: ['update']
});

orderResponder.on('*', console.log);

orderResponder.on('list', function(req: Request, cb: any) {
    const query = req.query || {};
    OrderModel.find(query);
});

// orderResponder.on('create', function(req, cb) {
//     OrderModel.create(req.order, function(err, orders) {
//         cb(err, orders);

//         updateorders();
//     });
// });

// orderResponder.on('delete', function(req, cb) {
//     OrderModel.get(req.id, function(err, order) {
//         order.remove(function(err, order) {
//             cb(err, order);

//             updateorders();
//         });
//     });
// });

// function updateorders() {
//     OrderModel.find(function(err, orders) {
//         orderPublisher.publish('update', orders);
//     });
// }
