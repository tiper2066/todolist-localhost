'use client';

import { TodoProvider } from './context/TodoContext';
import { TodoInput } from './components/TodoInput';
import { TodoList } from './components/TodoList';
import { TodoFilter } from './components/TodoFilter';

export default function Home() {
    return (
        <TodoProvider>
            <main className='min-h-screen bg-gradient-to-br from-blue-50 to-purple-50 py-8'>
                <div className='max-w-2xl mx-auto px-4'>
                    <h1 className='text-3xl font-bold text-center mb-8 text-gray-800'>
                        Todo List
                    </h1>
                    <div className='bg-white rounded-xl shadow-lg p-6'>
                        <TodoInput />
                        <TodoList />
                        <TodoFilter />
                    </div>
                </div>
            </main>
        </TodoProvider>
    );
}
