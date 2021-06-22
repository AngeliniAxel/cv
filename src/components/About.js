const About = () => {
  return (
    <div className='about'>
      <h1 className='about-title'>CAREER PROFILE</h1>
      <p className='about-info'>
        Redirecting my career to programming. I made a FullStack developer
        course and, despite I don´t have experience in that field yet, I
        consider myself as a person with a great ability acquire new knowledge,
        through practice and dealing with colleagues who have more experience
        than me. And I have no doubt that, if you give me the opportunity to
        prove it, I will be able to adapt quickly to the way you work at your
        company. I have experience in Javascript (ES6), React, Redux, Node.js,
        Express.js, Postgresql, HTML5, CSS3, responsive design, Bootstrap, and
        I´m constantly learning. I can speak fluent in English. I enjoy teamwork
        and learning new things every day. Outside the scope of programming, I
        use my free time to workout, play videogames or read comics.
      </p>
      <h1 className='about-title'>EDUCATION</h1>
      <div class='meta'>
        <div class='upper-row'>
          <h3 class='job-title'>Programming Technician</h3>
          <div class='job-date'>2017 - 2018</div>
        </div>

        <div class='job-place'>
          Universidad Tecnologica Nacional (Argentina)
        </div>
      </div>

      <div class='job-detail'>
        <p>(Incomplete)</p>
      </div>
      <div class='meta'>
        <div class='upper-row'>
          <h3 class='job-title'>Full-Stack Engineer</h3>
          <div class='job-date'>2020 - 2021</div>
        </div>

        <div class='job-place'>
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

      <div class='job-detail'>
        <p>(In the final project)</p>
      </div>
    </div>
  );
};

export default About;
