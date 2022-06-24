import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import React from 'react';
import Bar from './index';

describe('<Bar />', () => {
  it('render Bar with dumi', () => {
    const msg = 'dumi';

    render(<Bar title={msg} />);
    expect(screen.queryByText(msg)).toBeInTheDocument();
  });
});
