import Job from './Job';
import { experienceArray } from '../helpers/experience';

const Jobs = () => {
	return (
		<div className='jobs'>
			{experienceArray.map((item, index) => (
				<Job job={item} key={index} />
			))}
		</div>
	);
};

export default Jobs;
