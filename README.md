# Image Processing Api

project use node js and express to create api
make resize to image if exist in images folder.

## EndPonints in app

1- get list of files names in folder images

```http
GET /api/images
```

2- resize image by params [imagename, width, height]

```http
GET api/images/resize?imagename=fjord&width=100&height=100
```

### parameters

- imagename value string required.
- height value number required.
- width value number required.

## scripts in app

Run lint

```bash
npm run lint
```

Fix lint issus

```bash
npm run lint:fix
```

Run prettier

```bash
npm run prettier
```

Run build app

```bash
npm run build
```

Run test app (will run build and test)

```bash
npm run test
```

Start app

```bash
npm run start
```
