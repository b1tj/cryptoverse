import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const newsHeader = {
    'X-BingApis-SDK': 'true',
    'X-RapidAPI-Key': '2532a88217mshb6a5952671cfdb5p13a2afjsnbe0c8014ce2f',
    'X-RapidAPI-Host': 'bing-news-search1.p.rapidapi.com',
}

const baseUrl = 'https://bing-news-search1.p.rapidapi.com'

const createRequest = (url) => ({ url, headers: newsHeader })

export const cryptoNewsApi = createApi({
    reducerPath: 'cryptoNewsApi',
    baseQuery: fetchBaseQuery({
        baseUrl,
        prepareHeaders: (headers) => {
            for (const key in newsHeader) {
                headers.set(key, newsHeader[key])
            }
            return headers
        },
    }),
    endpoints: (builder) => ({
        getCryptoNews: builder.query({
            query: ({ newsCategory, count }) =>
                `/news/search?q=${newsCategory}&safeSearch=Off&textFormat=Raw&freshness=Day&count=${count}`,
        }),
    }),
})

export const { useGetCryptoNewsQuery } = cryptoNewsApi
