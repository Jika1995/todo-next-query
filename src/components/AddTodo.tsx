// import React, { useState } from 'react';
// import { useCreateTodo } from '@/services/createTodo';
// //mantine
// import { Button, Modal, TextInput, Group, Checkbox } from '@mantine/core';
// import { useForm } from '@mantine/form';

// type FormValues = {
//   title: string;
//   completed: boolean;
// } //типизация формы

// const AddTodo = () => {
//   //mantine
//   const form = useForm<FormValues>({
//     initialValues: {
//       title: '',
//       completed: false,
//     },
//     validate: {
//       title: (value) => (/^\S+@\S+$/.test(value) ? null : 'Invalid title'),
//     },
//   });


//   const [opened, setOpened] = useState(false);

//   //logic

//   const [createTodo] = useCreateTodo();

//   function handleSubmit(values: FormValues) {
//     createTodo({ data: values });
//     setOpened(false);
//     form.reset(); //сбрасывает все настройки формы до initial values
//   };

//   return (
//     <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
//       <Button onClick={() => setOpened(true)} mt='md' my='md'>Add New Task</Button>
//       <Modal
//         opened={opened}
//         size='md'
//         title='New Task'
//         withCloseButton={false}
//         onClose={() => setOpened(false)}
//         centered
//       >
//         <form onSubmit={form.onSubmit(handleSubmit)}>

//           <TextInput
//             withAsterisk
//             label="Title"
//             placeholder="Task Title"
//             {...form.getInputProps('title')}
//           />

//           <Checkbox
//             mt="md"
//             label="Done or not?"
//             {...form.getInputProps('completed', { type: 'checkbox' })}
//           />

//           <Group position="right" mt="md">
//             <Button type="submit">Add</Button>
//           </Group>
//         </form>
//       </Modal>
//     </div>
//   )
// }

// export default AddTodo