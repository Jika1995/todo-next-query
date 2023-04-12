import React from "react";
import { useFetchTodos } from "@/services/fetchTodos";
import { useCreateTodo } from "@/services/createTodo";
import TodoItem from './TodoItem';

//mantine
import { Button, Group, Container, Title, } from '@mantine/core';
import { openContextModal } from "@mantine/modals";
// import { useForm } from '@mantine/form';
// import { ActionIcon } from '@mantine/core';
// import { IconEdit, IconTrash } from '@tabler/icons-react';

// type FormValues = {
//     title: string;
//     completed: boolean;
// } //типизация формы

const TodoList = () => {

    // const [id, setId] = useState(0);
    const [data] = useFetchTodos();

    const addNewTodo = () => {
        openContextModal({
            title: 'Add New Task',
            modal: 'createTodo',
            innerProps: {}
        });
    };

    // const [updateTodo] = useUpdateTodo();
    // const [deleteTodo] = useDeleteTodo();

    //mantine
    // const form = useForm<FormValues>({
    //     initialValues: {
    //         title: "",
    //         completed: false,
    //     },
    // });

    // const [opened, setOpened] = useState(false);

    //logic
    // const handleEdit = async (item: Todo) => {

    //     setId(item.id)
    //     form.setValues(item);
    //     setOpened(true);

    // }

    // const saveChanges = (values: FormValues) => {

    //     updateTodo({
    //         id: id,
    //         data: values
    //     });

    //     setOpened(false);
    //     form.reset();
    // }

    // const handleToggle = (item: Todo) => {
    //     updateTodo({
    //         id: item.id,
    //         data: {
    //             completed: !item.completed
    //         }
    //     });
    // }

    return (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', marginTop: '50px' }}>
            {/* <Modal
                opened={opened}
                size='md'
                title='Edit Task'
                withCloseButton={false}
                onClose={() => setOpened(false)}
                centered
            >
                <form onSubmit={form.onSubmit(saveChanges)}>

                    <TextInput
                        withAsterisk
                        label="Title"
                        placeholder="Task Title"
                        {...form.getInputProps('title')}
                    />

                    <Checkbox
                        mt="md"
                        label="Done or not?"
                        {...form.getInputProps('completed', { type: 'checkbox' })}
                    />

                    <Group position="right" mt="md">
                        <Button type="submit">Save changes</Button>
                    </Group>
                </form>
            </Modal> */}
            <Container style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
                <Group position="apart">
                    <Title>My Tasks</Title>
                </Group>
                <Group style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
                    {data.map(item => (
                        <TodoItem key={item.id} oneTodo={item} />
                    ))}
                </Group>
                <Button mt='md' my='md' onClick={addNewTodo}>Add New Task</Button>
            </Container>

        </div>
    )
}

export default TodoList