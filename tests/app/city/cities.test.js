import { describe, it, expect } from 'vitest';
import { findByName } from '../../../src/app/city/cities';

describe('city', () => {
  describe('cities', () => {
    describe('findByName()', () => {
      it('should find cities', () => {
        const cities = findByName('sant');

        expect(cities).toEqual(['santiago', 'santa rosa']);
      });

      it('should find cities case insensitive', () => {
        const cities = findByName('SaNt');

        expect(cities).toEqual(['santiago', 'santa rosa']);
      });

      it('should not find city', () => {
        const cities = findByName('Manchester');

        expect(cities).toEqual([]);
      });

      it('should return no results for empty query', () => {
        const cities = findByName('');

        expect(cities).toEqual([]);
      });
    });
  });
});
