import React from 'react';
import { render, screen, cleanup, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import 'jest-styled-components';
import { OpenMenu } from './open-menu';
import { BrowserRouter } from 'react-router-dom';

afterEach(() => {
  cleanup();
});

jest.mock('../../../constants/linkArray', () => ({
  linkArray: [
    { name: 'Home', params: '/', pageString: 'landing' },
    { name: 'Location', params: '/location', pageString: 'location' },
  ],
}));

describe('Open Menu', () => {
  test('[1] - all links from linkArray and about renders', () => {
    render(
      <BrowserRouter>
        <OpenMenu open={true} setOpen={jest.fn()} setPage={jest.fn()} />
      </BrowserRouter>
    );
    expect(screen.getByText('Home')).toBeInTheDocument();
    expect(screen.getByText('Location')).toBeInTheDocument();
    expect(screen.getByText('About')).toBeInTheDocument();
  });

  test('[2] - menu is visible when open = {true}', () => {
    render(
      <BrowserRouter>
        <OpenMenu open={true} setOpen={jest.fn()} setPage={jest.fn()} />
      </BrowserRouter>
    );
    const nav = screen.getByRole('navigation');
    expect(nav).toHaveStyle('transform: translateX(0)');
  });

  test('[3] - menu is not visible when open = {false}', () => {
    render(
      <BrowserRouter>
        <OpenMenu open={false} setOpen={jest.fn()} setPage={jest.fn()} />
      </BrowserRouter>
    );
    const nav = screen.getByRole('navigation');
    expect(nav).toHaveStyle('transform: translateX(100%)');
  });

  test('[4] - clicking a link calls setOpen and setPage', () => {
    const setOpenMock = jest.fn();
    const setPageMock = jest.fn();

    render(
      <BrowserRouter>
        <OpenMenu open={false} setOpen={setOpenMock} setPage={setPageMock} />
      </BrowserRouter>
    );
    const home = screen.getByText('Home');
    fireEvent.click(home);
    expect(setOpenMock).toHaveBeenCalledWith(true);
    expect(setPageMock).toHaveBeenCalledWith('landing');
  });
});
