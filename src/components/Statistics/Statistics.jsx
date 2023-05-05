import PropTypes from 'prop-types';
import { Text, Span } from './Statistics.styled';

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
  if (isNaN(positivePercentage)) {
    positivePercentage = 0;
  }

  return (
    <>
      <Text>
        Good: <Span>{good}</Span>
      </Text>
      <Text>
        Neutral: <Span>{neutral}</Span>
      </Text>
      <Text>
        Bad: <Span>{bad}</Span>
      </Text>
      <Text>
        Total: <Span>{total}</Span>
      </Text>
      <Text>
        Positive percentage: <Span>{positivePercentage}%</Span>
      </Text>
    </>
  );
};

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number,
  positivePercentage: PropTypes.string,
};

export default Statistics;
