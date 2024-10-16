import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const postApi = createApi({
  reducerPath: "postApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:8000/api/v1/" }),
  tagTypes: ["Posts"],
  endpoints: (builder) => ({
    getAllUser: builder.query({
      query: (url) => ({
        url: url,
        method: "GET",
      }),
      providesTags: ["Posts"],
    }),
    getUserById: builder.query({
      query: (id) => ({
        url: `get/${id}`,
        method: "GET",
      }),
    }),
    deleteUserById: builder.mutation({
      query: (id) => ({
        url: `delete/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Posts"],
    }),
    postUser: builder.mutation({
      query: (newPost) => ({
        url: "post",
        method: "POST",
        body: newPost,
      }),
      invalidatesTags: ["Posts"],
    }),
    updateUser: builder.mutation({
      query: ({ id, formData }) => ({
        url: `put/${id}`,
        method: "PUT",
        body: formData,
      }),
      invalidatesTags: ["Posts"],
    }),
  }),
});

export const {
  useGetAllUserQuery,
  useDeleteUserByIdMutation,
  useGetUserByIdQuery,
  usePostUserMutation,
  useUpdateUserMutation,
} = postApi;

// ______OPTIMASTIC_________
// async onQueryStarted(newPost, { dispatch, queryFulfilled }) {
//   const patchResult = dispatch(
//     api.util.updateQueryData("getPosts", undefined, (draft) => {
//       draft.unshift(newPost);
//     })
//   );
//   try {
//     await queryFulfilled;
//   } catch {
//     patchResult.undo();
//   }
// },
// ______OPTIMASTIC_________
