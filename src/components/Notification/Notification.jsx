import PropTypes from 'prop-types';
import css from "components/Notification/Notification.module.css";

const Notification = ({message}) => (
    <div>
        <h2 className={css.message}>{message}</h2>
    </div>

);

Notification.propTypes = {
    message: PropTypes.string,
};

export default Notification;