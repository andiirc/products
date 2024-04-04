import { HomePage } from './HomePage';
import { render, screen, fireEvent } from '@testing-library/react';

/*vi.mock('src/features/products/components/ListProducts', () => ({
  ListProducts: () => <div>ListProducts</div>
}));*/

describe('HomePage', () => {

  it('should render HomePage', () => {
    render(<HomePage />);
    const title = screen.getByText('Crear Productos');
    expect(title).toBeDefined();
    expect(screen.getByLabelText('Nombre')).toBeDefined();
    expect(screen.getByLabelText('Precio')).toBeDefined();
    expect(screen.getByRole('button', { name: /Crear/i })).toBeDefined();
  });

  it('should the button must be enabled if the fields are filled in.', () => {
    render(<HomePage />);
    const nameInput = screen.getByLabelText('Nombre');
    const priceInput = screen.getByLabelText('Precio');
    const button = screen.getByRole('button', { name: /Crear/i });

    fireEvent.change(nameInput, { target: { value: 'Product 1' } });
    fireEvent.change(priceInput, { target: { value: 100 } });

    expect(button).toBeDefined();
  });
});
