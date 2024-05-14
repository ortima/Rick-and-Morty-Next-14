import React from 'react'
import graphqlClient from '@/lib/client'
import GET_LOCATIONS from '@/lib/graphql/locations'
import { ApolloQueryResult } from '@apollo/client'
import Search from '@/components/common/search'
import Link from 'next/link'
import { GetLocationsQuery } from '@/__generated__/graphql'

const Locations = async ({ searchParams }: { searchParams: any }) => {
  const search =
    typeof searchParams.search === 'string' ? searchParams.search : undefined

  const page =
    typeof searchParams.page === 'string' ? Number(searchParams.page) : 1

  const { data }: ApolloQueryResult<GetLocationsQuery> =
    await graphqlClient.query({
      query: GET_LOCATIONS,
      variables: { filter: { name: search }, page: page },
    })

  const locations = data.locations?.results || []

  return (
    <section className="container sm:flex sm:flex-col sm:items-center sm:gap-20 flex flex-col items-center gap-10 ">
      <div className="sm:flex justify-between items-center">
        <div
          className={`text-white mr-4 ${locations.length > 0 ? '' : 'hidden'}`}
        >
          Shown {locations.length} of {data.locations?.info?.count}
        </div>
        <div className="flex items-center">
          <div className="mx-auto">
            <Search search={search} pathname={'/locations'} />
          </div>
        </div>
      </div>
      {locations.length > 0 ? (
        <div className="sm:flex sm:flex-wrap sm:gap-5 grid grid-cols-2 gap-5">
          {locations.map((location) => (
            <div className="p-3 bg-gray-200 rounded-md" key={location?.id}>
              <div>
                {location?.id}. {location?.name}
              </div>
              <div>{location?.dimension}</div>
            </div>
          ))}
        </div>
      ) : (
        <div className="text-white text-center sm:text-2xl text:base">
          Location: {search} not found :(
        </div>
      )}
      <div className="flex gap-10 justify-center text-base  mt-10">
        <Link
          className={`p-5 hover:opacity-60 hover:scale-110 bg-white text-black rounded-2xl ${
            data.locations?.info?.prev == null ? 'hidden' : ''
          }`}
          href={{
            pathname: '/locations',
            query: {
              ...(search ? { search } : {}),
              page: data.locations?.info?.prev,
            },
          }}
        >
          Prev
        </Link>
        <Link
          className={`p-5 hover:opacity-60 hover:scale-110 bg-white text-black rounded-2xl ${
            data.locations?.info?.next == null ? 'hidden' : ''
          }`}
          href={{
            pathname: '/locations',
            query: {
              ...(search ? { search } : {}),
              page: data.locations?.info?.next,
            },
          }}
        >
          Next
        </Link>
      </div>
    </section>
  )
}

export default Locations
