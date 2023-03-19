import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';
import {faker} from "@faker-js/faker";

const [Album, UsersAlbums] = ['Album', 'UsersAlbums'];

const pause = (duration) => {
    return new Promise((resolve, reject) => {
        setTimeout(resolve, duration);
    });
}

const AlbumsApi = createApi({
    reducerPath: 'albums',
    baseQuery: fetchBaseQuery({
        baseUrl: process.env.REACT_APP_API_URL,
        // delete for PRODUCTION
        // fetchFn: async (...args) => {
        //     await pause(1000);
        //     return fetch(...args);
        // }
    }),
    endpoints: (builder) => {
        return {

            fetchAlbums: builder.query({
                query: (user) => {
                    return {
                        url: 'albums/',
                        params: {
                            userId: user.id,
                        },
                        method: 'GET',
                    };
                },
                providesTags: (result, error, user) => {
                    // clever and fine-grained tag invalidation, generate tag for each returned album + one of user
                    // deleteAlbum will invalidate only 1 tag with that album Id but the whole fetch query will be
                    // invalidated
                    const tags = result.map((album) => ({
                        type: Album,
                        id: album.id,
                    }));

                    return [...tags, {type: UsersAlbums, id: user.id}];
                },
            }),

            addAlbum: builder.mutation({
                query: (user) => {
                    return {
                        url: 'albums/',
                        body: {
                            userId: user.id,
                            title: faker.commerce.productName(),
                        },
                        method: 'POST',
                    };
                },
                invalidatesTags: (result, error, user) => {

                    return ([{type: UsersAlbums, id: user.id}]);
                },
            }),

            deleteAlbum: builder.mutation({
                query: (album) => ({
                    url: `/albums/${album.id}`,
                    method: 'DELETE',
                }),
                invalidatesTags: (result, error, album) => [{type: Album, id: album.id}],
            }),

        };
    },
});

export const {useFetchAlbumsQuery, useAddAlbumMutation, useDeleteAlbumMutation} = AlbumsApi;
export {AlbumsApi};