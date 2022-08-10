import PropTypes from 'prop-types';
import { NotificText } from './Notification.styled';

export default function Notification({ message }) {
  return <NotificText>{message}</NotificText>;
}

Notification.prototype = {
  message: PropTypes.string.isRequired,
};