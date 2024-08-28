import React from 'react';
import ChangeTodo from "@/app/components/shared/ChangeTodo";
import {todoType} from "@/types/todoTypes";
import EditTodo from "@/app/components/shared/EditTodo";

// Define the type for the todo prop
interface TodoProps {
    todo: {
        id: string;
        title: string;
        isCompleted: boolean;
    };
}

const Todo: React.FC<TodoProps> = ({ todo }) => {
    const todoStyle = {
        textDecoration: todo.isCompleted === true ? "line-through" : "none",
    }
    return (
        <div style={todoStyle} className="w-full flex items-center justify-between bg-white py-3 px-20 rounded-2xl">
            <ChangeTodo todo={todo} />
            <span className="text-center font-bold uppercase">
        {todo.title}
      </span>
            <div className={"flex items-center gap-5"}>
             <EditTodo todo={todo} />
            </div>
        </div>
    );
};

export default Todo;
