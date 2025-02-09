import { PrismaClient } from "@prisma/client";
import AddTodo from "@/app/components/shared/AddTodo";
import Todo from "@/app/components/shared/Todo";
import React from 'react';

// PrismaClient örneği
const prisma = new PrismaClient();

// Veri getirme fonksiyonu
async function getData() {
    const data = await prisma.todo.findMany({
        select: {
            title: true,
            id: true,
            isCompleted: true,
        },
        orderBy: {
            createdAt: "desc",
        },
    });

    return data;
}

// Todo tipi tanımlaması
interface TodoType {
    id: string;
    title: string;
    isCompleted: boolean;
}

// `getServerSideProps` fonksiyonunu kullanarak veriyi alıyoruz
export async function getServerSideProps() {
    const data: TodoType[] = await getData();

    return {
        props: {
            data,
        },
    };
}

// Home bileşeni
const Home: React.FC<{ data: TodoType[] }> = ({ data }) => {
    return (
        <div className="w-screen py-20 flex justify-center flex-col items-center">
            <span className="text-3xl font-extrabold uppercase">To-do-app</span>
            <h1 className="text-3xl font-extrabold uppercase mb-5">
                Next.js 14
                <span className="text-orange-700 ml-2">Server Actions</span>
            </h1>

            <div className="flex justify-center flex-col items-center w-[1000px]">
                <AddTodo />
                <div className="flex flex-col gap-5 items-center justify-center mt-10 w-full">
                    {data.map((todo) => (
                        <div className="w-full" key={todo.id}>
                            <Todo todo={todo} />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Home;
