

# ZeroProtocolLabs

## Install application 

```shell
yarn
```
## Set up the DB using Docker:

```shell
docker run --name zero-postgres -e POSTGRES_PASSWORD=postgres -e POSTGRES_DB=zero-protocol-labs -d -p 5432:5432 postgres:13.3-alpine
```

```shell
yarn db:migrate:generate
```

```shell
yarn db:migrate:reset
```

## Build app

```shell
yarn build
```

## Launch application 

```shell
yarn start
```
