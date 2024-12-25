import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import { MultipleCustomHooks } from '../../../src/03-examples/MultipleCustomHooks';
import { useCounter, useFetch } from '../../../src/hooks';

// Mockear los hooks personalizados
jest.mock('../../../src/hooks/useCounter', () => ({
  useCounter: jest.fn()
}));

jest.mock('../../../src/hooks/useFetch', () => ({
  useFetch: jest.fn()
}));

describe('<MultipleCustomHooks />', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  test('Debe de mostrar el componente por defecto', () => {
    useCounter.mockReturnValue({ counter: 1, increment: jest.fn(), decrement: jest.fn() });
    useFetch.mockReturnValue({ data: null, isLoading: true });

    render(<MultipleCustomHooks />);

    expect(screen.getByText('Información del Pokémon')).toBeInTheDocument();
    
    const nextButton = screen.getByRole('button', { name: 'Anterior' });
    expect(nextButton).toBeInTheDocument();
  });

  test('debe mostrar el mensaje de carga cuando isLoading es true', () => {
    useCounter.mockReturnValue({ counter: 1, increment: jest.fn(), decrement: jest.fn() });
    useFetch.mockReturnValue({ data: null, isLoading: true });

    render(<MultipleCustomHooks />);

    expect(screen.getByText('Información del Pokémon')).toBeInTheDocument();
  });

  test('debe mostrar el componente <PokemonCard /> cuando se carga la data', () => {
    const mockData = {
      id: 1,
      name: 'bulbasaur',
      sprites: {
        front_default: 'front_default_url',
        front_shiny: 'front_shiny_url',
        back_default: 'back_default_url',
        back_shiny: 'back_shiny_url'
      }
    };

    useCounter.mockReturnValue({ counter: 1, increment: jest.fn(), decrement: jest.fn() });
    useFetch.mockReturnValue({ data: mockData, isLoading: false });

    render(<MultipleCustomHooks />);

    expect(screen.getByText('bulbasaur')).toBeInTheDocument();
    expect(screen.getByText('ID: 1')).toBeInTheDocument();
    const images = screen.getAllByRole('img');
    expect(images).toHaveLength(4);
  });

  test("debe llamar a increment cuando se hace clic en el botón 'Siguiente'", () => {
    const mockIncrement = jest.fn();
    useCounter.mockReturnValue({ counter: 1, increment: mockIncrement, decrement: jest.fn() });
    useFetch.mockReturnValue({ data: null, isLoading: true });

    render(<MultipleCustomHooks />);

    const nextButton = screen.getByText('Siguiente');
    fireEvent.click(nextButton);

    expect(mockIncrement).toHaveBeenCalled();
  });

  test("debe llamar a decrement cuando se hace clic en el botón 'Anterior' y counter > 1", () => {
    const mockDecrement = jest.fn();
    useCounter.mockReturnValue({ counter: 2, increment: jest.fn(), decrement: mockDecrement });
    useFetch.mockReturnValue({ data: null, isLoading: true });

    render(<MultipleCustomHooks />);

    const prevButton = screen.getByText('Anterior');
    fireEvent.click(prevButton);

    expect(mockDecrement).toHaveBeenCalled();
  });

  test("no debe llamar a decrement cuando se hace clic en 'Anterior' y counter === 1", () => {
    const mockDecrement = jest.fn();
    useCounter.mockReturnValue({ counter: 1, increment: jest.fn(), decrement: mockDecrement });
    useFetch.mockReturnValue({ data: null, isLoading: true });

    render(<MultipleCustomHooks />);

    const prevButton = screen.getByText('Anterior');
    fireEvent.click(prevButton);

    expect(mockDecrement).not.toHaveBeenCalled();
  });
});
