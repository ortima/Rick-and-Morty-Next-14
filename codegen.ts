import { CodegenConfig } from "@graphql-codegen/cli";

const config: CodegenConfig = {
  schema: "src/schema.graphql",
  documents: ["src/lib/graphql"],
  generates: {
    "./src/__generated__/": {
      preset: "client",
      // presetConfig: {
      //   gqlTagName: "gql",
      // },
    },
  },
  ignoreNoDocuments: true,
};

export default config;
