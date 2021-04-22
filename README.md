# tilt-inspector

A small debugging server to help inspect Tilt state


## Start

Run:

```
npm run start
```

## API Machinery

This server uses openapi/swagger and the Kubernetes API machinery
to generate a typescript client for the Tilt API server.

To regenerate it:

- Make sure Tilt is running. You'll need a running Tilt server to generate the openapi spec.

- In this directory, run the openapi spec generator:

```
tilt dump openapi > ./src/gen/swagger.json.original
```

- In this directory, run the Kubernetes client generator:

```
make genapi
```

## API Client

Eventually, we should break out the typescript client into its own package.

But for now, you can import it directly:

```
// Connect to a running Tilt server and print the session data.
const client = require('./src/client').newTiltClient();
client.listSession().
  then((res) => {
    console.log(JSON.stringify(res.body.items, null, '  '));
  });
```
