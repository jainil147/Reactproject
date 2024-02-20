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
			<form onSubmit={handleOnSubmit} action="POST">
			<label htmlFor="chk" aria-hidden="true">Sign up</label>
				<input name = "name" type="text" placeholder="User Name" required
				value={name} onChange={(e) => setName(e.target.value)} />
				<input type="email" placeholder="email" required
				value={email} onChange={(e) => setEmail(e.target.value)} />

				<input type="tel" placeholder="123-45-678" 	required
				value={moblieNumber} name="moblieNumber" onChange={(e) => setMobileNumber(e.target.value)} pattern="\+?[0-9]{10}" />

				<input type="password" placeholder="Enter the Password" required
				value={password} onChange={(e) => setPassword(e.target.value)} />
				

				<input type="submit" id='button' name="Submit"  value="Register" />
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
