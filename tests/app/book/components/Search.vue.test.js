import { describe, it } from 'vitest';
import { fireEvent, render } from '@testing-library/vue';
import Search from '../../../../src/app/book/components/Search.vue';

describe('book', () => {
  describe('Search', () => {
    it('should render results', async () => {
      const { getByPlaceholderText, getByText } = render(Search);

      const bookInput = getByPlaceholderText('Your favourite book...');

      await fireEvent.update(bookInput, 'don');

      getByText('Don Quixote');
    });
  });
});
