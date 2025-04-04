import React from 'react';
import { render, screen, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom';
import Header from './header';
import { BrowserRouter} from 'react-router-dom';

afterEach(() => {
    cleanup();
});
  

describe ('header', () => {
    console.log('Header Rendered')
    test ('[1] - ?', () => {
     
        // const {container} = render (
        //     <BrowserRouter>
        //         <Header/>
        //     </BrowserRouter>
        // )

        render (
            <BrowserRouter>
                <Header />
            </BrowserRouter>
        )


        //console.log(container.innerHTML)
        const aboutLink = screen.getAllByRole('link', {name: /about/i})
        expect(aboutLink).toHaveLength(1)
        expect(aboutLink[0]).toBeInTheDocument();
        expect(aboutLink[0]).toHaveAttribute('href', '/about')
    }) 

})
