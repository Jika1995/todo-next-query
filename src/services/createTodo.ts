import { useMutation, useQueryClient} from '@tanstack/react-query';
import { Todo } from '@/utils/types/todo';
import { baseAxios } from '@/utils/baseAxios';
import { create } from 'domain';

type CreateTodoArg = {
    data: Omit<Todo, "id">
}

//удаление id с объекта туду и создание типа, чтобы потом не ругался

const createTodo = async (arg: CreateTodoArg) => {
    
    const { data } = await baseAxios.post<Todo>("/todos", {
        ...arg.data
    });

    return data
}

export const useCreateTodo = () => {
    const queryClient = useQueryClient();

    const mutation = useMutation({
        mutationFn: createTodo,
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