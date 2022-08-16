import { GlobalStyle } from './GlobalStyle';

 import { Box } from './Box';
import { Component } from 'react';
import Section from './Section/Section';
import FeedbackOptions from './Feedback/FeedbackOptions';
import Notification from './Notification/Notification';
import Statistics from './Statistics/Statistics';

 

 export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  countPositiveFeedbackPercentage = () => {
    const { good, neutral, bad } = this.state;

    return Math.round((good / (good + neutral + bad)) * 100);
  };

  countTotalFeedback = e => {
    
    const element = e.target.innerText.toLowerCase();
    this.setState(prevState => ({
      [element]: prevState[element] + 1,
    }));
  };

  render() {
    const { good, neutral, bad } = this.state;
    const { state, countTotalFeedback, countPositiveFeedbackPercentage } = this;
    const buttons = Object.keys(state);
    const total = good + neutral + bad;

  return (
      <Box 
      display = 'flex' 
      flexDirection = 'column'
      flexWrap = 'wrap'
      alignContent = 'center'
      >
      <Section title={"Please leave feedback"}>
      <FeedbackOptions
        options={buttons}
        onLeaveFeedback={countTotalFeedback} />

    </Section>
    <Section title={"Statistics"}>
        {total ? (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={total}
            positivePercentage={countPositiveFeedbackPercentage()} />
        ) : (
          <Notification
             message = "There is no feedback!"
            
            />
        )}
      </Section>
      <GlobalStyle />
      </Box>
      
      
    );
  }
}
