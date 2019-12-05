const server = require('./api/server.js');

const port = process.env.PORT || 4001;

server.listen(4001, () => {
  console.log(`\n*** Server Running on http://localhost:${port} ***\n`);
});
