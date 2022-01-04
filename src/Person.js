function Person(props) {
	return (
		<div>
		<img src={props.herimg} alt="photo" width="300px"/>
		<h2>{props.hername}</h2>
		<p>{props.herage}</p>
		<p>{props.city}</p>
		</div>

	)
	
}

export default Person;