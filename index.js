<<<<<<< HEAD
const server = require('./api/server.js');

const port = process.env.PORT || 4001;

server.listen(4001, () => {
  console.log(`\n*** Server Running on http://localhost:${port} ***\n`);
=======
const server = require('./server.js');

server.listen(4000, () => {
  console.log('\n* Server Running on http://localhost:4000 *\n');
>>>>>>> 38560e61beef2596b4e6325957e01435dbccb484
});
