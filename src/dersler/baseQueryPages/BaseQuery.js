import { useQuery, useMutation } from "@tanstack/react-query"
import { axiosInstance } from "../network/axiosInstance";


export const GetQuery = (endpoint, key, minutesCount = 2) => {

    const second = 1000;
    const minute = 60 * second;



    const query = useQuery({
        queryKey: [key],
        queryFn: () => {
            return axiosInstance.get(endpoint).then(res => res.data)

        },
        staleTime: minute * minutesCount,
    })

    return query;

}


export const PostDataQuery = (endpoint, data) => {

    const mutation = useMutation({
        mutationFn: async () => {

            const { data } = axiosInstance.post(endpoint, data);
            return data;
        },
        onSuccess: (data) => {
            console.log("success", data);
        },
        onError: (err) => {
            console.log("err", err);
        },
    })


    // return mutation;

}


