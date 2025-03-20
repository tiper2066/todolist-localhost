export interface Todo {
    id: string;
    text: string;
    completed: boolean;
    createdAt: string;
}

export type TodoContextType = {
    todos: Todo[];
    addTodo: (text: string) => void;
    toggleTodo: (id: string) => void;
    deleteTodo: (id: string) => void;
    updateTodo: (id: string, text: string) => void;
    filter: 'all' | 'active' | 'completed';
    setFilter: (filter: 'all' | 'active' | 'completed') => void;
};
