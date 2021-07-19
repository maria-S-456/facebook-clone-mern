import messages from '../Messages'
import {Row, Col} from 'react-bootstrap'
import Post from '../components/Post'
import {useState, useEffect} from 'react'
import axios from 'axios'

const Main = () => {

	const [posts, setPosts] = useState([]);

	useEffect(() =>{ 
		axios
		.get("http://localhost:8000/api/posts")
		.then((res) => setPosts(res.data))
		.catch((err) => console.log(err));
	})
	return(
		<>
			<h1>All Posts</h1>
			<Row>
				{posts.map(message => (
					<Post message={message} />
				))}
			</Row>
		</>
	)
}
export default Main