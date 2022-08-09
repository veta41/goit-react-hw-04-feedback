import PropTypes from 'prop-types';
import { Title } from './Section.styled';

export default function Section({ children }) {
  return (
    <section>
      <Title>Please leave feedback</Title>
      {children}
    </section>
  );
}

Section.propTypes = { children: PropTypes.arrayOf(PropTypes.object) };