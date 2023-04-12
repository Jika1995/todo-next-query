import { baseAxios } from "@/utils/baseAxios";
import { Todo } from "@/utils/types/todo";
import {useQuery} from '@tanstack/react-query';

export const fetchTodos = async () => {
    const {data} = await baseAxios.get<Todo[]>("/todos");
    // console.log(data);
    
    return data
};

export const useFetchTodos = () => {
    const query = useQuery({
        queryFn: fetchTodos,
        queryKey: ["todos"],
        initialData: [], //чтобы был дефолтный массив
    }) //usequery вызовет функцию, получит данные и вернет

    // query.data; // Todo[] | undefined

    return [query.data, query] as const;
};

// const [data, query] = useFetchTodos();

// query.refetch()