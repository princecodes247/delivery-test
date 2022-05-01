// import { faker } from '@faker-js/faker';

const cote = require('cote')
// ,
    // InventoryModel = require('./inventory.model');



    // const randomName = faker.name.findName(); // Rowan Nikolaus
    // const randomEmail = faker.internet.email(); // Kassandra.Haley@erich.biz
    // const randomCard = faker.helpers.createCard();

const inventoryResponder = new cote.Responder({
    name: 'Inventory Responder',
    namespace: 'inventory',
    respondsTo: ['list']
});

const inventoryPublisher = new cote.Publisher({
    name: 'Inventory Publisher',
    namespace: 'inventory',
    broadcasts: ['update']
});

inventoryResponder.on('*', console.log);

// inventoryResponder.on('list', function(req, cb) {
//     const query = req.query || {};
//     InventoryModel.find(query, cb);
// });

// inventoryResponder.on('create', function(req, cb) {
//     InventoryModel.create(req.inventory, function(err, inventorys) {
//         cb(err, inventorys);

//         ipdateInventorys();
//     });
// });

// inventoryResponder.on('delete', function(req, cb) {
//     InventoryModel.get(req.id, function(err, inventory) {
//         inventory.remove(function(err, inventory) {
//             cb(err, inventory);

//             ipdateInventorys();
//         });
//     });
// });

// function ipdateInventorys() {
//     InventoryModel.find(function(err, inventorys) {
//         inventoryPublisher.publish('update', inventorys);
//     });
// }
