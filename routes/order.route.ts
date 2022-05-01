import express, { Express, Request, Response } from 'express';
const app: Express = express();
const bodyParser = require('body-parser'),
    server = require('http').Server(app),
    io = require('socket.io')(server),
    cote = require('cote');


    const orderRequester = new cote.Requester({
        name: 'Order Requester',
        namespace: 'order'
    });
    
    const purchaseRequester = new cote.Requester({
        name: 'admin purchase requester',
        namespace: 'purchase'
    });
    
    

app.use(bodyParser.json());

app.all('*', function(req: Request, res: Response, next) {
    console.log(req.method, req.url);
    next();
});

// app.get('/', function(req, res, next) {
//     console.log(req.method, req.url);
//     next();
// });

// app.get('/orders', async (req, res) => {
//     const orders = await orderRequester.send({type: 'list'});
//         res.send(orders);
    
// });

// app.get('/order/:id', function(req, res) {
//     orderRequester.send({type: 'find', id: req.params.id}, function(err, orders) {
//         res.send(orders);
//     });
// });

// app.post('/order', function(req, res) {
//     orderRequester.send({type: 'create', order: req.body.order}, function(err, order) {
//         res.send(order);
//     });
// });

// app.delete('/order/:id', function(req, res) {
//     orderRequester.send({type: 'delete', id: req.params.id}, function(err, order) {
//         res.send(order);
//     });
// });

server.listen(5000);

// new cote.Sockend(io, {
//     name: 'admin sockend server'
// });
