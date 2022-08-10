import PropTypes from 'prop-types';
import { Sections, Title } from './Section.styled';

export default function Section({ title, children }) {
  return (
    <Sections>
      <Title>{title}</Title>
      {children}
    </Sections>
  );
}

Section.propTypes = { 
  children: PropTypes.node.isRequired,
  title: PropTypes.string.isRequired,
};