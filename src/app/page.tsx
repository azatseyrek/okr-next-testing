'use client';

import { useEffect, useState } from 'react';

import AddTodo from './components/AddTodo/AddTodo';
import TodoList from './components/TodoList/TodoList';

import fetchTodos from '@/lib/fetchTodos/fetchTodos';
import type { Todo } from '@/types/Todo';

export default function Home() {
  const [todos, setTodos] = useState<Todo[]>([]);

  useEffect(() => {
    async function getTodos() {
      const todosArray = await fetchTodos();
      if (todosArray?.length) setTodos(todosArray);
    }

    getTodos();
  }, []);

  useEffect(() => {
    async function getTodos() {
      const todosArray = await fetchTodos();
      if (todosArray?.length) setTodos(todosArray);
    }
    getTodos();
  }, []);

  return (
    <>
      <AddTodo setTodos={setTodos} />
      <TodoList todos={todos} setTodos={setTodos} />
    </>
  );
}
