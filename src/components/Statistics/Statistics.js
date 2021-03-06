import React from "react";
import PropTypes from 'prop-types';
import styles from './Statistics.module.css';

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
return (
    <>
        <p className={styles.good}>Good: {good}</p>
        <p className={styles.neutral}>Neutral: {neutral}</p>
        <p className={styles.bad}>Bad: {bad}</p>
            
        {(total !== 0) ?
            <>
                <p>Total feedback: {total}</p>
                <p className={styles.good}>Positive feedbacks: {positivePercentage}%</p>
                <h3>Thank you</h3>
            </> : "No feedback given"}
    </>
)};

Statistics.defaultProps = {
    total: null,
    positivePercentage: null,
}

Statistics.propTypes = {
    good: PropTypes.number,
    neutral: PropTypes.number,
    bad: PropTypes.number,
    total: PropTypes.number,
    positivePercentage: PropTypes.string,
  
};

export default Statistics;
