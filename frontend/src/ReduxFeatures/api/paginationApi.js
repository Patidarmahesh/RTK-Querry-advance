import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const productApi = createApi({
  reducerPath: "productApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://dummyjson.com/",
  }),
  endpoints: (builder) => ({
    getProduct: builder.query({
      query: ({ limit, skip, search: query }) => ({
        url: `products/search?limit=${limit}&skip=${skip}&q=${query}`,
        method: "GET",
      }),
    }),
    allProductsGet: builder.query({
      query: (url) => ({
        url: url,
        method: "GET",
      }),
    }),
  }),
});

export const { useAllProductsGetQuery, useGetProductQuery } = productApi;
