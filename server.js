let { DropZoneServer } = require('@connor-davis/dropzone-protocol');
let { Router } = require('express');
let router = Router();

let server = new DropZoneServer({
  key: 'DropZoneConnector',
  port: process.env.PORT || 8080,
});

router.get('/', async (request, response) => {
  return response.status(200).json({
    id: 'dropzone-node-connector',
    message: 'Welcome to the DropZone Node Connector',
  });
});

server.expressApp.use(router);

server.listen();
