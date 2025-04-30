import React from 'react';
import { render, screen, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Header from './header';

jest.mock('react-router-dom', () => ({
  Link: ({ to, children }) => <a href={to}>{children}</a>, // Simply mock it as an <a> tag
  
}));


// Helper function to render Header with required props
const renderHeader = (props = {}) => {
  render(
    <Header
      open={false}
      setOpen={() => {}}
      showModal={false}
      setPage={() => {}}
      navClickHander={() => {}}
      {...props}
    />
  );
};

afterEach(cleanup);

describe('Header Links', () => {
  test('[1] - Render Home Link Correctly', () => {
    renderHeader()
    const homeLink = screen.getByRole('link', { name: /home/i });
    expect(homeLink).toBeInTheDocument();
    expect(homeLink).toHaveAttribute('href', '/');
  });

  test('[2] - Render Location Link Correctly', () => {
    renderHeader()
    const locationLink = screen.getByRole('link', { name: /location/i });
    expect(locationLink).toBeInTheDocument();
    expect(locationLink).toHaveAttribute('href', '/location');
  });

  test('[3] - Render People Link Correctly', () => {
    renderHeader()
    const peopleLink = screen.getByRole('link', { name: /people/i });
    expect(peopleLink).toBeInTheDocument();
    expect(peopleLink).toHaveAttribute('href', '/people');
  });

  test('[4] - Render Performance Link Correctly', () => {
    renderHeader()
    const perfLink = screen.getByRole('link', { name: /performance/i });
    expect(perfLink).toBeInTheDocument();
    expect(perfLink).toHaveAttribute('href', '/performance');
  });

  test('[5] - Render About Link Correctly', () => {
    renderHeader()
    const aboutLink = screen.getByRole('link', { name: /about/i });
    expect(aboutLink).toBeInTheDocument();
    expect(aboutLink).toHaveAttribute('href', '/about');
  });
});
