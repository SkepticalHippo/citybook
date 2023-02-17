import { describe, it, expect } from 'vitest';
import { findByTitle } from '../../../src/app/book/books';

describe('book', () => {
  describe('books', () => {
    describe('findByTitle()', () => {
      it('should find book', () => {
        const books = findByTitle('Don');

        expect(books).toEqual([{
          author: 'Miguel De Cervantes',
          title: 'Don Quixote',
        }]);
      });

      it('should find book case insensitive', () => {
        const books = findByTitle('don');

        expect(books).toEqual([{
          author: 'Miguel De Cervantes',
          title: 'Don Quixote',
        }]);
      });

      it('should return no results for empty query', () => {
        const books = findByTitle('');

        expect(books).toEqual([]);
      });

      it('should not find book', () => {
        const books = findByTitle('harry potter');

        expect(books).toEqual([]);
      });
    });
  });
});
