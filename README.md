# ZeroProtocolLabs

## Install application

```shell
yarn
```

## Start development stack with Docker Compose:

The following will be started:

1. main Postgres instance
2. Issuer API Postgres instance
3. Ganache

```shell
docker-compose -f docker-compose-dev.yaml up -d
```

You can start these processes manually one by one with parameters you can find in the `docker-compose-dev.yaml` file

## Update database schemas
To create/update database schemas execute the following:

```shell
yarn migrate:all
```

To reset database schemas and Ganache storage and recreate from scratch, execute the following:

```shell
docker-compose -f docker-compose-dev.yaml down -v
docker-compose -f docker-compose-dev.yaml up -d
yarn migrate:all
```

To seed the system with sample data necessary to develop, execute the following. It will submit data to the system over
REST API and backend processes will save transactions on Ganache local chain

```shell
yarn seed:all:dev
```

## Update Prisma ORM client

Usually, it is safe to regenerate Prisma client, especially after making changes to the schema or switching branches:

```shell
yarn db:migrate:generate
```

## Build app

```shell
yarn build
```

## Launch application

```shell
yarn start
```
