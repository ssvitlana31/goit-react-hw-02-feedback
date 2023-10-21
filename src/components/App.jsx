import React, { Component } from 'react';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  countTotalFeedback() {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  }

  countPositivFeedbackPersentage() {
    return this.state.good === 0
      ? 0
      : ((this.state.good / this.countTotalFeedback) * 100).toFixed(2);
  }

  onLeaveFeedback = name => {
    this.setState(prevState => ({ [name]: prevState[name] + 1 }));
  };

  render() {
    const { good, neutral, bad } = this.state;
    const total = this.countTotalFeedback();
    const positiv = this.countPositivFeedbackPersentage();

    return <div></div>;
  }
}
