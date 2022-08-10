import { Box } from 'components/Box';
import PropTypes from 'prop-types';
import { Item, StatisticSection } from './Statistics.styled';

export default function Statistics({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
  
}) {
  return (
    <StatisticSection>
       
      {
        <Box as = 'ul'
        display = 'flex'
        flexDirection = 'column'
        alignItems = 'flex-start'
        justifyContent = 'center'
        >
          <Item>Good: {good}</Item>
          <Item>Neutral: {neutral}</Item>
          <Item>Bad: {bad}</Item>
          <Item>Total: {total}</Item>
          <Item>Positive feedback: {positivePercentage}%</Item>
        </Box>
      }
    </StatisticSection>
  );
}

Statistics.prototype = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
  
};