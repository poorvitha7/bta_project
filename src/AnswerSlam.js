import React, { useState } from 'react';

function AnswerComponent({ contract, questions, userAddress }) {
  const [selectedQuestionIndex, setSelectedQuestionIndex] = useState(0);
  const [answerText, setAnswerText] = useState('');

  const handleAnswerQuestion = async () => {
    if (contract && questions[selectedQuestionIndex] && answerText) {
      try {
        await contract.answerQuestion(selectedQuestionIndex, answerText);
        setAnswerText('');
      } catch (error) {
        console.error('Error answering question:', error);
      }
    }
  };

  return (
    
    
    <div className='answer-container'>
      <h2 >Answer your friend's SlamBook</h2>
      <div className="select-container">
  <h3>Select a Question to Answer:</h3>
  <div className="select-dropdown-container">
    <select
      value={selectedQuestionIndex}
      onChange={(e) => setSelectedQuestionIndex(e.target.value)}
      className="select-dropdown"
    >
      {questions.map((question, index) => (
        <option key={index} value={index}>
          {question.questionText}
        </option>
      ))}
    </select>
  </div>
</div>

      <div className='answer'>
        <h3>Answer the Question:</h3>
        <input
          type="text"
          value={answerText}
          onChange={(e) => setAnswerText(e.target.value)}
        />
        <button onClick={handleAnswerQuestion}>Answer</button>
      </div>
    </div>
  );
}

export default AnswerComponent;








// import React, { useState } from 'react';

// function AnswerSlam({ contract, questions, userAddress }) {
//   const [selectedQuestionIndex, setSelectedQuestionIndex] = useState(0);
//   const [answerText, setAnswerText] = useState('');

//   const isOwner = userAddress === contract.owner;

//   const handleAnswerQuestion = async () => {
//     if (contract && questions[selectedQuestionIndex] && answerText) {
//       try {
//         await contract.answerQuestion(selectedQuestionIndex, answerText);
//         setAnswerText('');
//       } catch (error) {
//         console.error('Error answering question:', error);
//       }
//     }
//   };

//   return (
//     <div>
//       <h2>Answer Component - Answer Questions</h2>
//       <div>
//         <h3>Select a Question to Answer:</h3>
//         <select
//           value={selectedQuestionIndex}
//           onChange={(e) => setSelectedQuestionIndex(e.target.value)}
//         >
//           {questions.map((question, index) => (
//             <option key={index} value={index}>
//               {question.questionText}
//             </option>
//           ))}
//         </select>
//       </div>
//       <div>
//         {isOwner ? (
//           <div>
//             <h3>Answer the Question:</h3>
//             <input
//               type="text"
//               value={answerText}
//               onChange={(e) => setAnswerText(e.target.value)}
//             />
//             <button onClick={handleAnswerQuestion}>Answer</button>
//           </div>
//         ) : (
//           <div>
//             <h3>Question:</h3>
//             <p>{questions[selectedQuestionIndex].questionText}</p>
//           </div>
//         )}
//         {isOwner && questions[selectedQuestionIndex].answered && (
//           <div>
//             <h3>Answers:</h3>
//             <ul>
//               {questions[selectedQuestionIndex].answers.map((answer, answerIndex) => (
//                 <li key={answerIndex}>Answer: {answer}</li>
//               ))}
//             </ul>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// }

// export default AnswerSlam;


