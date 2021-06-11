const Result = ({result}) => {
	console.log(result)
	if(result){
		return(
			<>
				<h2>{result.name}</h2>
				{Object.keys(result).map((item) =>
					item !== "login" ? (
						<div>
							<p>{item}</p>
							<p>{result[item]}</p>
						</div>
					) : null
				)}
			</>
		)
	} else{
		return <></>
	}
}
export default Result