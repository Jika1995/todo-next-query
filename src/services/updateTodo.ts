import { baseAxios } from "@/utils/baseAxios";
import { Todo } from "@/utils/types/todo";
import { useMutation, useQueryClient} from '@tanstack/react-query';

type UpdateTodoArg = {
    id: number,
    data: Partial<Omit<Todo, "id">> //partial - необязательное
}

const updateTodo = async (arg: UpdateTodoArg) => {
    const {data} = await baseAxios.patch<Todo>(`/todos/${arg.id}`, arg.data);
    return data
}

export const useUpdateTodo = () => {

    const queryClient = useQueryClient();

    const mutation = useMutation({
        mutationFn: updateTodo,
        onSettled() {
            queryClient.invalidateQueries({ //обновляет запросы
                predicate(query) {
                    return query.queryKey?.[0] === "todos" //работает как фильтр
                }
            })
        }
    })
    //ПОЧИТАТЬ!

    return [mutation.mutateAsync, mutation] as const
}