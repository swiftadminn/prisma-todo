import React from 'react';
import Form from "@/app/components/shared/ui/Form";
import Input from "@/app/components/shared/ui/Input";
import Button from "@/app/components/shared/ui/Button";
import { AiOutlineCheckCircle } from "react-icons/ai";
import { changeStatus } from "@/app/actions/todoActions";

// Todo tipini tanımlıyoruz
interface Todo {
    id: string;
    title: string;
    isCompleted: boolean;
}

// ChangeTodo bileşeni için prop türünü tanımlıyoruz
interface ChangeTodoProps {
    todo: Todo;
}

// React.FC kullanarak ChangeTodo bileşenini tanımlıyoruz
const ChangeTodo: React.FC<ChangeTodoProps> = ({ todo }) => {

    return (
        <Form action={changeStatus}>
            <Input
                name="inputId"
                value={todo.id}
                type="hidden"
            />
            <Button
                actionButton
                type="submit"
                text={<AiOutlineCheckCircle />}
            />
        </Form>
    );
};

export default ChangeTodo;
