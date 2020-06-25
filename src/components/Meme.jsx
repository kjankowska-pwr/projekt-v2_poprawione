import React, {useState} from "react";


const Meme = ({title, img, alt, upvotes=0, downvotes=0}) => {

	const [upVote, setUpVote] = useState(upvotes)
	const [downVote, setDownVote] = useState(downvotes)

	const handleUpVote = () => {
		setUpVote(upVote + 1)
	}

	const handleDownVote = () => {
		setDownVote(downVote + 1)

	}

	return (
		<div className="meme">
			<h2>{title}</h2>
			<p><img src={img} alt={alt}/>
			<br></br>
			<button onClick={handleUpVote} class="upVote">Lubię - {upVote}</button>
			<button onClick={handleDownVote} class="downVote">Nie lubię - {downVote}</button>
			</p>
			<hr></hr>
		</div>
	)
}


export default Meme