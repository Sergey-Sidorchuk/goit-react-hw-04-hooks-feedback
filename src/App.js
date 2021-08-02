import React from 'react';
import { useState } from "react";
import './App.css';


import FeedbackOptions from "./components/FeedbackOptions";
import Section from './components/FeedbackOptions';
import Statistics from "./components/Statistics";
import Notification from './components/Notification';


export default function App() {
const [good, setGood] = useState(0);
const [neutral, setNeutral] = useState(0);
const [bad, setBad] = useState(0);
    
    
    const countTotalFeedback = () => {
        const totalFeedbacks = good + neutral + bad;
        return totalFeedbacks;
    };
    const countPositiveFeedbackPercentage = () => {
        const percentageOfGoodFeedback = ((good / (good + neutral + bad)) * 100).toFixed(2);
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
                <FeedbackOptions options=
                    {
                        ['good', 'neutral', 'bad']
                    }
                    onLeaveFeedback={onLeaveFeedback}>
                    
                    </FeedbackOptions>
        </Section>
            {
                countTotalFeedback() !== 0
                ? <Section title="Statistics">
                    <Statistics  good={good} neutral={neutral} bad={bad} total={countTotalFeedback()} positivePercentage={countPositiveFeedbackPercentage()} />
                </Section>
                : < Notification message="No feedback given" />
            }
    </div>
    );
}
// class App extends Component {
//     static defaultProps = {
//         totalFeedbacks: 0,
//         percentageOfGoodFeedback:0,
//     }
//     static propTypes = {
//         totalFeedbacks: PropTypes.number,
//         percentageOfGoodFeedback: PropTypes.number,
//         good: PropTypes.number,
//         bad: PropTypes.number,
//         neutral: PropTypes.number,
//         options: PropTypes.arrayOf(PropTypes.number),
//     };
//     state = {
//         good: 0,
//         neutral: 0,
//         bad: 0,
//     };

//     onLeaveFeedback = (option) => {
//         this.setState(prevState => {
//             return ({
//                 [option]: prevState[option] +1
//             })
//         })       
//     }

//     countTotalFeedback() {
//         const { good, neutral, bad } = this.state;
//         const totalFeedbacks = good + neutral + bad;
//         return totalFeedbacks;
//     }
//     countPositiveFeedbackPercentage() {
//         const { good, neutral, bad } = this.state;
//         const percentageOfGoodFeedback = ((good / (good + neutral + bad)) * 100).toFixed(2);
//         return percentageOfGoodFeedback;
//     }

//     render(totalFeedbacks) {
//     const { good, neutral, bad } = this.state;
//     return (
//       <div className="App">
//           <h1>Please leave feedback</h1>  

//         <Section title="">
//           <FeedbackOptions options={['good', 'neutral', 'bad']} onLeaveFeedback={this.onLeaveFeedback}></FeedbackOptions>
//         </Section>
//             {(totalFeedbacks !== 0)
//                 ? <Section title="Statistics">
//                     <Statistics  good={good} neutral={neutral} bad={bad} total={this.countTotalFeedback()} positivePercentage={this.countPositiveFeedbackPercentage()} />
//                 </Section>
//                 : < Notification message="No feedback given" />
//             }
//       </div>
//     );
//   }  
// }


// export default App;
