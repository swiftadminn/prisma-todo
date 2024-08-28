"use client";

import React, { useState } from 'react';
import Button from "@/app/components/shared/ui/Button";
import { BiEdit } from "react-icons/bi";
import Form from "@/app/components/shared/ui/Form";
import { edit } from "@/app/actions/todoActions";
import Input from "@/app/components/shared/ui/Input";

// Todo tipini tanımlıyoruz
interface Todo {
    id: string;
    title: string;
    isCompleted: boolean;
}

// Bileşen için prop türünü tanımlıyoruz
interface EditTodoProps {
    todo: Todo;
}

// React.FC kullanarak bileşeni tanımlıyoruz
const EditTodo: React.FC<EditTodoProps> = ({ todo }) => {
    const [editTodo, setEditTodo] = useState(false);

    const handleEdit = () => {
        setEditTodo(!editTodo);
    };

    const handleSubmit = () => {
        setEditTodo(false);
    };

    return (
        <div className="flex gap-5 items-center">
            <Button
                onClick={handleEdit}
                actionButton
                text={<BiEdit />}
                type="button" // Buton tipi "button" olmalı, "submit" yerine
            />

            {editTodo ? (
                <Form
                    action={edit}
                    onSubmit={handleSubmit}
                >
                    <Input
                        name="inputId"
                        type="hidden"
                        value={todo.id}
                    />
                    <div className="flex justify-center">
                        <Input
                            name="newTitle"
                            type="text"
                            defaultValue={todo.title}
                        />
                    </div>
                </Form>
            ) : null}
        </div>
    );
};

export default EditTodo;
