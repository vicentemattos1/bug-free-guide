import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import type { DashboardResponse } from './types'

export const dashboardApi = createApi({
  reducerPath: 'pokemonApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://www.paralleldots.com/' }),
  endpoints: (build) => ({
    sendText: build.mutation<DashboardResponse, string >({
      query: (input) => ({
        url: `/sentiment`,
        method: 'POST',
        body: {text: input },
      }),
      
    }),
  }),
})

export const { useSendTextMutation } = dashboardApi