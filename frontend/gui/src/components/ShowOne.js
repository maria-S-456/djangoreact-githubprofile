import {useState, useEffect} from 'react'
import axios from 'axios'

const ShowOne = (props) => {
	const [profile, setProfile] = useState({})

	useEffect(() => {
    	axios.get('https://api.github.com/users/' + props.login)
    	.then((res) => setProfile(res.data))
    	.catch((err) => console.log(err))
	}, [])
  //console.log(props) 
	return(
		<>
		<p>Show One Profile!</p>
		<p>{profile.login}</p>
		<p>{profile.location}</p>
		</>
	)
}

export default ShowOne