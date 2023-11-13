import React, { useState, useEffect } from 'react';

function SlamBook({ contract }) {
  const [questionText, setQuestionText] = useState('');
  const [questions, setQuestions] = useState([]);
  const [answersByAddress, setAnswersByAddress] = useState({});
  const [fontFamily, setFontFamily] = useState('Arial');
  const [fontWeight, setFontWeight] = useState('normal');
  const [fontSize, setFontSize] = useState('1rem');
  const [backgroundColor, setBackgroundColor] = useState('');
  const [fontColor, setFontColor] = useState('#000');
  useEffect(() => {
    if (contract) {
      // Fetch questions and answers from the blockchain
      fetchQuestionsAndAnswers();
    }
  }, [contract]);

  const fetchQuestionsAndAnswers = async () => {
    try {
      const questionCount = await contract.getQuestionCount();
      const fetchedQuestions = [];
      const fetchedAnswers = {};

      for (let i = 0; i < questionCount; i++) {
        const question = await contract.getQuestion(i);
        fetchedQuestions.push(question);

        if (question.answered && question.answers.length > 0) {
          for (let j = 0; j < question.answers.length; j++) {
            const address = question.answeredBy[j];
            if (!fetchedAnswers[address]) {
              fetchedAnswers[address] = [];
            }
            fetchedAnswers[address].push({
              question: question.questionText,
              answer: question.answers[j],
            });
          }
        }
      }

      setQuestions(fetchedQuestions);
      setAnswersByAddress(fetchedAnswers);
    } catch (error) {
      console.error('Error fetching questions and answers:', error);
    }
  };

  const handleAskQuestion = async () => {
    if (contract && questionText) {
      try {
        await contract.askQuestion(questionText);
        setQuestionText('');
        // Update the list of questions and answers
        fetchQuestionsAndAnswers();
      } catch (error) {
        console.error('Error asking question:', error);
      }
    }
  };
  const handleFontFamilyChange = (selectedFont) => {
    setFontFamily(selectedFont);
  };

  const handleFontWeightChange = (selectedWeight) => {
    setFontWeight(selectedWeight);
  };

  const handleFontSizeChange = (selectedSize) => {
    setFontSize(selectedSize);
  };

  const handleBackgroundColorChange = (selectedColor) => {
    setBackgroundColor(selectedColor);
  };
  const handleFontColorChange = (selectedColor) => {
    setFontColor(selectedColor);
  };

  const containerStyles = {
    fontFamily,
    fontWeight,
    fontSize,
    color: fontColor,
    backgroundColor,
  };

  //   return (
  //     <div className="slam-book-container">
  //       <div className="question-input">
  //         <div className='heading'><h3>Add Questions to your SlamBook:</h3></div>
  //         <div className="input-container">
  //           <input
  //             type="text"
  //             value={questionText}
  //             onChange={(e) => setQuestionText(e.target.value)}
  //           />
  //           <button type='button' onClick={handleAskQuestion}>
  //             Ask
  //           </button>
  //         </div>
  //       </div>

  //       <div className='container'>
  //         <h3>Questions:</h3>
  //         <div className='qns'>
  //         <ul>
  //           {questions.map((question, index) => (
  //             <li key={index}>
  //               {index+1}: {question.questionText}

  //             </li>
  //           ))}
  //         </ul>
  //         </div>



  //         <h3>Answers by Friends:</h3>
  //         {Object.entries(answersByAddress).map(([address, answers], index) => (
  //           <div key={index} className="friend-answers">
  //             <h4>Friend {index + 1}: {address}</h4>
  //             <table>
  //               <thead>
  //                 <tr>
  //                   <th>Question</th>
  //                   <th>Answer</th>
  //                 </tr>
  //               </thead>
  //               <tbody>
  //                 {answers.map((entry, entryIndex) => (
  //                   <tr key={entryIndex}>
  //                     <td>{entry.question}</td>
  //                     <td>{entry.answer}</td>
  //                   </tr>
  //                 ))}
  //               </tbody>
  //             </table>
  //           </div>
  //         ))}
  //       </div>
  //     </div>
  //   );
  // }

  // export default SlamBook;
  return (
    <div className="slam-book-container" >
      <div className="question-input">
        <div className='heading'><h3>Add Questions to your SlamBook:</h3></div>
        <div className="input-container">
          <input
            type="text"
            value={questionText}
            onChange={(e) => setQuestionText(e.target.value)}
          />
          <button type='button' onClick={handleAskQuestion}>
            Ask
          </button>
        </div>
      </div>

      <div className='container' style={containerStyles}>
        <h3>Questions:</h3>
        <div className='qns'>
          <ul>
            {questions.map((question, index) => (
              <li key={index}>
                {index + 1}: {question.questionText}

              </li>
            ))}
          </ul>
        </div>

        <h3>Answers by Friends:</h3>
        {Object.entries(answersByAddress).map(([address, answers], index) => (
          <div key={index} className="friend-answers">
            <h4>Friend {index + 1}: {address}</h4>
            <table>
              <thead>
                <tr>
                  <th>Question</th>
                  <th>Answer</th>
                </tr>
              </thead>
              <tbody>
                {answers.map((entry, entryIndex) => (
                  <tr key={entryIndex}>
                    <td>{entry.question}</td>
                    <td>{entry.answer}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ))}
      </div>


<div className="settings-container">
  <h3>Customize your SlamBook:</h3>

  <div className="setting-option">
    <label className="setting-label">
      Font Family:
      <select
        value={fontFamily}
        onChange={(e) => handleFontFamilyChange(e.target.value)}
        className="setting-select"
      >
        <option value="Arial">Arial</option>
        <option value="Times New Roman">Times New Roman</option>
        <option value="Verdana">Verdana</option>
        <option value="Helvetica">Helvetica</option>
        <option value="Georgia">Georgia</option>
        <option value="Courier New">Courier New</option>
        <option value="Trebuchet MS">Trebuchet MS</option>
        <option value="Palatino">Palatino</option>
        <option value="Impact">Impact</option>
      </select>
    </label>
  </div>

  <div className="setting-option">
    <label className="setting-label">
      Font Weight:
      <select
        value={fontWeight}
        onChange={(e) => handleFontWeightChange(e.target.value)}
        className="setting-select"
      >
        <option value="normal">Normal</option>
        <option value="bold">Bold</option>
        {/* Add more font weight options */}
      </select>
    </label>
  </div>

  <div className="setting-option">
    <label className="setting-label">
      Font Size:
      <select
        value={fontSize}
        onChange={(e) => handleFontSizeChange(e.target.value)}
        className="setting-select"
      >
        <option value="1rem">Normal</option>
        <option value="1.2rem">Large</option>
        {/* Add more font size options */}
      </select>
    </label>
  </div>

  <div className="setting-option">
    <label className="setting-label">
      Background Color:
      <input
        type="color"
        value={backgroundColor}
        onChange={(e) => handleBackgroundColorChange(e.target.value)}
        className="setting-color"
      />
    </label>
  </div>

  <div className="setting-option">
    <label className="setting-label">
      Font Color:
      <input
        type="color"
        value={fontColor}
        onChange={(e) => handleFontColorChange(e.target.value)}
        className="setting-color"
      />
    </label>
  </div>
</div>

    </div>
  );
}

export default SlamBook;