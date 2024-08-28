"use client"
import React from 'react';
interface Props {
    name: string
    type: string
    placeholder?: string
    value?: string
    defaultValue?: string

}

const Input = ({name, type,placeholder,value,defaultValue}:Props) => {
    return (
        <>
            <input
            className={"w-full p-2 border-gray-200"}
            name={name}
            placeholder={placeholder}
            type={type}
            value={value}
            defaultValue={defaultValue}
            />
        </>
    );
};

export default Input;