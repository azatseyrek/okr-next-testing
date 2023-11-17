import { render, screen } from '@testing-library/react';

import Header from './Header';

describe('Header', () => {
  it("should render the 'OKR Todos' heading", () => {
    render(<Header title="OKR Todos" />);

    const header = screen.getByRole('heading', {
      name: /okr todos/i,
    });

    expect(header).toBeInTheDocument();
  });
});
