import React from 'react';
import { Group, Checkbox, Card, Text } from '@mantine/core';
import { ActionIcon } from '@mantine/core';
import { IconEdit, IconTrash } from '@tabler/icons-react';
import { useUpdateTodo } from "@/services/updateTodo";
import { useDeleteTodo } from "@/services/deleteTodo";
import { Todo } from '@/utils/types/todo';
import { openContextModal } from "@mantine/modals";

type Props = {
    oneTodo: Todo;
};

const TodoItem = ({ oneTodo }: Props) => {

    const [updateTodo] = useUpdateTodo();
    const [deleteTodo] = useDeleteTodo();

    const handleToggle = () => {
        updateTodo({
            id: oneTodo.id,
            data: {
                completed: !oneTodo.completed
            }
        });
    }

    const handleEdit = () => {
        openContextModal({
            title: 'Edit Task',
            modal: 'updateTodo',
            innerProps: {
                oneTodoId: oneTodo.id
            }
        })
    }

    return (
        <Card withBorder mt='sm' w={'100%'}>
            <Group position="apart">
                <Text w='bold' td={oneTodo.completed ? "line-through" : "none"}>{oneTodo.title}</Text>
                <Group>
                    <Checkbox checked={oneTodo.completed} onChange={handleToggle}
                    />
                    <ActionIcon>
                        <IconEdit color={'#00abfb'} onClick={handleEdit} />
                    </ActionIcon>
                    <ActionIcon>
                        <IconTrash color={oneTodo.completed ? 'red' : '#00abfb'} onClick={() => deleteTodo(oneTodo.id)} />
                    </ActionIcon>
                </Group>
            </Group>
        </Card>
    )
}

export default TodoItem