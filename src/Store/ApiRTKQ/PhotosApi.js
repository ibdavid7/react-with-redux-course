import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';
import {nanoid} from "@reduxjs/toolkit";
import {faker} from "@faker-js/faker";

const [Photo, AlbumsPhotos] = ['Photo', 'AlbumsPhotos'];

const PhotosApi = createApi({
    reducerPath: 'photos',
    baseQuery: fetchBaseQuery({
        baseUrl: process.env.REACT_APP_API_URL,
    }),
    // tagTypes: ['Photos'],
    endpoints: (build) => {
        return {

            fetchPhotos: build.query({
                // note: an optional `queryFn` may be used in place of `query`

                query: (album) => {
                    return ({
                        url: `photos/`,
                        params: {
                            albumId: album.id,
                        },
                        method: 'GET'
                    })
                },
                // Pick out data and prevent nested properties in a hook or selector
                // transformResponse: (response, meta, arg) => response.data,
                // Pick out errors and prevent nested properties in a hook or selector
                // transformErrorResponse: (response, meta, arg) => response.status,
                providesTags: (result, error, album) => {

                    const tags = result.map((photo) => ({
                        type: Photo,
                        id: photo.id,
                    }));

                    return [...tags, {type: AlbumsPhotos, id: album.id}];
                },
            }),

            addPhoto: build.mutation({
                query: (album) => ({
                    url: 'photos/',
                    body: {
                        id: nanoid(),
                        albumId: album.id,
                        url: faker.image.imageUrl(200, 200, 'business', true),
                    },
                    method: 'POST',
                }),
                invalidatesTags: (result, error, album) => ([{type: AlbumsPhotos, id: album.id}]),
            }),

            deletePhoto: build.mutation({
                query: (photo) => ({
                    url: `/photos/${photo.id}`,
                    method: 'DELETE'
                }),
                invalidatesTags: (result, error, photo) => ([{type: Photo, id: photo.id}]),
            }),

        }
    },
})

export const {useFetchPhotosQuery, useAddPhotoMutation, useDeletePhotoMutation} = PhotosApi;
export {PhotosApi};