import PropTypes from 'prop-types';
import css from "components/FeedbackOptions/FeedbackOptions.module.css";

const FeedbackOptions = ({onGoodFeedback, onNeutralFeedback, onBadFeedback}) => (
    <div className={css.ButtonContainer}>
        <button
            type="button"
            onClick={onGoodFeedback}
            className={css.FeedbackButton}
        >Good</button>
        
        <button
            type="button"
            onClick={onNeutralFeedback}
            className={css.FeedbackButton}
        >Neutral</button>
        
        <button
            type="button"
            onClick={onBadFeedback}
            className={css.FeedbackButton}
        >Bad</button>
    </div>
);

export default FeedbackOptions;

FeedbackOptions.propTypes = {
    onGoodFeedback: PropTypes.number.isRequired,
    onNeutralFeedback: PropTypes.number.isRequired,
    onBadFeedback: PropTypes.number.isRequired,
};