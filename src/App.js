import './App.css';
import React, { Component } from 'react';
import FeedbackSection from './components/Feedback/FeedbackSection';
import FeedbackOptions from './components/Feedback/FeedbackOptions';
import StatisticsFeedback from './components/Feedback/FeedbackStatistics';

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  incrementClick(e) {
    const currentBtnValue = e.currentTarget.value;
    this.setState(prevState => ({
      ...prevState,
      [currentBtnValue]: prevState[currentBtnValue] + 1,
    }));
  }

  render() {
    const { good, neutral, bad } = this.state;
    const { incrementClick } = this;

    const totalFeedback = good + neutral + bad;
    const positiveFeedbackPercentage = Math.round((good / totalFeedback) * 100);

    return (
      <FeedbackSection>
        <FeedbackOptions
          options={this.state}
          onLeaveFeedback={incrementClick}
        />
        <StatisticsFeedback
          good={good}
          neutral={neutral}
          bad={bad}
          total={totalFeedback}
          positivePercentage={positiveFeedbackPercentage}
        />
      </FeedbackSection>
    );
  }
}

export default App;
