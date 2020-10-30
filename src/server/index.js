const app = require('../app');

const port = process.env.PORT || 5150;

const server = app.listen(port, () =>
  console.log(`Server is listening on port ${port}...`)
);

process.on('unhandledRejection', error => {
  console.log(`Unhandled Rejection Error: ${error.message}`);
  server.close(() => process.exit(1));
});

process.on('uncaughtException', error => {
  console.log(`Uncaught Exception Error: ${error.message}`);
  server.close(() => process.exit(1));
});
