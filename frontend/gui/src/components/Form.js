import axios from 'axios'
import {navigate} from '@reach/router'
import {useState} from 'react'

const Form = ({setResult}) => {
	const [id, setId] = useState("")

	const findUser = e => {
		e.preventDefault()
		axios.get(`https://api.github.com/users/${id}`)
		.then((data) => {
			console.log(data.data)
			setResult(data.data)
			navigate(`/${id}`)
		})
		.catch((err) => {
			navigate("/obiwan")
		})
	}
	return (
		<form id="userForm" onSubmit={findUser}>
			<input type="text" onChange={(e) => setId(e.target.value)} name="user" />
			<button type="submit">Find User</button>
		</form>
	)
}
export default Form