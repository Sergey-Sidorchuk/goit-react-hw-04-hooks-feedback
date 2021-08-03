import React from 'react';
import { useState } from "react";
import './App.css';

import FeedbackOptions from "./components/FeedbackOptions";
import Section from './components/FeedbackOptions';
import Statistics from "./components/Statistics";
import Notification from './components/Notification';
import { dataOptions } from "./components/data/dataOptions";


export default function App() {
const [good, setGood] = useState(0);
const [neutral, setNeutral] = useState(0);
const [bad, setBad] = useState(0);
    
    
    const countTotalFeedback = () => {
        const totalFeedbacks = good + neutral + bad;
        return totalFeedbacks;
    };

   
    const countPositiveFeedbackPercentage = () => {
        const percentageOfGoodFeedback = ((good / countTotalFeedback) * 100).toFixed(2);
        return percentageOfGoodFeedback;
    };
    
    const onLeaveFeedback = (event) => {
        switch (event.target.name) {
            case "good":
                setGood((prevState) => prevState + 1);
                break;
            case "neutral":
                    setNeutral((prevState) => prevState + 1);
                    break;
            case "bad":
                        setBad((prevState) => prevState + 1);
                        break;
                    
                    default:
                            return;
        }
    };


    return (
        <div className="App">
            <h1>Please leave feedback</h1>
        <Section title="">
                <FeedbackOptions
                    options={dataOptions}
                    onLeaveFeedback={onLeaveFeedback}>
                    </FeedbackOptions>
        </Section>
            {
                countTotalFeedback() !== 0
                ? <Section title="Statistics">
                        <Statistics
                            good={good}
                            neutral={neutral}
                            bad={bad}
                            total={countTotalFeedback()}
                            positivePercentage={countPositiveFeedbackPercentage()}
                        />
                </Section>
                : < Notification message="No feedback given" />
            }
    </div>
    );
}