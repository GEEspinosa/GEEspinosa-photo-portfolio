import React from "react";
import { render, screen, cleanup } from "@testing-library/react";
import '@testing-library/jest-dom';
import ScrollToTopButton from "./scroll-to-top-button"

afterEach(() => {
    cleanup()
})

describe("Scroll to top button component", () => {

    render(<ScrollToTopButton />)
    const button = screen.getByTestId("scroll-to-top-testID")

   test("[1] - ScrollToTopButton Rendering", () => {
        expect(button).toBeInTheDocument()
   })
    

})