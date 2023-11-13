import { ethers } from "ethers";
export const contractAddress ="0x07B86f2B562B1f94a8D9bDb69A53972a357a3328";
export const contractAbi=[
	{
		"inputs": [],
		"stateMutability": "nonpayable",
		"type": "constructor"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "uint256",
				"name": "questionIndex",
				"type": "uint256"
			},
			{
				"indexed": false,
				"internalType": "string",
				"name": "answer",
				"type": "string"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "answeredBy",
				"type": "address"
			}
		],
		"name": "Answered",
		"type": "event"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_questionIndex",
				"type": "uint256"
			},
			{
				"internalType": "string",
				"name": "_answer",
				"type": "string"
			}
		],
		"name": "answerQuestion",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "_questionText",
				"type": "string"
			}
		],
		"name": "askQuestion",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "uint256",
				"name": "questionIndex",
				"type": "uint256"
			},
			{
				"indexed": false,
				"internalType": "string",
				"name": "questionText",
				"type": "string"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "askedBy",
				"type": "address"
			}
		],
		"name": "QuestionAsked",
		"type": "event"
	},
	{
		"inputs": [],
		"name": "getAllQuestions",
		"outputs": [
			{
				"components": [
					{
						"internalType": "uint256",
						"name": "id",
						"type": "uint256"
					},
					{
						"internalType": "string",
						"name": "questionText",
						"type": "string"
					},
					{
						"internalType": "address",
						"name": "askedBy",
						"type": "address"
					},
					{
						"internalType": "string[]",
						"name": "answers",
						"type": "string[]"
					},
					{
						"internalType": "address[]",
						"name": "answeredBy",
						"type": "address[]"
					},
					{
						"internalType": "bool",
						"name": "answered",
						"type": "bool"
					}
				],
				"internalType": "struct SlamBook.Question[]",
				"name": "",
				"type": "tuple[]"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_questionIndex",
				"type": "uint256"
			}
		],
		"name": "getQuestion",
		"outputs": [
			{
				"components": [
					{
						"internalType": "uint256",
						"name": "id",
						"type": "uint256"
					},
					{
						"internalType": "string",
						"name": "questionText",
						"type": "string"
					},
					{
						"internalType": "address",
						"name": "askedBy",
						"type": "address"
					},
					{
						"internalType": "string[]",
						"name": "answers",
						"type": "string[]"
					},
					{
						"internalType": "address[]",
						"name": "answeredBy",
						"type": "address[]"
					},
					{
						"internalType": "bool",
						"name": "answered",
						"type": "bool"
					}
				],
				"internalType": "struct SlamBook.Question",
				"name": "",
				"type": "tuple"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "getQuestionCount",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"name": "questions",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "id",
				"type": "uint256"
			},
			{
				"internalType": "string",
				"name": "questionText",
				"type": "string"
			},
			{
				"internalType": "address",
				"name": "askedBy",
				"type": "address"
			},
			{
				"internalType": "bool",
				"name": "answered",
				"type": "bool"
			}
		],
		"stateMutability": "view",
		"type": "function"
	}
];