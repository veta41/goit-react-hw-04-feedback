import PropTypes from 'prop-types';
import { Button, ButtonWrapper } from './Feedback.styled';

export default function FeedbackOptions({ options, onLeaveFeedback }) {
  return (
    <ButtonWrapper>
      {options.map((option, index) => (
        <Button
          key={index}
          type="button"
          onClick={() => onLeaveFeedback(option)}
        >
          {option}
        </Button>
      ))}
    </ButtonWrapper>
  );
}

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string.isRequired),
  onLeaveFeedback: PropTypes.func.isRequired,
};
