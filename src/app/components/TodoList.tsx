'use client';

import React from 'react';
import { TodoItem } from './TodoItem';
import { useTodo } from '../context/TodoContext';

export const TodoList: React.FC = () => {
    const { todos, toggleTodo, deleteTodo, updateTodo, filter } = useTodo();

    const filteredTodos = todos.filter((todo) => {
        if (filter === 'active') return !todo.completed;
        if (filter === 'completed') return todo.completed;
        return true;
    });

    return (
        <div className='space-y-2'>
            {filteredTodos.map((todo) => (
                <TodoItem
                    key={todo.id}
                    todo={todo}
                    onToggle={toggleTodo}
                    onDelete={deleteTodo}
                    onUpdate={updateTodo}
                />
            ))}
            {filteredTodos.length === 0 && (
                <p className='text-center text-gray-500 py-4'>
                    할 일이 없습니다.
                </p>
            )}
        </div>
    );
};
