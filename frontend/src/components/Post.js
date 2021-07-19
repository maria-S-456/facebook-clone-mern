import {Card, Button, Collapse} from 'react-bootstrap'
import {useState} from 'react'

const Post = ({message}) => {
	const [open, setOpen] = useState(false);

	return (
		<Card className='my-3 p-3 rounded'>
			<Card.Body>
				<Card.Subtitle className="mb-2 text-muted">{message.user}</Card.Subtitle>
				<Card.Text> {message.message}</Card.Text>
				<Card.Footer>
					<Button
        				onClick={() => setOpen(!open)}
        				aria-controls="example-collapse-text"
        				aria-expanded={open}
     					>
        				Comments
      				</Button>
					<Collapse in={open}>
					<div id="example-collapse-text">
					{message.comments.map(comment => (
						<>
						<p className="text-muted">{comment.user}</p>
						<p>{comment.message}</p>
						</>
						 ))}
					</div>
					</Collapse>
				</Card.Footer>
			</Card.Body>			
		</Card>
	)
}
export default Post