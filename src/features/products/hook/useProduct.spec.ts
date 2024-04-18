import { renderHook, act } from '@testing-library/react';
import { useProduct } from './useProduct';
import { ProductUseCaseManager } from 'src/features/products/usecases/ProductUseCasesManager';

describe('useProduct', () => {
  it('should return get products', () => {
    const getProductsUseCaseMock = vi.fn();
    vi.spyOn(ProductUseCaseManager, 'getProducts').mockImplementation(getProductsUseCaseMock);
    const { result } = renderHook(() => useProduct());
    act(() => {
      result.current.handleLoadProducts();
    });
    expect(getProductsUseCaseMock).toHaveBeenCalled();
  });

  it('should change name of product', () => {
    const { result } = renderHook(() => useProduct());
    act(() => {
      result.current.handleChange('name', { target: { value: 'Product 1' } });
    });
    expect(result.current.product).toEqual({ name: 'Product 1', price: 0 });
  });

  it('should change price of product', () => {
    const { result } = renderHook(() => useProduct());
    act(() => {
      result.current.handleChange('price', { target: { value: 10000 } });
    });
    expect(result.current.product).toEqual({ name: '', price: 10000 });
  });

  it('should add a product', () => {
    const product = { name: 'Product 1', price: 10000 };
    const createProductUseCaseMock = vi.fn();
    vi.spyOn(ProductUseCaseManager, 'saveProduct').mockImplementation(createProductUseCaseMock);
    vi.spyOn(ProductUseCaseManager, 'getProducts').mockReturnValue([product]);
    const { result } = renderHook(() => useProduct());
    act(() => {
      result.current.handleAddProduct({ preventDefault: vi.fn() });
    });
    expect(createProductUseCaseMock).toHaveBeenCalled();
    expect(result.current.products).toEqual([product]);
  });
});
