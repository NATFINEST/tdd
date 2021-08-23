import React from 'react';

interface IBooks {
  books: { name: string }[];
}

const BookList = ({ books }: IBooks) => {
  return (
    <div data-test="book-list">
      {books.map((book, idx) => (
        <div key={idx} className="book-item">
          <h2 className="title">{book.name}</h2>
        </div>
      ))}
    </div>
  );
};

export default BookList;
