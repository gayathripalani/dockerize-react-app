// import test from 'jest'

import App from '../App';
import { expect, test } from '@jest/globals';
import { render } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect';
import '@testing-library/jest-dom';


it("jest is working", () => {
  expect(true).toBe(true);  
})

test('Renders main page correctly', () => {
    render(<App />);
    expect(true).toBeTruthy();
});
