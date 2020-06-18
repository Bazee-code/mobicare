import React from 'react';
import ChatBot from 'react-simple-chatbot';
import styled ,{ThemeProvider} from 'styled-components';

// local
import Header from './Header.js';
import Products from './Products';

// chatbot configuration
const steps = [
	{
		id : "Greeting",
		message : "Welcome to mobiCare",
		trigger : "Ask name"
	},
	{
		id : "Ask name",
		message : "What's your name?",
		trigger : "Waiting user input"
	},
	{
		id : "Waiting user input",
		user : true,
		trigger : "Ask rating"
	},
	{
		id : "Ask rating",
		message : "{previousValue},how's your experience with mobiCare?(1-10)",
		trigger : "Waiting user input again"
	},
	{
		id : "Waiting user input again",
		user : true,
		trigger : "Done"
	},
	{
		id : "Done",
		message : "Thank you and have a great day!",
		end : true
	}

];

const Config = {
	height : "300px",
	width : "400px",
	floating : true
};

const theme = {
	background : "#fff",
	fontFamily : "Arial,Helvetica,sans-serif",
	headerFontSize : "20px",
	headerBgColor : "#420420",
	headerFontColor : "#ffff00",
	botBubbleColor : "#420420",
	botFontColor : "#fff",
	userFontColor : "#000",
	userBubbleColor : "#ffff00"
};

const Home = ()=>{
	return (
		<div>
			<Header />
			<Products />
			<ThemeProvider theme = {theme}>
				<ChatBot steps ={steps} {...Config}/>
			</ThemeProvider>
		</div>
	)
};

export default Home;