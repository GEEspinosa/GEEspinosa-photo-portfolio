import React from 'react';
import { render, screen, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom';
import Header from './header';
import { BrowserRouter} from 'react-router-dom';

afterEach(() => {
    cleanup();
});

describe ('Header Links', () => {
    test ('[1] - Render About Home Correctly', () => {

        render (
            <BrowserRouter>
                <Header />
            </BrowserRouter>
        )

        const aboutLink = screen.getAllByRole('link', {name: /home/i})
        expect(aboutLink).toHaveLength(1)
        expect(aboutLink[0]).toBeInTheDocument();
        expect(aboutLink[0]).toHaveAttribute('href', '/')
    }) 

    test ('[2] - Render Location Link Correctly', () => {

        render (
            <BrowserRouter>
                <Header />
            </BrowserRouter>
        )

        const aboutLink = screen.getAllByRole('link', {name: /location/i})
        expect(aboutLink).toHaveLength(1)
        expect(aboutLink[0]).toBeInTheDocument();
        expect(aboutLink[0]).toHaveAttribute('href', '/location')
    }) 

    test ('[3] - Render Location People Correctly', () => {

        render (
            <BrowserRouter>
                <Header />
            </BrowserRouter>
        )

        const aboutLink = screen.getAllByRole('link', {name: /people/i})
        expect(aboutLink).toHaveLength(1)
        expect(aboutLink[0]).toBeInTheDocument();
        expect(aboutLink[0]).toHaveAttribute('href', '/people')
    }) 

    test ('[4] - Render Location Performance Correctly', () => {

        render (
            <BrowserRouter>
                <Header />
            </BrowserRouter>
        )

        const aboutLink = screen.getAllByRole('link', {name: /performance/i})
        expect(aboutLink).toHaveLength(1)
        expect(aboutLink[0]).toBeInTheDocument();
        expect(aboutLink[0]).toHaveAttribute('href', '/performance')
    }) 


    test ('[5] - Render Location About Correctly', () => {

        render (
            <BrowserRouter>
                <Header />
            </BrowserRouter>
        )

        const aboutLink = screen.getAllByRole('link', {name: /about/i})
        expect(aboutLink).toHaveLength(1)
        expect(aboutLink[0]).toBeInTheDocument();
        expect(aboutLink[0]).toHaveAttribute('href', '/about')
    }) 


})
