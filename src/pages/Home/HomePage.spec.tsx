import { HomePage } from './HomePage';
import { render, screen, fireEvent } from '@testing-library/react';

describe('HomePage', () => {

  beforeEach(() => {
    render(<HomePage />);
  })

  it('should render HomePage', () => {
    const title = screen.getByText('Crear Productos');
    expect(title).toBeDefined();
    expect(screen.getByLabelText('Nombre')).toBeDefined();
    expect(screen.getByLabelText('Precio')).toBeDefined();
    expect(screen.getByRole('button', { name: /Crear/i })).toBeDefined();
  });

  it('should the button must be disabled if the name and price fields are empty.', () => {
    const nameInput = screen.getByLabelText('Nombre');
    const priceInput = screen.getByLabelText('Precio');

    const button = screen.getByText('Crear');
    expect(button.getAttribute('disabled')).toBe('');

    fireEvent.change(nameInput, { target: { value: 'Product 5' } });
    fireEvent.change(priceInput, { target: { value: 20000 } });

    expect(button.getAttribute('disabled')).toBeNull();
  });

  /*it('should call handleAddProduct method when form is submitted', () => {
    const nameInput = screen.getByLabelText('Nombre');
    const priceInput = screen.getByLabelText('Precio');
    const button =  screen.getByText('Crear');

    fireEvent.change(nameInput, { target: { value: 'Product 5' } });
    fireEvent.change(priceInput, { target: { value: 20000 } });

    fireEvent.click(button);
    expect(screen.getByText('Product 5')).toBeDefined();
  })*/
});
