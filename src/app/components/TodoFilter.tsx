'use client';

import React from 'react';
import { useTodo } from '../context/TodoContext';

export const TodoFilter: React.FC = () => {
    const { todos, filter, setFilter } = useTodo();
    const activeTodos = todos.filter((todo) => !todo.completed).length;

    return (
        <div className='flex justify-between items-center mt-4 text-sm text-gray-600'>
            <span>{activeTodos}개의 할 일 남음</span>
            <div className='space-x-2'>
                {(['all', 'active', 'completed'] as const).map((value) => (
                    <button
                        key={value}
                        onClick={() => setFilter(value)}
                        className={`px-3 py-1 rounded-lg ${
                            filter === value
                                ? 'bg-blue-500 text-white'
                                : 'text-gray-600 hover:bg-gray-100'
                        }`}
                    >
                        {value === 'all'
                            ? '전체'
                            : value === 'active'
                            ? '진행중'
                            : '완료'}
                    </button>
                ))}
            </div>
        </div>
    );
};
