import React from 'react';
import PropTypes from 'prop-types';
import { Button, Options } from './FeedbackOptions.styles';

function FeedbackOptions({ options, onLeaveFeedback }) {
  return (
    <Options>
      {options.map(option => (
        <Button
          key={option}
          name={option}
          type="button"
          onClick={onLeaveFeedback}
        >
          {option}
        </Button>
      ))}
    </Options>
  );
}

FeedbackOptions.propTypes = {
  options: PropTypes.array,
  onLeaveFeedback: PropTypes.func,
};
export default FeedbackOptions;
