import { baseAxios } from "@/utils/baseAxios";
import { Todo } from "@/utils/types/todo";
import { useMutation, useQueryClient} from '@tanstack/react-query';

async function deleteTodo (id: number) {
    const {data} = await baseAxios.delete<Todo>(`/todos/${id}`);
    return data
}

export const useDeleteTodo = () => {

    const queryClient = useQueryClient();

    const mutation = useMutation({
        mutationFn: deleteTodo,
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