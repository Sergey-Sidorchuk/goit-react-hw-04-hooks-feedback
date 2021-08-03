import React from 'react';
import PropTypes from 'prop-types';
import styles from './FeedbackOptions.module.css';

const FeedbackOptions = ({ options, onLeaveFeedback }) =>
(<> {options.map((option, idx) => 
    
    <button
        type='button'
        key={idx}
        name={option}
        className={styles.button}
        onClick={onLeaveFeedback}>
        {option}
    </button>
)}; </>
);
            

    FeedbackOptions.propTypes = {
        options: PropTypes.array,
        onSubmit: PropTypes.func,
    }
export default FeedbackOptions;
