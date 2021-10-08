import s from './FeedbackOptions.module.css';

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  const optionsBtn = Object.keys(options);
  return (
    <div className={s.optionsBtn}>
      {optionsBtn.map(option => (
        <button
          type="button"
          key={option}
          value={option}
          onClick={onLeaveFeedback}
        >
          {option}
        </button>
      ))}
    </div>
  );
};

export default FeedbackOptions;
