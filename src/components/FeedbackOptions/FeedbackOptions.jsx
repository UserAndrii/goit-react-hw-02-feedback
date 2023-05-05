import PropTypes from 'prop-types';
import { Button, BtnWrap } from './FeedbackOptions.styled';

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <BtnWrap>
      {options.map(optn => (
        <Button key={optn} type="button" name={optn} onClick={onLeaveFeedback}>
          {optn}
        </Button>
      ))}
    </BtnWrap>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.array.isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};

export default FeedbackOptions;
