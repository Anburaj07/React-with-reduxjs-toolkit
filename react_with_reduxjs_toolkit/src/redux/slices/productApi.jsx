import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const productApi = createApi({
  reducerPath: "productApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://65967cfd6bb4ec36ca02b8c6.mockapi.io/",
  }),
  tagTypes: ["employees"],
  endpoints: (builder) => ({
    getProducts: builder.query({
      query: () => "/employees",
      providesTags: ["employees"],
    }),
    getProductById: builder.query({
      query: (id) => `/employees/${id}`,
      providesTags: ["employees"],
    }),
    addProduct: builder.mutation({
      query: (product) => ({
        url: "/employees",
        method: "POST",
        body: product,
      }),
      invalidatesTags: ["employees"],
    }),
    deleteProduct: builder.mutation({
      query: (id) => ({
        url: `/employees/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["employees"],
    }),
    editProduct: builder.mutation({
      query: ({ id, ...product }) => ({
        url: `/employees/${id}`,
        method: "PUT",
        body: product,
      }),
      invalidatesTags: ["employees"],
    }),
  }),
});

export const {
  useGetProductsQuery,
  useGetProductByIdQuery,
  useAddProductMutation,
  useDeleteProductMutation,
  useEditProductMutation,
} = productApi;
