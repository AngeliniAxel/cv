import { Button, Card, ButtonGroup } from 'react-bootstrap';

const Portfolio = () => {
  return (
    <div className='portfolio'>
      <Card className='card'>
        <Card.Img variant='top' src='./media/reddit.jpg' />
        <Card.Body>
          <Card.Title>Reddit Minimal</Card.Title>
          <Card.Text>
            Frontend project built using React, Redux, HTML and CSS
          </Card.Text>
          <ButtonGroup>
            <Button
              className='button'
              href='https://redditminimal.netlify.app/'
              target='_blank'
              rel='noreferrer'
            >
              Live Demo
            </Button>
            <Button
              className='button'
              href='https://github.com/AngeliniAxel/reddit-minimal'
              target='_blank'
              rel='noreferrer'
            >
              Code
            </Button>
          </ButtonGroup>
        </Card.Body>
      </Card>

      <Card>
        <Card.Img variant='top' src='./media/ecommerce.jpg' />
        <Card.Body>
          <Card.Title>
            E-commerce App <span className='in-progress'>(in progress)</span>{' '}
          </Card.Title>
          <Card.Text>
            Full-stack project built using PERN technologies (React, Node.js,
            Express.js and PostgreSQL)
          </Card.Text>
          <ButtonGroup>
            {/* <Button
              className='button'
              href=''
              target='_blank'
              rel='noreferrer'
            >
              Live Demo
            </Button> */}
            {/* <Button className='button' href='' target='_blank' rel='noreferrer'>
              Code
            </Button> */}
          </ButtonGroup>
        </Card.Body>
      </Card>

      <Card>
        <Card.Img variant='top' src='./media/cv.jpg' />
        <Card.Body>
          <Card.Title>Curriculum</Card.Title>
          <Card.Text>This exact cv page was built using React!</Card.Text>
          <ButtonGroup>
            <Button className='button' href='' target='_blank' rel='noreferrer'>
              See the code!
            </Button>
          </ButtonGroup>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Portfolio;
