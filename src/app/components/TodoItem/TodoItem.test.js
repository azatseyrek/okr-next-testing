import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import TodoItem from './TodoItem';

const mockTodo = {
  userId: 1,
  title: 'Wave Hello!',
  completed: false,
  id: 1,
};

const mockSetTodos = jest.fn();

describe('TodoItem', () => {
  describe('Render', () => {
    it('should render an article', () => {
      render(<TodoItem todo={mockTodo} setTodos={mockSetTodos} />);

      const articleEl = screen.getByRole('article');

      expect(articleEl).toBeInTheDocument();
    });

    it('should render a label', () => {
      render(<TodoItem todo={mockTodo} setTodos={mockSetTodos} />);

      const labelEl = screen.getByTestId('todo-item');

      expect(labelEl).toBeInTheDocument();
    });

    it('should render a checkbox', () => {
      render(<TodoItem todo={mockTodo} setTodos={mockSetTodos} />);

      const checkboxEl = screen.getByRole('checkbox');

      expect(checkboxEl).toBeInTheDocument();
    });

    it('should render a button', () => {
      render(<TodoItem todo={mockTodo} setTodos={mockSetTodos} />);
      const btnEl = screen.getByRole('button');

      expect(btnEl).toBeInTheDocument();
    });
  });

  describe('Behavior', () => {
    it('should call setTodos when checkbox clicked', async () => {
      render(<TodoItem todo={mockTodo} setTodos={mockSetTodos} />);
      const checkbox = screen.getByRole('checkbox');
      await userEvent.click(checkbox);

      expect(mockSetTodos).toHaveBeenCalled();
    });

    it('should call setTodos when button clicked', async () => {
      render(<TodoItem todo={mockTodo} setTodos={mockSetTodos} />);

      const btnEl = screen.getByRole('button');
      await userEvent.click(btnEl);

      expect(mockSetTodos).toHaveBeenCalled();
    });
  });
});
