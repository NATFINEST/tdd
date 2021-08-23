import React from 'react';
import { Typography } from '@material-ui/core';

const App = () => {
  return (
    <div>
      <Typography variant="h2" component="h2" data-test="heading">
        Bookish
      </Typography>
      <span className="material-icons">home</span>
    </div>
  );
};

export default App;
