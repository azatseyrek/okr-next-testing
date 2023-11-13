import Home from '@/app/page';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';

describe('Home', () => {
  it('Should have Docs text', () => {
    render(<Home />); //arrange

    const myElem = screen.getByText(/Docs/i); //act

    expect(myElem).toBeInTheDocument(); //assert
  });
  it('Should contain the text information', () => {
    render(<Home />); //arrange
  
    const myElem = screen.getByText(/information/i); //act

    expect(myElem).toBeInTheDocument(); //assert
  });
});
