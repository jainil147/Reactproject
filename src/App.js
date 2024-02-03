// Frontend code 
// Filename - App.js
// Filename - App.js

import { useState } from 'react'
function App() {
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [moblieNumber , setMobileNumber] = useState("");
	const handleOnSubmit = async (e) => {
		e.preventDefault();
		let result = await fetch(
		'http://127.0.0.1:5000/register', {
			method: "post",
			body: JSON.stringify({ name, email ,moblieNumber}),
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
			<h1>This is React WebApp </h1>
			<form action="">
				<input type="text" placeholder="name"
				value={name} onChange={(e) => setName(e.target.value)} />
				<input type="email" placeholder="email"
				value={email} onChange={(e) => setEmail(e.target.value)} />
				<input type="number" placeholder="Mobile Number"
				value={moblieNumber} onChange={(e) => setMobileNumber(e.target.value)} />
				

				<button type="submit"
				onClick={handleOnSubmit}>submit</button>
			</form>

		</>
	);
}

export default App;
