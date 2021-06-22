const Job = ({ job }) => {
  return (
    <div className='job'>
      <div class='meta'>
        <div class='upper-row'>
          <h3 class='job-title'>
            {job.position} - {job.company}
          </h3>
          <div class='job-date'>{job.date}</div>
        </div>

        <div class='job-place'>{job.place}</div>
      </div>

      <div class='job-detail'>
        <ul>
          <li>{job.detail}</li>
        </ul>
      </div>
    </div>
  );
};

export default Job;
