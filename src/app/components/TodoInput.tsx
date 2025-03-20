'use client';

import React, { useState } from 'react';
import { useTodo } from '../context/TodoContext';

export const TodoInput: React.FC = () => {
    const [text, setText] = useState('');
    const { addTodo } = useTodo();

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (text.trim()) {
            addTodo(text.trim());
            setText('');
        }
    };

    return (
        <form onSubmit={handleSubmit} className='flex gap-2 mb-4'>
            <input
                type='text'
                value={text}
                onChange={(e) => setText(e.target.value)}
                placeholder='새로운 할 일을 입력하세요'
                className='flex-1 p-2 border rounded-lg focus:outline-none focus:border-blue-500'
            />
            <button
                type='submit'
                className='bg-blue-500 text-white rounded-lg px-4 py-2 hover:bg-blue-600 transition-colors'
            >
                추가
            </button>
        </form>
    );
};
