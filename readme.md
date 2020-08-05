# POSTMAN SANDBOX SERVER

## How to setup

1. In root directory from /POSTMAN_SANDBOX folder run in cmd or bash/git bash:

```bash
npm i
```

This will install all packages

2. Run command from project root /POSTMAN_SANDBOX:

```bash
nodemon ./server.js
or
node ./server.js

(eaither nodemon + node has to be installed or only node in second example)
```

3. Import files ending in \*.json from /postman_sandbox/postman saves to your postman (top left corner grey import button)
   Current files are:

- projekt skargi.postman_collection.json - small project will only CRUD operations in postman
- alpha-tank-node.postman_collection.json - bigger project with more advance features like postman variables, scripts, bearer tooken authentication. You can check whole project repo at: https://github.com/DawidGaleziewski/alpha-tank-full-stack
  Or the hosted version at https://tank-kit.com/
