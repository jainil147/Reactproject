// Frontend code 
// Filename - App.js
// Filename - App.js

import { useState } from 'react'
function App() {
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [moblieNumber, setMobileNumber] = useState("");
	const [password, setPassword] = useState("");

	const handleOnSubmit = async (e) => {
		e.preventDefault();
		let result = await fetch(
			'http://127.0.0.1:5000/register', {
			method: "post",
			body: JSON.stringify({ name, email, moblieNumber, password }),
			headers: {
				'Content-Type': 'application/json',
			}
		})
		result = await result.json();
		console.log(result);
		if (result) {
			alert("Data saved succesfully");
			setEmail("");
			setName("");
			setMobileNumber("");
			setPassword("");

		}
	}
	return (
		<>
	<div className="main">  	
		<input type="checkbox" id="chk" aria-hidden="true"/>

			<div className="signup">
			<form action="">
			<label htmlFor="chk" aria-hidden="true">Sign up</label>
				<input type="text" placeholder="User Name"
				value={name} onChange={(e) => setName(e.target.value)} />
				<input type="email" placeholder="email"
				value={email} onChange={(e) => setEmail(e.target.value)} />
				<input type="text" placeholder="Mobile Number"
				value={moblieNumber} onChange={(e) => setMobileNumber(e.target.value)} />
				<input type="password" placeholder="Enter the Password"
				value={password} onChange={(e) => setPassword(e.target.value)} />
				

				<button type="submit"
				onClick={handleOnSubmit}>submit</button>
			</form>

			</div>

			<div className="login">
				<form>
					<label htmlFor="chk" aria-hidden="true">Login</label>
					<input type="email" name="email" placeholder="Email" required=""/>
					<input type="password" name="pswd" placeholder="Password" required=""/>
					<button>Login</button>
				</form>
			</div>
	</div>

		</>
	);
}

export default App;
