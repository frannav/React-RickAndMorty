import React from 'react';
import { render } from '@testing-library/react';
import App from './App';
import data from './data.json';

describe("Rick and Morty App", () => {
  it("Has a list of characters", () => {
    const { getByText } = render(<App />);
    for (let character of data.results) {
      expect(getByText(character.name)).toBeInTheDocument();
    }
  });
})
