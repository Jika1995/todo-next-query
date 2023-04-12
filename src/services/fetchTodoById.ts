import { baseAxios } from "@/utils/baseAxios";
import { Todo } from "@/utils/types/todo";
import { useQuery } from '@tanstack/react-query';

type fetchTodoByIdArg = {
    id: number
}

export const fetchTodoById = async (arg: fetchTodoByIdArg) => {
    const { data } = await baseAxios.get<Todo>(`/todos/${arg.id}`);
    // console.log(data);

    return data
};

export const useFetchTodoById = (arg: fetchTodoByIdArg) => {
    const query = useQuery({
        queryFn: () => fetchTodoById(arg),
        queryKey: ["todos", arg],
        initialData: null, //чтобы был дефолтный массив
    }) //usequery вызовет функцию, получит данные и вернет

    return [query.data, query] as const;
};