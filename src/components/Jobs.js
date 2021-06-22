import Job from './Job';
import { experienceArray } from '../helpers/experience';

const Jobs = () => {
  return (
    <div className='jobs'>
      <h1 className='jobs-title'>EXPERIENCE</h1>
      {experienceArray.map((item, index) => (
        <Job job={item} key={index} />
      ))}
    </div>
  );
};

export default Jobs;
