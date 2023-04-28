import api, { fetcher } from "../services/api-service";
import useSWR from 'swr';

export const addNewPostService = (request: IAddNewPostServiceRequest) => {
    return api.post('/post/addnew', request).then(({ data }: IAddNewPostServiceResponse) => data);
}

export const getAllPostsByUserService = (alternalName: string) => {
    return api.get(`/post/getbyuser?alternalName=${alternalName}`,).then(({ data }: IGetPostsByUserServiceResponse) => data);
}

export const useMyPosts = (alternalName: string) => {
    const { data, error, isLoading, mutate } = useSWR<IGetAllPostsServiceResponse>(`/post/getbyuser?alternalName=${alternalName}`, fetcher)
    return {
        isLoading,
        error,
        data,
        mutate
    }
}

export const usePosts = () => {
    const { data, error, isLoading, mutate } = useSWR<IGetAllPostsServiceResponse>(`/post/getall`, fetcher)
    return {
        isLoading,
        error,
        data,
        mutate
    }
}

interface IAddNewPostServiceRequest {
    description: string;
}

interface IAddNewPostServiceResponse {
    data: {
        ok: boolean;
        data: {
            post: {
                id: number;
                description: string;
                created_date: string;
                userId: number;
            }
        }
    },
}

export interface IPost {
    id: number;
    description: string;
    created_date: string;
    userId: number;
    user?: {
        selectedCharacter: number;
        name: string;
        alternalName: string;
    }
}

interface IGetAllPostsServiceResponse {
    ok: boolean;
    data: {
        posts: IPost[]
    }
}

interface IGetPostsByUserServiceResponse {
    data: {
        ok: boolean;
        data: {
            posts: IPost[]
        }
    },
}
