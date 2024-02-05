// Frontend code 
// Filename - App.js
// Filename - App.js

import { useState } from 'react'
function App() {
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [moblieNumber, setMobileNumber] = useState("");
	const handleOnSubmit = async (e) => {
		e.preventDefault();
		let result = await fetch(
			'http://127.0.0.1:5000/register', {
			method: "post",
			body: JSON.stringify({ name, email, moblieNumber }),
			headers: {
				'Content-Type': 'application/json'
			}
		})
		result = await result.json();
		console.warn(result);
		if (result) {
			alert("Data saved succesfully");
			setEmail("");
			setName("");
			setMobileNumber("");
		}
	}
	return (
		<>
	<div class="main">  	
		<input type="checkbox" id="chk" aria-hidden="true"/>

			<div class="signup">
				<form>
					<label for="chk" aria-hidden="true">Sign up</label>
					<input type="text" name="txt" placeholder="User name" required=""/>
					<input type="email" name="email" placeholder="Email" required=""/>
					<input type="password" name="pswd" placeholder="Password" required=""/>
					<button>Sign up</button>
				</form>
			</div>

			<div class="login">
				<form>
					<label for="chk" aria-hidden="true">Login</label>
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
