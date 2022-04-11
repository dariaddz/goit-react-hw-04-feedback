import React  ,{ useState } from "react";
import FeedbackOptions from './FeedbackOptions';
import Section from "./Section/Section";
import Statistics from "./Statistics";
import Notification from "./Notification";

// ---------хук---------------
function App() { 
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const options = { good, bad, neutral };
  
  const onLeaveFeedback = (e) => { 
    const name = e.target.name;
    
    // console.log(name);
       switch (name) {
      case 'good':
        setGood(prev => prev + 1);
        break;
      case 'bad':
        setBad(prev => prev + 1);
        break;
      case 'neutral':
        setNeutral(prev => prev + 1);
        break;
      default:
        throw new Error('error: bad type');
    }
  }

  const countTotalFeedback= () => {
      return good + bad+ neutral
  };

  const countPositiveFeedbackPercentage = () => {
    
    return Math.round(good/countTotalFeedback()*100)
      };

  return (
    <>
        <Section className="options" title="Please leave feedback">
          <FeedbackOptions
          options={Object.keys(options)}
          onLeaveFeedback={onLeaveFeedback}
          />
        </Section>
                               
        <Section className="statistics" title='Statistics'>
        {countTotalFeedback()
          ? (<Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={countTotalFeedback()}
              positivePercentage={countPositiveFeedbackPercentage()}
          />)
          : (<Notification message='There is no feedback'/>)} 
        
        </Section>
    </>
    )
}

// ---------класс---------------

// class App extends React.Component {
//   state = {
//     good: 0,
//     neutral: 0,
//     bad: 0,
//   };

//   onLeaveFeedback = (key) => { 

//    this.setState((prevState) => ({
//       [key]: prevState[key] + 1,
//     }))
//   }

//   countTotalFeedback = () => {
//     const total = Object.values(this.state).reduce((acc, num) => acc + num, 0);
//     return total
//   };

//   countPositiveFeedbackPercentage = () => {
//     return Math.round(this.state.good/this.countTotalFeedback()*100)
//       };
  
//   render() { 
//     const { good, neutral, bad } = this.state;
     
//   return (
//     <>
//         <Section className="options" title="Please leave feedback">
//           <FeedbackOptions
//           options={Object.keys(this.state)}
//           onLeaveFeedback={ this.onLeaveFeedback}
//           />
//         </Section>
                               
//         <Section className="statistics" title='Statistics'>
//         {this.countTotalFeedback()
//           ? (<Statistics
//               good={good}
//               neutral={neutral}
//               bad={bad}
//               total={this.countTotalFeedback()}
//               positivePercentage={this.countPositiveFeedbackPercentage()}
//           />)
//           : (<Notification message='There is no feedback'/>)} 
        
//         </Section>
//     </>
//     )
//   }
// };

export default App