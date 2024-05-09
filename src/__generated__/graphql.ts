/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from "@graphql-typed-document-node/core";
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]?: Maybe<T[SubKey]>;
};
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]: Maybe<T[SubKey]>;
};
export type MakeEmpty<
  T extends { [key: string]: unknown },
  K extends keyof T,
> = { [_ in K]?: never };
export type Incremental<T> =
  | T
  | {
      [P in keyof T]?: P extends " $fragmentName" | "__typename" ? T[P] : never;
    };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string };
  String: { input: string; output: string };
  Boolean: { input: boolean; output: boolean };
  Int: { input: number; output: number };
  Float: { input: number; output: number };
  /** The `Upload` scalar type represents a file upload. */
  Upload: { input: any; output: any };
};

export enum CacheControlScope {
  Private = "PRIVATE",
  Public = "PUBLIC",
}

export type Character = {
  __typename?: "Character";
  /** Time at which the character was created in the database. */
  created?: Maybe<Scalars["String"]["output"]>;
  /** Episodes in which this character appeared. */
  episode?: Array<Maybe<Episode>>;
  /** The gender of the character ('Female', 'Male', 'Genderless' or 'unknown'). */
  gender?: Maybe<Scalars["String"]["output"]>;
  /** The id of the character. */
  id?: Maybe<Scalars["ID"]["output"]>;
  /**
   * Link to the character's image.
   * All images are 300x300px and most are medium shots or portraits since they are intended to be used as avatars.
   */
  image?: Maybe<Scalars["String"]["output"]>;
  /** The character's last known location */
  location?: Maybe<Location>;
  /** The name of the character. */
  name?: Maybe<Scalars["String"]["output"]>;
  /** The character's origin location */
  origin?: Maybe<Location>;
  /** The species of the character. */
  species?: Maybe<Scalars["String"]["output"]>;
  /** The status of the character ('Alive', 'Dead' or 'unknown'). */
  status?: Maybe<Scalars["String"]["output"]>;
  /** The type or subspecies of the character. */
  type?: Maybe<Scalars["String"]["output"]>;
};

export type Characters = {
  __typename?: "Characters";
  info?: Maybe<Info>;
  results?: Maybe<Array<Maybe<Character>>>;
};

export type Episode = {
  __typename?: "Episode";
  /** The air date of the episode. */
  air_date?: Maybe<Scalars["String"]["output"]>;
  /** List of characters who have been seen in the episode. */
  characters: Array<Maybe<Character>>;
  /** Time at which the episode was created in the database. */
  created?: Maybe<Scalars["String"]["output"]>;
  /** The code of the episode. */
  episode?: Maybe<Scalars["String"]["output"]>;
  /** The id of the episode. */
  id?: Maybe<Scalars["ID"]["output"]>;
  /** The name of the episode. */
  name?: Maybe<Scalars["String"]["output"]>;
};

export type Episodes = {
  __typename?: "Episodes";
  info?: Maybe<Info>;
  results?: Maybe<Array<Maybe<Episode>>>;
};

export type FilterCharacter = {
  gender?: InputMaybe<Scalars["String"]["input"]>;
  name?: InputMaybe<Scalars["String"]["input"]>;
  species?: InputMaybe<Scalars["String"]["input"]>;
  status?: InputMaybe<Scalars["String"]["input"]>;
  type?: InputMaybe<Scalars["String"]["input"]>;
};

export type FilterEpisode = {
  episode?: InputMaybe<Scalars["String"]["input"]>;
  name?: InputMaybe<Scalars["String"]["input"]>;
};

export type FilterLocation = {
  dimension?: InputMaybe<Scalars["String"]["input"]>;
  name?: InputMaybe<Scalars["String"]["input"]>;
  type?: InputMaybe<Scalars["String"]["input"]>;
};

export type Info = {
  __typename?: "Info";
  /** The length of the response. */
  count?: Maybe<Scalars["Int"]["output"]>;
  /** Number of the next page (if it exists) */
  next?: Maybe<Scalars["Int"]["output"]>;
  /** The amount of pages. */
  pages?: Maybe<Scalars["Int"]["output"]>;
  /** Number of the previous page (if it exists) */
  prev?: Maybe<Scalars["Int"]["output"]>;
};

