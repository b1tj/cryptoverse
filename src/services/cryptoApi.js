import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const baseUrl = 'https://coinranking1.p.rapidapi.com'

export const cryptoApi = createApi({
    reducerPath: 'cryptoApi',
    baseQuery: fetchBaseQuery({
        baseUrl,
        prepareHeaders: (headers) => {
            headers.set('X-RapidAPI-Host', 'coinranking1.p.rapidapi.com')
            headers.set('X-RapidAPI-Key', '2532a88217mshb6a5952671cfdb5p13a2afjsnbe0c8014ce2f')
            return headers
        },
    }),
    endpoints: (builder) => ({
        getCryptos: builder.query({
            query: (count) => `/coins?limit=${count}`,
        }),
        getCryptoDetails: builder.query({
            query: (coinId) => `/coin/${coinId}`,
        }),
        getCryptoHistory: builder.query({
            query: ({ coinId, timePeriod }) => `/coin/${coinId}/history?timePeriod=${timePeriod}`,
        }),
    }),
})

export const { useGetCryptosQuery, useGetCryptoDetailsQuery, useGetCryptoHistoryQuery } = cryptoApi
