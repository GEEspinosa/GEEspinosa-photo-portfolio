import React from 'react';
import { render, screen, cleanup, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import 'jest-styled-components';
import { MenuIcon } from './menu-icon';

afterEach(() => {
    cleanup();
});

function MenuIconTestWrapper() {
    const [open, setOpen] = React.useState(false);
    return <MenuIcon open = {open} setOpen={setOpen} />
}

describe ('menu-icon', () => {
    test('[1] - Renders 3 divs with test id', () => {
        const setOpenMock = jest.fn()
        render(<MenuIcon open={false} setOpen={setOpenMock}/>)
        const divs = screen.getAllByTestId('menu-icon-test')
        expect(divs).toHaveLength(3)
    })

    test('[2] - Toggles open state when clicked method using Test Wrapper w/real state', () => {
        render(<MenuIconTestWrapper />)
        const buttonMock = screen.getByRole('button');

        expect(buttonMock).not.toHaveClass('open') 
        fireEvent.click(buttonMock)
        expect(buttonMock).toHaveClass('open')
        fireEvent.click(buttonMock)
        expect(buttonMock).not.toHaveClass('open')     
    })

    test('[3] - Toggles open state when clicked with jest mock', () => {
        const setOpenMock = jest.fn();
        render(<MenuIcon open={false} setOpen={setOpenMock}/>)
        const buttonMock = screen.getByRole('button');

        fireEvent.click(buttonMock)
        expect(setOpenMock).toHaveBeenCalledWith(true)    
    })

    test ('[4] - Hamburger Menu styling changes to X, test top div rotation', () => {
        // const setOpenMock = jest.fn();
        // render(<MenuIcon open={false} setOpen={setOpenMock}/>)
        render(<MenuIconTestWrapper/>)
        const divs = screen.getAllByTestId('menu-icon-test')
        const topDiv= divs[0]
        expect(topDiv).toHaveStyle('transform: rotate(0deg)')
        fireEvent.click(screen.getByRole('button'))
        expect(topDiv).toHaveStyle('transform: rotate(45deg)')
        fireEvent.click(screen.getByRole('button'))
        expect(topDiv).toHaveStyle('transform: rotate(0deg)')
    })
})