import { GlobalStyle } from './GlobalStyle';
import { useState } from 'react';
import { Box } from './Box';

import Section from './Section/Section';
import FeedbackOptions from './Feedback/FeedbackOptions';
import Notification from './Notification/Notification';
import Statistics from './Statistics/Statistics';


 

 export function App () {

  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const state = {
    good,
    neutral,
    bad,
  };

  const buttons = Object.keys(state)

  const countTotalFeedback = () => {
    return good + neutral + bad;
  };

  const total = countTotalFeedback();

  const countPositiveFeedbackPercentage = () => {

    return Math.round((good / total) * 100);
  };

  const leaveFeedback = item => {
    switch (item) {
      case 'good':
        setGood(good + 1);
        break;

      case 'neutral':
        setNeutral(neutral + 1);
        break;

      case 'bad':
        setBad(bad + 1);
        break;

      default:
        return;
    }
  };
  

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
        onLeaveFeedback={leaveFeedback} />

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

