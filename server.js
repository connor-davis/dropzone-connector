let { DropZoneServer } = require('@connor-davis/dropzone-protocol');

let server = new DropZoneServer({
  key: 'DropZoneConnector',
  port: process.env.PORT || 8080,
});

server.listen();
