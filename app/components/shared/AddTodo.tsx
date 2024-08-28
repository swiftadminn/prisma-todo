import React from 'react';
import Form from "@/app/components/shared/ui/Form";
import Button from "@/app/components/shared/ui/Button";
import Input from "@/app/components/shared/ui/Input";
import {create} from "@/app/actions/todoActions";

const AddTodo = () => {
    return (
        <Form action={create} className={"w1/2 m-auto"}>
            <div className={"flex"}>
                <Input
                name={"input"}
                type={"text"}
                placeholder={"Add Todo..."}/>
                <Button
                type={"submit"}
                text={"Add Todo"}
                />

            </div>
        </Form>
    );
};

export default AddTodo;