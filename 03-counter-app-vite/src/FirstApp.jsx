import React from 'react';
import PropTypes from 'prop-types';

const FirstApp = ({ title, subTitle = 123, arrayNumbers = [1, 2, 3] }) => {
  return (
    <>
      <h1 data-testid="test-title">{title}</h1>
      <h2>{subTitle}</h2>
      <p>{arrayNumbers.join(' ')}</p>
    </>
  );
};

FirstApp.propTypes = {
  title: PropTypes.string.isRequired,
  subTitle: PropTypes.string,
  arrayNumbers: PropTypes.array
};

export { FirstApp };
