'use client';

import { useEffect, useState } from 'react';

import AddTodo from './components/AddTodo/AddTodo';
import TodoList from './components/TodoList/TodoList';

import fetchTodos from '@/lib/fetchTodos/fetchTodos';
import type { Todo } from '@/types/Todo';

export default function Home() {
  const [todos, setTodos] = useState<Todo[]>([
    {
      userId: 1,
      title: 'Wave hello! 👋',
      completed: false,
      id: 1,
    },
    {
      userId: 1,
      title: 'Get Coffee ☕☕☕',
      completed: false,
      id: 2,
    },
    {
      userId: 1,
      title: 'Go to Work ⚒',
      completed: false,
      id: 3,
    },
    {
      userId: 1,
      title: 'Write Code 💻',
      completed: false,
      id: 4,
    },
  ]);

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
