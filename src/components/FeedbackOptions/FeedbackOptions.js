import React from 'react';
import PropTypes from 'prop-types';
import styles from './FeedbackOptions.module.css';


const FeedbackOptions = ({ options, onLeaveFeedback }) =>
(
    <>
        {options.map((option) => (
            <button
                type='button'
                name={option}
                key={option}
                className={styles.button}
                 onClick={onLeaveFeedback}
            >
                {option}
            </button>
        ))}
            </>
);


FeedbackOptions.propTypes = {
    options: PropTypes.arrayOf(PropTypes.string.isRequired),
  onLeaveFeedback: PropTypes.func,
}

export default FeedbackOptions;