export type Location = {
  __typename?: "Location";
  /** Time at which the location was created in the database. */
  created?: Maybe<Scalars["String"]["output"]>;
  /** The dimension in which the location is located. */
  dimension?: Maybe<Scalars["String"]["output"]>;
  /** The id of the location. */
  id?: Maybe<Scalars["ID"]["output"]>;
  /** The name of the location. */
  name?: Maybe<Scalars["String"]["output"]>;
  /** List of characters who have been last seen in the location. */
  residents?: Array<Maybe<Character>>;
  /** The type of the location. */
  type?: Maybe<Scalars["String"]["output"]>;
};

export type Locations = {
  __typename?: "Locations";
  info?: Maybe<Info>;
  results?: Maybe<Array<Maybe<Location>>>;
};

export type Query = {
  __typename?: "Query";
  /** Get a specific character by ID */
  character?: Maybe<Character>;
  /** Get the list of all characters */
  characters?: Maybe<Characters>;
  /** Get a list of characters selected by ids */
  charactersByIds?: Maybe<Array<Maybe<Character>>>;
  /** Get a specific episode by ID */
  episode?: Maybe<Episode>;
  /** Get the list of all episodes */
  episodes?: Maybe<Episodes>;
  /** Get a list of episodes selected by ids */
  episodesByIds?: Maybe<Array<Maybe<Episode>>>;
  /** Get a specific locations by ID */
  location?: Maybe<Location>;
  /** Get the list of all locations */
  locations?: Maybe<Locations>;
  /** Get a list of locations selected by ids */
  locationsByIds?: Maybe<Array<Maybe<Location>>>;
};

export type QueryCharacterArgs = {
  id: Scalars["ID"]["input"];
};

export type QueryCharactersArgs = {
  filter?: InputMaybe<FilterCharacter>;
  page?: InputMaybe<Scalars["Int"]["input"]>;
};

export type QueryCharactersByIdsArgs = {
  ids: Array<Scalars["ID"]["input"]>;
};

export type QueryEpisodeArgs = {
  id: Scalars["ID"]["input"];
};

export type QueryEpisodesArgs = {
  filter?: InputMaybe<FilterEpisode>;
  page?: InputMaybe<Scalars["Int"]["input"]>;
};

export type QueryEpisodesByIdsArgs = {
  ids: Array<Scalars["ID"]["input"]>;
};

export type QueryLocationArgs = {
  id: Scalars["ID"]["input"];
};

export type QueryLocationsArgs = {
  filter?: InputMaybe<FilterLocation>;
  page?: InputMaybe<Scalars["Int"]["input"]>;
};

export type QueryLocationsByIdsArgs = {
  ids: Array<Scalars["ID"]["input"]>;
};

export type GetCharacterQueryVariables = Exact<{
  id: Scalars["ID"]["input"];
}>;

export type GetCharacterQuery = {
  __typename?: "Query";
  character?: {
    __typename?: "Character";
    id?: string | null;
    name?: string | null;
    status?: string | null;
    species?: string | null;
    gender?: string | null;
    type?: string | null;
    image?: string | null;
    origin?: {
      __typename?: "Location";
      id?: string | null;
      name?: string | null;
      type?: string | null;
      dimension?: string | null;
    } | null;
    location?: {
      __typename?: "Location";
      id?: string | null;
      name?: string | null;
      type?: string | null;
      dimension?: string | null;
    } | null;
    episode: Array<{
      __typename?: "Episode";
      id?: string | null;
      episode?: string | null;
      name?: string | null;
      air_date?: string | null;
    } | null>;
  } | null;
};

export type GetCharactersQueryVariables = Exact<{
  page?: InputMaybe<Scalars["Int"]["input"]>;
  filter?: InputMaybe<FilterCharacter>;
}>;

export type GetCharactersQuery = {
  __typename?: "Query";
  characters?: {
    __typename?: "Characters";
    info?: {
      __typename?: "Info";
      count?: number | null;
      pages?: number | null;
      prev?: number | null;
      next?: number | null;
    } | null;
    results?: Array<{
      __typename?: "Character";
      id?: string | null;
      name?: string | null;
      status?: string | null;
      species?: string | null;
      type?: string | null;
      gender?: string | null;
      image?: string | null;
      location?: { __typename?: "Location"; name?: string | null } | null;
    } | null> | null;
  } | null;
};

