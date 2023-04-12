import { useFetchTodoById } from "@/services/fetchTodoById";
import { ContextModalProps } from "@mantine/modals";
import TodoForm, { TodoFormValues } from "../TodoForm";
import { useUpdateTodo } from "@/services/updateTodo";

type Props = ContextModalProps<{
    oneTodoId: number
}>

const UpdateTodoModal = ({ context, id, innerProps }: Props) => { //встроенный id
    const [oneTodo, { isLoading, isError }] = useFetchTodoById({
        id: innerProps.oneTodoId
    });
    const [updateTodo] = useUpdateTodo();

    const saveChanges = (values: TodoFormValues) => {

        updateTodo({
            id: innerProps.oneTodoId,
            data: values
        });

        context.closeModal(id);
    }

    if (isLoading) return <h1>Loading ...</h1>;
    if (isError) return <h1>Something wrong!!</h1>;
    if (!oneTodo) return <h1>Not Found</h1>; //чтобы тайпскрипт знал, что нужно остановиться и null не будет

    return (
        <TodoForm
            defaultValues={{
                title: oneTodo.title,
                completed: oneTodo.completed, //почему ругается без вопроса, откуда приходит null
            }}
            onSubmit={saveChanges}
        />
    )
};

export default UpdateTodoModal;



