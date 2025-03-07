import React from 'react';
import { render, screen, cleanup, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import ScrollToTopButton from './scroll-to-top-button';

afterEach(() => {
  cleanup();
});

describe('ScrollToTopButton', () => {
  test('[1] - Button renders', () => {
    render(<ScrollToTopButton />);
    const button = screen.getByTestId('scroll-to-top-testID');
    expect(button).toBeInTheDocument();
  });

  test('[2] - Button triggers scrollToTop function with smooth scrolling', () => {


    //dev note: this mocks window.scrollBy to avoid the actual scroll action, jest cannot do this!

    const scrollByMock = jest.spyOn(window, 'scrollBy').mockImplementation(()=> {});

    //dev note: this mocks setInterval and clearInterval, called by ScrollToTop function

    jest.useFakeTimers(); // fake timers controlling intervals
    const clearIntervalMock = jest.spyOn(global, 'clearInterval');


    //dev note: set initial scroll position away from top of window

    window.scrollY = 1000;

    //dev note: render the component and assign the value to button variable

    render(<ScrollToTopButton />)
    const button = screen.getByTestId('scroll-to-top-testID');

    //dev note: simulated the click event

    fireEvent.click(button);

    //dev note: this runs all the timers to simulate intervals, like a fast forward button
    jest.runOnlyPendingTimers();


    //dev note: these are the checks testing whether scrollBy is called with expected arguments

    expect(scrollByMock).toHaveBeenCalled();
    expect(scrollByMock).toHaveBeenCalledWith(0, -50);

    //dev note: checks that clearInterval is called when reaching top.
    window.scrollY = 0; //simulates the scroll reaching the top
    jest.runOnlyPendingTimers(); //run the timer again

    //dev note: checking clearInterval is called to stop the scrolling
    expect(clearIntervalMock).toHaveBeenCalledTimes(1);

   //dev note: restore the mocks
    scrollByMock.mockRestore();
    clearIntervalMock.mockRestore();

  });
});
