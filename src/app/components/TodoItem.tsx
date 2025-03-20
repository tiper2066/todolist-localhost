'use client';

import React, { useState, useRef, useEffect } from 'react';
import { Todo } from '../types/todo';

interface TodoItemProps {
    todo: Todo;
    onToggle: (id: string) => void;
    onDelete: (id: string) => void;
    onUpdate: (id: string, text: string) => void;
}

export const TodoItem: React.FC<TodoItemProps> = ({
    todo,
    onToggle,
    onDelete,
    onUpdate,
}) => {
    const [isEditing, setIsEditing] = useState(false);
    const [editText, setEditText] = useState(todo.text);
    const inputRef = useRef<HTMLInputElement>(null);

    useEffect(() => {
        if (isEditing) {
            inputRef.current?.focus();
        }
    }, [isEditing]);

    const handleSubmit = () => {
        if (editText.trim()) {
            onUpdate(todo.id, editText.trim());
            setIsEditing(false);
        }
    };

    const handleKeyDown = (e: React.KeyboardEvent) => {
        if (e.key === 'Enter') {
            handleSubmit();
        } else if (e.key === 'Escape') {
            setEditText(todo.text);
            setIsEditing(false);
        }
    };

    return (
        <div className='flex items-center gap-2 p-2 hover:bg-gray-50 group rounded-lg'>
            <input
                type='checkbox'
                checked={todo.completed}
                onChange={() => onToggle(todo.id)}
                className='w-5 h-5 rounded border-gray-300 text-blue-600 focus:ring-blue-500'
            />
            {isEditing ? (
                <input
                    ref={inputRef}
                    type='text'
                    value={editText}
                    onChange={(e) => setEditText(e.target.value)}
                    onBlur={handleSubmit}
                    onKeyDown={handleKeyDown}
                    className='flex-1 p-1 border rounded focus:outline-none focus:border-blue-500'
                />
            ) : (
                <span
                    onDoubleClick={() => setIsEditing(true)}
                    className={`flex-1 cursor-pointer ${
                        todo.completed ? 'line-through text-gray-400' : ''
                    }`}
                >
                    {todo.text}
                </span>
            )}
            <button
                onClick={() => onDelete(todo.id)}
                className='opacity-0 group-hover:opacity-100 text-red-500 hover:text-red-700 transition-opacity'
            >
                삭제
            </button>
        </div>
    );
};
