import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';
import data from './data.json';

describe("Rick and Morty App", () => {

  beforeAll(() => jest.spyOn(window, "fetch"));

  it("Shows a list of characters retrieved from an API",  async () => {
    window.fetch.mockResolvedValueOnce({
      ok: true,
      json: async () => data,
    });

    render(<App />);

    expect(window.fetch).toHaveBeenCalledWith("https://rickandmortyapi.com/api/character/");
    expect(window.fetch).toHaveBeenCalledTimes(1);

    for (let character of data.results) {
      expect(await screen.findByText(new RegExp(`${character.name}\\b`, "i"))).toBeInTheDocument();
    }
  });
})
