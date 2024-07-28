const Info = () => {
  return (
    <div className='info'>
      <img src='./media/avatar.jpeg' alt='profile'></img>
      <h3>Full Stack Developer</h3>

      <ul className='contact'>
        <h4>Contact</h4>
        <li>
          <i className='far fa-envelope'></i>
          <a href='mailto:axel.angelini@gmail.com'> axel.angelini@gmail.com</a>
        </li>
        <li>
          <i className='fab fa-linkedin'></i>
          <a
            href='https://www.linkedin.com/in/angeliniaxel/'
            target='_blank'
            rel='noreferrer'
          >
            {' '}
            LinkedIn
          </a>
        </li>
        <li>
          <i className='fab fa-github'></i>
          <a
            href='https://github.com/AngeliniAxel'
            target='_blank'
            rel='noreferrer'
          >
            {' '}
            GitHub
          </a>
        </li>
        <li>
          <i class='fas fa-phone'></i> +34 644 299 361
        </li>
      </ul>

      <ul className='languages'>
        <h4>Languages</h4>
        <li>
          English <span className='lang-desc'>(Fluent)</span>
        </li>
        <li>
          Spanish <span className='lang-desc'>(Native)</span>
        </li>
      </ul>

      <ul className='interests'>
        <h4>Interests</h4>
        <li>Videogames</li>
        <li>Musical instruments</li>
        <li>Books and comics</li>
      </ul>
    </div>
  );
};

export default Info;
