import {BaseQueryFn} from "@reduxjs/toolkit/query";
import {createApi} from "@reduxjs/toolkit/query/react";
import axios, {AxiosError, AxiosRequestConfig} from "axios";
import {Collection} from "./collection.model";

const axiosBaseQuery =
    (
        {baseUrl}: { baseUrl: string } = {baseUrl: ''}
    ): BaseQueryFn<{
        url: string
        method: AxiosRequestConfig['method']
        data?: AxiosRequestConfig['data']
        params?: AxiosRequestConfig['params']
    },
        unknown,
        unknown> =>
        async ({url, method, data, params}) => {
            try {
                const result = await axios({url: baseUrl + url, method, data, params})
                return {data: result.data}
            } catch (axiosError) {
                let err = axiosError as AxiosError
                return {
                    error: {
                        status: err.response?.status,
                        data: err.response?.data || err.message,
                    },
                }
            }
        }

export const collectionApi = createApi({
    reducerPath: 'api',
    baseQuery: axiosBaseQuery({baseUrl: 'http://localhost:8080'}),
    tagTypes: ['Collection'],
    endpoints: (builder) => ({
        getCollections: builder.query<Collection[], void>({
            query: () => ({
                url: '/collections',
                method: 'get'
            })
        }),
        addCollection: builder.mutation<Collection, Partial<Collection>>({
            query: (collection) => ({
                url: '/collection',
                method: 'post',
                body: collection
            })
        })
    })
});

export const {useGetCollectionsQuery, useAddCollectionMutation} = collectionApi;