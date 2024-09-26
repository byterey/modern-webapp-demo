## Requirements

Please install the following, if you do not already have them installed:

- Node.js v20.10.0
- Git v2.43.0
- Visual Studio Code v1.84.2
- Docker v24.0.6
- Docker Desktop v4.25.2
- MongoDB Shell v2.1.0

## Install

```bash
git init
npm install
```

## Start

First, make sure that the `mongo` Docker container is running.

To run the example backend script, directly execute it with node:

```bash
node src/example.js
```

To run the main backend developed in this chapter in dev mode, run the following command:

```bash
npm run dev
```

For production mode, run:

```bash
npm start
```

To exit the web server, press the `Ctrl+C` key combination.

## Tests

To run the tests, execute the following command:

```bash
npm test
```

To Run Backend only locally
go to cd backend/
npm run dev
