import {useState, useEffect} from 'react'
import axios from 'axios'
import {Link} from '@reach/router'

const ShowAll = props => {
	// Mapping out all github user names
	const [profiles, setProfiles] = useState([])

	useEffect(() => {
    const fetchProfiles = async () => {
      const {data} = await axios.get('https://api.github.com/users')
      setProfiles(data)
    }
    fetchProfiles()
  }, []) 

	return(
		<>
		<p>Show All Profiles!</p>
		{profiles.map((obj, index) =>{
          return (
            <p key={`${obj.id}`}>
            	<Link to={"/showone/" + obj.login}>{obj.login}</Link>
            </p>
          )})}
		</>
	)
}

export default ShowAll