import React from 'react';
import { Typography } from '@material-ui/core';
import BookList from './BookList/BookList';

const App = () => {
  const books = [{ name: 'Refactoring' }, { name: 'Domain-driven design' }];
  return (
    <div>
      <Typography variant="h2" component="h2" data-test="heading">
        Bookish
      </Typography>
      <BookList books={books} />
    </div>
  );
};

export default App;
