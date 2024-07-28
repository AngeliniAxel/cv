const About = () => {
  return (
    <div className='about'>
      <h1 className='about-title'>
        <i class='fas fa-address-card'></i> CAREER PROFILE
      </h1>
      <p>
        I’m a Full Stack developer specialized in JavaScript (JS - TS - React -
        Node - PostgreSQL) looking for an opportunity to prove that I'm a hard
        worker, passionate about learning new things every day and overcoming my
        limits.
        <br />
        <br />
        While I'm looking for my first developer job, I'm also studying an
        advanced course focused mostly on Front-End development at
        digitalhouse.com to further enhance my skills. This course covers
        advanced React-Redux with TypeScript, design patterns with Styled
        Components, Next.js, testing with Jest and Cypress, scalable database
        architectures with SQL and MongoDB, and automated testing.
        <br />
        <br />
        I studied for two years in a programming degree at UTN (Universidad
        Tecnológica Nacional, Buenos Aires) and then improved my skills through
        online courses (mostly a full-stack course on codecademy.com). I have
        experience in JavaScript (ES6), TypeScript, React, Redux, Node.js,
        Express.js, PostgreSQL, HTML5, CSS3, responsive design, Bootstrap, and
        every day I try to learn new things.
        <br />
        <br />
        During the last year, I didn't actively seek programming-related jobs
        because I dedicated myself to traveling in Australia and improving my
        English proficiency. Despite that, I always used my free time to
        continue learning. Nowadays, I find myself more settled, living in
        Menorca, and seeking a company where I can learn and grow.
        <br />
        <br />I consider myself a quick learner who benefits greatly from
        teamwork alongside colleagues with more experience than me, and I have
        no doubt that I can adapt very quickly to your way of working.
        <br />
        <br />
        Outside the scope of programming, I use my free time to work out, play
        videogames or read comics.
        <br />
      </p>
      <h1 className='about-title'>
        <i class='fas fa-university'></i> EDUCATION
      </h1>
      <div className='meta'>
        <div className='upper-row'>
          <h3 className='job-title'>Advanced Front-End Development</h3>
          <div className='job-date'>2024</div>
        </div>

        <div className='job-place'>
          <a
            className='Codecademy'
            href='https://www.digitalhouse.com/ar/productos/programacion/front-end-developer'
            target='_blank'
            rel='noreferrer'
          >
            DigitalHouse
          </a>
        </div>
      </div>

      <div className='meta'>
        <div className='upper-row'>
          <h3 className='job-title'>Full-Stack Engineer</h3>
          <div className='job-date'>2020 - 2021</div>
        </div>

        <div className='job-place'>
          <a
            className='Codecademy'
            href='https://www.codecademy.com/learn/paths/full-stack-engineer-career-path'
            target='_blank'
            rel='noreferrer'
          >
            Codecademy
          </a>
        </div>
      </div>

      <div className='meta'>
        <div className='upper-row'>
          <h3 className='job-title'>Programming Technician</h3>
          <div className='job-date'>2017 - 2018</div>
        </div>

        <div className='job-place'>
          <a
            className='Codecademy'
            href='https://utn.edu.ar/es/'
            target='_blank'
            rel='noreferrer'
          >
            Universidad Tecnologica Nacional (Argentina)
          </a>
        </div>
        <br />
      </div>

      <div className='job-detail'></div>
    </div>
  );
};

export default About;
