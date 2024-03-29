import { describe, expect, it } from 'vitest';
import ProductCard from '../elements/ProductCard';
import { render, screen } from '@testing-library/react';

const dummyData = {
  id: 1,
  title: 'Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops',
  price: 109.95,
  description:
    'Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday',
  category: "men's clothing",
  image: 'https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg',
  rating: { rate: 3.9, count: 120 },
};

describe('Product Card', () => {
  it('renders an image', () => {
    render(<ProductCard image={dummyData.image} />);
    expect(screen.queryByRole('image')).toBeInTheDocument;
  });
  it('renders product name', () => {
    render(<ProductCard title={dummyData.title} />);
    const paragraph = screen.getByText(dummyData.title);
    expect(paragraph).toBeInTheDocument;
  });
  it('renders product price', () => {
    render(<ProductCard price={dummyData.price}/>);
    const price = screen.getByText(dummyData.price);
    expect(price).toBeInTheDocument;
  })
});
