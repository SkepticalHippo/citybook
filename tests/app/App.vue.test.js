import { describe, expect, it } from 'vitest';
import { fireEvent, render } from '@testing-library/vue';
import App from '../../src/app/App.vue';

describe('App', () => {
  it('should display search boxes', () => {
    const { getByPlaceholderText } = render(App);

    getByPlaceholderText('Your favourite city...');
    getByPlaceholderText('Your favourite book...');
  });

  it('should display selected city', async () => {
    const { getByPlaceholderText, getByText } = render(App);

    const cityInput = getByPlaceholderText('Your favourite city...');

    await fireEvent.update(cityInput, 'sant');

    const result = getByText('santiago');

    await fireEvent.click(result);

    const selectedCity = getByText('Selected:');

    expect(selectedCity.textContent.trim()).toEqual('Selected: santiago');
  });

  it('should display selected book', async () => {
    const { getByPlaceholderText, getByText } = render(App);

    const bookInput = getByPlaceholderText('Your favourite book...');

    await fireEvent.update(bookInput, 'don');

    const result = getByText('Don Quixote');

    await fireEvent.click(result);

    const selectedBook = getByText('Selected:');

    expect(selectedBook.textContent.trim()).toEqual('Selected: Don Quixote by Miguel De Cervantes');
  });
});
