const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
  if (isNaN(positivePercentage)) {
    positivePercentage = 0;
  }

  return (
    <>
      <h2>Statistics</h2>
      <p>Good: {good}</p>
      <p>Neutral: {neutral}</p>
      <p>Bad: {bad}</p>
      <p>Total: {total}</p>
      <p>Positive percentage: {positivePercentage}%</p>
    </>
  );
};

export default Statistics;
