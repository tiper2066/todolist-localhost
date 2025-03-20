'use client';

import React, { createContext, useContext, useEffect, useState } from 'react';
import { Todo, TodoContextType } from '../types/todo';

const TodoContext = createContext<TodoContextType | undefined>(undefined);

export const TodoProvider = ({ children }: { children: React.ReactNode }) => {
    const [todos, setTodos] = useState<Todo[]>([]);
    const [filter, setFilter] = useState<'all' | 'active' | 'completed'>('all');

    useEffect(() => {
        const storedTodos = localStorage.getItem('todos');
        if (storedTodos) {
            setTodos(JSON.parse(storedTodos));
        }
    }, []);

    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos));
    }, [todos]);

    const addTodo = (text: string) => {
        const newTodo: Todo = {
            id: Date.now().toString(),
            text,
            completed: false,
            createdAt: new Date().toISOString(),
        };
        setTodos([...todos, newTodo]);
    };

    const toggleTodo = (id: string) => {
        setTodos(
            todos.map((todo) =>
                todo.id === id ? { ...todo, completed: !todo.completed } : todo
            )
        );
    };

    const deleteTodo = (id: string) => {
        setTodos(todos.filter((todo) => todo.id !== id));
    };

    const updateTodo = (id: string, text: string) => {
        setTodos(
            todos.map((todo) => (todo.id === id ? { ...todo, text } : todo))
        );
    };

    return (
        <TodoContext.Provider
            value={{
                todos,
                addTodo,
                toggleTodo,
                deleteTodo,
                updateTodo,
                filter,
                setFilter,
            }}
        >
            {children}
        </TodoContext.Provider>
    );
};

export const useTodo = () => {
    const context = useContext(TodoContext);
    if (context === undefined) {
        throw new Error('useTodo must be used within a TodoProvider');
    }
    return context;
};
