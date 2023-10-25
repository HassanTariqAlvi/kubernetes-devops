import { useState, useEffect } from "react";
import kubeLogo from "/kubernetes.png";
import myGif from '/devops.gif';
import "./App.css";

function App() {
	
	const bgColor = import.meta.env.VITE_COLOR || 'white';
	

	useEffect(() => {
		document.body.style.backgroundColor = bgColor;
		return () => {
			document.body.style.backgroundColor = null; // Reset to the original style on unmount
		};
	}, [bgColor]);

	return (
		<div>
			<div  className="app-name"> App-Color: 
				<span className="app-name-light"> {bgColor} </span>
			</div>
	
			<div className="card">
				<div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
					<a href="https://www.linkedin.com/in/muhammad-hassan-tariq/" target="_blank" rel="noreferrer">
						<img src={myGif} className="logo" alt="DevOps logo" />
					</a>
					<a href="https://www.linkedin.com/in/muhammad-hassan-tariq/" target="_blank" rel="noreferrer">
						<img src={kubeLogo} className="logo react" alt="kube logo" />
					</a>
				</div>
	
				<div className="my-name">
					Developed by: <a href="https://www.linkedin.com/in/muhammad-hassan-tariq/" target="_blank" rel="noopener noreferrer">
						<span className="my-name-bold">Muhammad Hassan Tariq</span>
					</a>
				</div>
			</div>
		</div>
	);
	
}

export default App;
