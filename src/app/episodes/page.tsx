import graphqlClient from "@/lib/client";
import GET_EPISODES from "@/lib/graphql/episodes";
import { ApolloQueryResult } from "@apollo/client";
import { GetEpisodesQuery } from "@/__generated__/graphql";

async function getData() {
  const res: ApolloQueryResult<GetEpisodesQuery> = await graphqlClient.query({
    query: GET_EPISODES,
    // variables: { filter: "" },
  });

  if (res.error) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }
  return res;
}
const Episodes = async () => {
  const episodes = await getData();
  return;
};

export default Episodes;
