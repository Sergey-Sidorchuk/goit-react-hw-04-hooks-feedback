import { useState, useEffect } from "react";
import './App.css';

import FeedbackOptions from "./components/FeedbackOptions";
import Section from './components/FeedbackOptions';
import Statistics from "./components/Statistics";
import Notification from './components/Notification';


export default function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const [totalFeedbacks, setTotalFeedbacks] = useState(0);
  const [percentageOfGoodFeedb, setPercentageOfGoodFeedb] = useState(0);
    

    useEffect(() => {
     setTotalFeedbacks(good + bad + neutral);
     setPercentageOfGoodFeedb(((good / (good + bad + neutral)) * 100).toFixed(2));
    }, [good, neutral, bad])
    

    const handleBtnClick = (event) => {
        const { name } = event.target;
        switch (name) {
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
    }


    return (
        <div className="App">
            <h1>Please leave feedback</h1>
        
            <Section title="">
                <FeedbackOptions
                    options={['good', 'neutral', 'bad']}
                    onLeaveFeedback={handleBtnClick}></FeedbackOptions>
            </Section>
            
            {(totalFeedbacks !== 0)
                
      ? <Section title="Statistics">
        <Statistics good={good} neutral={neutral} bad={bad} total={totalFeedbacks} positivePercentage={percentageOfGoodFeedb}/>
      </Section> 
      : <Notification message="No feedback given" /> }        
    </div>
  );
}