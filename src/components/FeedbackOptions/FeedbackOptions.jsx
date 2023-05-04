const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <>
      {options.map(optn => (
        <button key={optn} type="button" name={optn} onClick={onLeaveFeedback}>
          {optn}
        </button>
      ))}
    </>
  );
};

export default FeedbackOptions;
