const Job = ({ job }) => {
	return (
		<div className='job-container'>
			<h4>{job.company}</h4>
			<p>
				{job.date} - {job.place}
			</p>

			<h5>{job.position} </h5>
		</div>
	);
};

export default Job;
