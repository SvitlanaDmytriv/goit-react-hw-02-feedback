import s from './FeedbackSection.module.css';

const FeedbackTitle = ({ children }) => {
  return (
    <section className={s.feedback}>
      <h2>Please leave feedback</h2>
      {children}
    </section>
  );
};

export default FeedbackTitle;
