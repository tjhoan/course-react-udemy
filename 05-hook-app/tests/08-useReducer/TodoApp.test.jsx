import { render, screen } from '@testing-library/react';
import { TodoApp } from '../../src/08-useReducer/TodoApp';
import { useTodo } from '../../src/hooks';

jest.mock('../../src/hooks/useTodo');

describe('Pruebas en <TodoApp />', () => {
  useTodo.mockReturnValue({
    todos: [
      {
        id: 1,
        desc: 'Todo #1',
        done: false
      },
      {
        id: 2,
        desc: 'Todo #2',
        done: false
      }
    ],
    todosCount: 2,
    pendingTodos: 1,
    handleDeleteTodo: jest.fn(),
    handleToggleTodo: jest.fn(),
    handleNewTodo: jest.fn()
  });

  test('Debe mostrar el componente correctamente', () => {
    render(<TodoApp />);

    // expect(screen.getByText('Todo #1')).toBeTruthy();
    // expect(screen.getByText('Todo #2')).toBeTruthy();
    // expect(screen.getByRole('textbox')).toBeTruthy();
  });
});
