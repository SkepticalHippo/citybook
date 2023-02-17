import { describe, it, expect } from 'vitest';
import { fireEvent, render } from '@testing-library/vue';
import Search from '../../../../src/app/shared/components/Search.vue';

describe('shared', () => {
  describe('Search', () => {
    it('should render results', async () => {
      const { getByPlaceholderText, getAllByRole } = render(Search, {
        props: {
          name: 'test',
          results: [
            'test 1',
            'test 2',
            'test 3',
          ],
          placeholder: 'Test input',
        },
      });

      const input = getByPlaceholderText('Test input');

      await fireEvent.update(input, 'test');

      const results = getAllByRole('option');

      expect(results.length).toEqual(3);
    });

    it('should render no results', async () => {
      const { getByPlaceholderText, getByText } = render(Search, {
        props: {
          name: 'test',
          results: [],
          placeholder: 'Test input',
        },
      });

      const input = getByPlaceholderText('Test input');

      await fireEvent.update(input, 'test');

      getByText('No results');
    });

    it('should render 3 character warning', async () => {
      const { getByPlaceholderText, getByText } = render(Search, {
        props: {
          name: 'test',
          results: [],
          placeholder: 'Test input',
        },
      });

      const input = getByPlaceholderText('Test input');

      await fireEvent.update(input, 'te');

      getByText('You need at least 3 characters to search!');
    });

    it('should focus on load', async () => {
      const { getByPlaceholderText } = render(Search, {
        props: {
          name: 'test',
          results: [],
          placeholder: 'Test input',
          focusOnLoad: true,
        },
      });

      const input = getByPlaceholderText('Test input');

      expect(document.activeElement).toBe(input);
    });
  });
});
