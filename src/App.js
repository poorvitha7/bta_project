// import React, { useState, useEffect } from 'react';
// import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';
// import './App.css';
// import { contractAddress, contractAbi } from './constants';
// import SlamBook from './SlamBook';
// import AnswerSlam from './AnswerSlam';
// import { ethers } from 'ethers';

// function App() {
//   const [contract, setContract] = useState(null);
//   const [questions, setQuestions] = useState([]);
//   const [userAddress, setUserAddress] = useState('');

//   useEffect(() => {
//     const initContract = async () => {
//       try {
//         const provider = new ethers.providers.Web3Provider(window.ethereum);
//         const signer = provider.getSigner();
//         const deployedContract = new ethers.Contract(contractAddress, contractAbi, signer);
  
//         // Ensure that the contract is properly initialized before setting it
//         setContract(deployedContract);
//         const user = await signer.getAddress();
//         setUserAddress(user);
  
//       } catch (error) {
//         console.error('Error initializing contract:', error);
//       }
//     };
  
//     initContract();
//   }, []); // Run only once on mount
  
//   useEffect(() => {
//     const loadQuestions = async () => {
//       try {
//         if (contract) {
//           const userQuestions = await contract.getQuestion(userAddress);
//           const loadedQuestions = await Promise.all(userQuestions.map((index) => contract.getQuestion(index)));
//           setQuestions(loadedQuestions);
//         }
//       } catch (error) {
//         console.error('Error loading questions:', error);
//       }
//     };
  
//     loadQuestions();
//   }, [userAddress, contract]);
  

//   return (
//     <BrowserRouter>
//       <div>
//         <nav className="navbar">
//           <h1 className="navbar-heading">
//             <Link to="/SlamBook" className="navbar-link">
//               Slam Book
//             </Link>
//           </h1>
//           <ul className="navbar-menu">
//             <li className="navbar-item">
//               <Link to="/SlamBook" className="navbar-link">
//                 Create Your Slam
//               </Link>
//             </li>
//             <li className="navbar-item">
//               <Link to="/AnswerSlam" className="navbar-link">
//                 Answer Slam Book
//               </Link>
//             </li>
//           </ul>
//         </nav>
//         <Routes>
//           <Route path="/SlamBook" element={<SlamBook contract={contract} />} />
//           <Route path="/AnswerSlam" element={<AnswerSlam contract={contract} questions={questions} userAddress={userAddress} />} />
//         </Routes>
//       </div>
//     </BrowserRouter>
//   );
// }

// export default App;









import React, { useState, useEffect } from 'react';
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';
import './App.css';
import { contractAddress, contractAbi } from './constants';
import SlamBook from './SlamBook';
import AnswerSlam from './AnswerSlam';

import { ethers } from 'ethers';

function App() {
  const [contract, setContract] = useState(null);
  const [questions, setQuestions] = useState([]);
  const [userAddress, setUserAddress] = useState('');

  useEffect(() => {
    const initContract = async () => {
      try {
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        const signer = provider.getSigner();
        const deployedContract = new ethers.Contract(contractAddress, contractAbi, signer);
  
        // Ensure that the contract is properly initialized before setting it
        setContract(deployedContract);
        const user = await signer.getAddress();
        setUserAddress(user);

        // Fetch questions from the blockchain
        const questionCount = await deployedContract.getQuestionCount();
        const questionsArray = [];

        for (let i = 0; i < questionCount; i++) {
          const question = await deployedContract.getQuestion(i);
          questionsArray.push(question);
        }

        setQuestions(questionsArray);
  
      } catch (error) {
        console.error('Error initializing contract:', error);
      }
    };
  
    initContract();
  }, []); // Run only once on mount

  return (
    <BrowserRouter>
      <div className='home'>
        <nav className="navbar">
          <h1 className="navbar-heading">
            <Link to="/SlamBook" className="navbar-link">
              Slam Book
            </Link>
          </h1>
          <ul className="navbar-menu">
            <li className="navbar-item">
              <Link to="/SlamBook" className="navbar-link">
                Your Slam Book
              </Link>
            </li>
            <li className="navbar-item">
              <Link to="/AnswerSlam" className="navbar-link">
                Answer Slam Book
              </Link>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path="/SlamBook" element={<SlamBook contract={contract} />} />
          <Route path="/AnswerSlam" element={<AnswerSlam contract={contract} questions={questions} userAddress={userAddress} />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;