export type GetEpisodeQueryVariables = Exact<{
  id: Scalars["ID"]["input"];
}>;

export type GetEpisodeQuery = {
  __typename?: "Query";
  episode?: {
    __typename?: "Episode";
    id?: string | null;
    name?: string | null;
    air_date?: string | null;
    characters: Array<{
      __typename?: "Character";
      id?: string | null;
      name?: string | null;
      image?: string | null;
    } | null>;
  } | null;
};

export type GetEpisodesQueryVariables = Exact<{
  page?: InputMaybe<Scalars["Int"]["input"]>;
  filter?: InputMaybe<FilterEpisode>;
}>;

export type GetEpisodesQuery = {
  __typename?: "Query";
  episodes?: {
    __typename?: "Episodes";
    info?: {
      __typename?: "Info";
      count?: number | null;
      pages?: number | null;
      next?: number | null;
      prev?: number | null;
    } | null;
    results?: Array<{
      __typename?: "Episode";
      id?: string | null;
      name?: string | null;
      air_date?: string | null;
      characters: Array<{
        __typename?: "Character";
        id?: string | null;
        name?: string | null;
      } | null>;
    } | null> | null;
  } | null;
};

export type GetLocationsQueryVariables = Exact<{
  page?: InputMaybe<Scalars["Int"]["input"]>;
}>;

export type GetLocationsQuery = {
  __typename?: "Query";
  locations?: {
    __typename?: "Locations";
    info?: {
      __typename?: "Info";
      count?: number | null;
      pages?: number | null;
      next?: number | null;
      prev?: number | null;
    } | null;
    results?: Array<{
      __typename?: "Location";
      id?: string | null;
      name?: string | null;
      dimension?: string | null;
      type?: string | null;
      residents: Array<{
        __typename?: "Character";
        id?: string | null;
        name?: string | null;
      } | null>;
    } | null> | null;
  } | null;
};

export const GetCharacterDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "query",
      name: { kind: "Name", value: "getCharacter" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "id" } },
          type: {
            kind: "NonNullType",
            type: { kind: "NamedType", name: { kind: "Name", value: "ID" } },
          },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "character" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "id" },
                value: {
                  kind: "Variable",
                  name: { kind: "Name", value: "id" },
                },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "id" } },
                { kind: "Field", name: { kind: "Name", value: "name" } },
                { kind: "Field", name: { kind: "Name", value: "status" } },
                { kind: "Field", name: { kind: "Name", value: "species" } },
                { kind: "Field", name: { kind: "Name", value: "gender" } },
                { kind: "Field", name: { kind: "Name", value: "type" } },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "origin" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "Field", name: { kind: "Name", value: "id" } },
                      { kind: "Field", name: { kind: "Name", value: "name" } },
                      { kind: "Field", name: { kind: "Name", value: "type" } },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "dimension" },
                      },
                    ],
                  },
                },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "location" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "Field", name: { kind: "Name", value: "id" } },
                      { kind: "Field", name: { kind: "Name", value: "name" } },
                      { kind: "Field", name: { kind: "Name", value: "type" } },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "dimension" },
                      },
                    ],
                  },
                },
                { kind: "Field", name: { kind: "Name", value: "image" } },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "episode" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "Field", name: { kind: "Name", value: "id" } },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "episode" },
                      },
                      { kind: "Field", name: { kind: "Name", value: "name" } },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "air_date" },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<GetCharacterQuery, GetCharacterQueryVariables>;
