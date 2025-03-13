import React from 'react';
import { render, screen, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom';
import GalleryPage from './gallery';

afterEach(() => {
  cleanup();
});

describe('gallery', () => {
  test('[1] - gallery renders as unordered list when width > 1376', () => {
    global.innerWidth = 1380;
    const pageAlbum = [
      {
        0: ['item1'],
      },
    ];
    const page = 0;

    render(<GalleryPage pageAlbum={pageAlbum} page={page} />);
    const gallery = screen.getByTestId('gallery');
    const ul = screen.getByRole('list');

    expect(gallery).toBeInTheDocument();
    expect(ul).toBeInTheDocument();
  });

  test('[2] - gallery renders GallerySmall w/nest <div> elements when width <= 1376', () => {
    global.innerWidth = 1376;
    const pageAlbum = [
      {
        0: ['item1'],
      },
    ];
    const page = 0;

    render(<GalleryPage pageAlbum={pageAlbum} page={page} />);
    const gallery = screen.getByTestId('small-gallery-div');
    expect(gallery).toBeInTheDocument();
  });
});
