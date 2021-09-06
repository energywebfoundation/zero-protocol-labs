module.exports = {
  zeroProtocolLabs: {
    input: {
      target: './swagger.json',
    },
    output: {
      client: 'react-query',
      mode: 'tags',
      target: './src/api',
      override: {
        mutator: './src/response-type.ts',
      },
    },
  },
};