export const GetCharactersDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "query",
      name: { kind: "Name", value: "getCharacters" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "page" } },
          type: { kind: "NamedType", name: { kind: "Name", value: "Int" } },
        },
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "filter" },
          },
          type: {
            kind: "NamedType",
            name: { kind: "Name", value: "FilterCharacter" },
          },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "characters" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "page" },
                value: {
                  kind: "Variable",
                  name: { kind: "Name", value: "page" },
                },
              },
              {
                kind: "Argument",
                name: { kind: "Name", value: "filter" },
                value: {
                  kind: "Variable",
                  name: { kind: "Name", value: "filter" },
                },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "Field",
                  name: { kind: "Name", value: "info" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "Field", name: { kind: "Name", value: "count" } },
                      { kind: "Field", name: { kind: "Name", value: "pages" } },
                      { kind: "Field", name: { kind: "Name", value: "prev" } },
                      { kind: "Field", name: { kind: "Name", value: "next" } },
                    ],
                  },
                },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "results" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "Field", name: { kind: "Name", value: "id" } },
                      { kind: "Field", name: { kind: "Name", value: "name" } },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "status" },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "species" },
                      },
                      { kind: "Field", name: { kind: "Name", value: "type" } },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "gender" },
                      },
                      { kind: "Field", name: { kind: "Name", value: "image" } },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "location" },
                        selectionSet: {
                          kind: "SelectionSet",
                          selections: [
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "name" },
                            },
                          ],
                        },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<GetCharactersQuery, GetCharactersQueryVariables>;
export const GetEpisodeDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "query",
      name: { kind: "Name", value: "getEpisode" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "id" } },
          type: {
            kind: "NonNullType",
            type: { kind: "NamedType", name: { kind: "Name", value: "ID" } },
          },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "episode" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "id" },
                value: {
                  kind: "Variable",
                  name: { kind: "Name", value: "id" },
                },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "id" } },
                { kind: "Field", name: { kind: "Name", value: "name" } },
                { kind: "Field", name: { kind: "Name", value: "air_date" } },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "characters" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "Field", name: { kind: "Name", value: "id" } },
                      { kind: "Field", name: { kind: "Name", value: "name" } },
                      { kind: "Field", name: { kind: "Name", value: "image" } },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<GetEpisodeQuery, GetEpisodeQueryVariables>;
export const GetEpisodesDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "query",
      name: { kind: "Name", value: "getEpisodes" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "page" } },
          type: { kind: "NamedType", name: { kind: "Name", value: "Int" } },
        },
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "filter" },
          },
          type: {
            kind: "NamedType",
            name: { kind: "Name", value: "FilterEpisode" },
          },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "episodes" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "page" },
                value: {
                  kind: "Variable",
                  name: { kind: "Name", value: "page" },
                },
              },
              {
                kind: "Argument",
                name: { kind: "Name", value: "filter" },
                value: {
                  kind: "Variable",
                  name: { kind: "Name", value: "filter" },
                },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "Field",
                  name: { kind: "Name", value: "info" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "Field", name: { kind: "Name", value: "count" } },
                      { kind: "Field", name: { kind: "Name", value: "pages" } },
                      { kind: "Field", name: { kind: "Name", value: "next" } },
                      { kind: "Field", name: { kind: "Name", value: "prev" } },
                    ],
                  },
                },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "results" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "Field", name: { kind: "Name", value: "id" } },
                      { kind: "Field", name: { kind: "Name", value: "name" } },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "air_date" },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "characters" },
                        selectionSet: {
                          kind: "SelectionSet",
                          selections: [
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "id" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "name" },
                            },
                          ],
                        },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<GetEpisodesQuery, GetEpisodesQueryVariables>;
export const GetLocationsDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "query",
      name: { kind: "Name", value: "getLocations" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "page" } },
          type: { kind: "NamedType", name: { kind: "Name", value: "Int" } },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "locations" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "page" },
                value: {
                  kind: "Variable",
                  name: { kind: "Name", value: "page" },
                },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "Field",
                  name: { kind: "Name", value: "info" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "Field", name: { kind: "Name", value: "count" } },
                      { kind: "Field", name: { kind: "Name", value: "pages" } },
                      { kind: "Field", name: { kind: "Name", value: "next" } },
                      { kind: "Field", name: { kind: "Name", value: "prev" } },
                    ],
                  },
                },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "results" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "Field", name: { kind: "Name", value: "id" } },
                      { kind: "Field", name: { kind: "Name", value: "name" } },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "dimension" },
                      },
                      { kind: "Field", name: { kind: "Name", value: "type" } },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "residents" },
                        selectionSet: {
                          kind: "SelectionSet",
                          selections: [
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "id" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "name" },
                            },
                          ],
                        },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<GetLocationsQuery, GetLocationsQueryVariables>;
