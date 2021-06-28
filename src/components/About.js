const About = () => {
  return (
    <div className='about'>
      <h1 className='about-title'>
        <i class='fas fa-address-card'></i> CAREER PROFILE
      </h1>
      <p className='about-info'>
        Redirecting my career to programming. I took a FullStack developer
        course and despite not having experience working in that field yet, I
        consider myself a person with a great ability to acquire new knowledge,
        through practice and learning from colleagues who have more experience
        than me. I have no doubt that if you give me the opportunity to prove
        it, I will be able to adapt quickly to the way you work at your company.
        I have experience in Javascript (ES6), React, Redux, Node.js,
        Express.js, Postgresql, HTML5, CSS3, responsive design, Bootstrap, and
        I’m constantly learning. I can speak fluently in English. I enjoy
        working in a team and learning new things every day. Outside the scope
        of programming, I use my free time to work out, play videogames or read
        comics.
      </p>
      <h1 className='about-title'>
        <i class='fas fa-university'></i> EDUCATION
      </h1>
      <div className='meta'>
        <div className='upper-row'>
          <h3 className='job-title'>Programming Technician</h3>
          <div className='job-date'>2017 - 2018</div>
        </div>

        <div className='job-place'>
          Universidad Tecnologica Nacional (Argentina)
        </div>
      </div>

      <div className='job-detail'>
        <p>(Incomplete)</p>
      </div>
      <div className='meta'>
        <div className='upper-row'>
          <h3 className='job-title'>Full-Stack Engineer</h3>
          <div className='job-date'>2020 - 2021</div>
        </div>

        <div className='job-place'>
          <a
            className='codecademy'
            href='https://www.codecademy.com'
            target='_blank'
            rel='noreferrer'
          >
            Codecademy
          </a>
        </div>
      </div>

      <div className='job-detail'>
        <p>(In the final project)</p>
      </div>
    </div>
  );
};

export default About;
