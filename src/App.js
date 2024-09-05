import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from "react";

function App() {

// Random Color Background Function

const randomBackground = () => {
	const colors = [
	"#000000",
  	"#1A1A1A",
 	"#333333",
  	"#4B0082",
  	"#2C3E50",
  	"#8B0000",
  	"#006400",
  	"#191970",
  	"#800000",
  	"#2F4F4F",
  	"#800080",
  	"#00008B",
  	"#013220",
 	"#2E0854",
  	"#3B3B3B",
  	"#654321",
  	"#3C1414",
  	"#0B3D91",
  	"#8B4513",
  	"#4C4C4C"
	];

	const randomNum = Math.floor(Math.random() * 20);
	const randomColor = colors[randomNum];

	const body = document.getElementById("body");
	const alignColor = document.getElementsByClassName("align-color");
	for (let i = 0; i < alignColor.length; i++) {
  		alignColor[i].style.color = randomColor;
	}

	const alignColorBg = document.getElementsByClassName("align-color-bg");
	for (let i = 0; i < alignColorBg.length; i++) {
  		alignColorBg[i].style.backgroundColor = randomColor;
	}

	body.style.backgroundColor = randomColor;
};
randomBackground();




const [quoteInfo, setQuoteInfo] = useState({});
useEffect(() => getQuote(), []);
const randomNum = Math.floor(Math.random() * 99);

const getQuote = () => {
	fetch("https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json")
	.then(res => res.json())
	.then(data => {
		const randomQuote = data.quotes[randomNum];
		setQuoteInfo({
			quote: randomQuote.quote,
			author: randomQuote.author
		})

	})
	.catch(e => console.error(e));
	randomBackground();
};

const link = 'https:twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=' + quoteInfo.quote + " - " + quoteInfo.author;

  return (
    <div className="App">
      <div id="quote-box" class="align-color" >
            <p id="text" >
            	<i class="fa-solid fa-quote-left sp q"></i>
            		{quoteInfo.quote}

            </p>
            <span id="author">- {quoteInfo.author}</span>

          <div id="btn-container" >
          	<div id="social-btn-container">
          		<button class="align-color-bg">
          			<a id="tweet-quote" href={link} target="_blank" >
          				<i class="fa-brands fa-twitter try"></i>
          			</a>
          		</button>
          		<button class="align-color-bg">
          			<a id="facebook-quote" href={link} target="_blank" >
          				<i class="fa-brands fa-square-instagram"></i>
          			</a>
          		</button>
          	</div>

          	<button class="align-color-bg" id="new-quote" onClick={getQuote}>New Quote</button>
          </div>
      </div>
      <p id="developer">By: Samson</p>
    </div>
  );
}

export default App;
