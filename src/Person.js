function Person(props) {
	return (
		<div className="box">
		<img src={props.herimg} alt="photo" width="200px"/>
		<h2>{props.hername}</h2>
		<p>{props.herage}</p>
		<p>{props.city}</p>
		</div>

	)
	
}

export default Person;