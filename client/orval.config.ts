const pathToSpec = '../hypr-spec.yml';

export default {
  sustell: {
    input: pathToSpec,
    output: {
      mode: 'tags-split',
      target: 'src/gen/',
      schemas: 'src/gen/model',
      client: 'react-query',
      prettier: true,
      override: {
        header: () => [`⚠️ Generated by orval ⚠️`, `Do not edit manually.`],
        mutator: {
          path: './src/lib/http/customClient.ts',
          name: 'customClient',
        },
        query: {
          useQuery: true,
          useSuspenseQuery: true,
        },
      },
    },
  },
};
