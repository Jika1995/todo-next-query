import React from 'react';
import z from 'zod';
import { useForm, zodResolver } from "@mantine/form";
import { Checkbox, FocusTrap, Stack, TextInput, Group, Button } from "@mantine/core";

type Props = {
    onSubmit(values: TodoFormValues): void;
    defaultValues?: Partial<TodoFormValues>;
}

const todoFormSchema = z.object({
    title: z.string().min(1, "Это поле не может быть пустым!"),
    completed: z.boolean().default(false)
}); //типизировать и валидировать

export type TodoFormValues = z.infer<typeof todoFormSchema>;

const TodoForm = ({ onSubmit, defaultValues = {} }: Props) => {
    const form = useForm<TodoFormValues>({
        initialValues: {
            title: "",
            completed: false,
            ...defaultValues
        },
        validate: zodResolver(todoFormSchema) //адаптер, который позволяет валидировать нашу форм схему
    });

    const handleSubmit = (values: TodoFormValues) => {
        onSubmit(values);
        form.reset();
    };

    return (
        <FocusTrap active>
            <form onSubmit={form.onSubmit(handleSubmit)}>
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
                    <Button type="submit">Save</Button>
                </Group>
            </form>
        </FocusTrap>
    )
}

export default TodoForm