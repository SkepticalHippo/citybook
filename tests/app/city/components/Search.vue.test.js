import { describe, it } from 'vitest';
import { fireEvent, render } from '@testing-library/vue';
import Search from '../../../../src/app/city/components/Search.vue';

describe('city', () => {
  describe('Search', () => {
    it('should render results', async () => {
      const { getByPlaceholderText, getByText } = render(Search);

      const cityInput = getByPlaceholderText('Your favourite city...');

      await fireEvent.update(cityInput, 'sant');

      getByText('santiago');
    });
  });
});
