import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Navigation = () => {
	return (
		<Navbar className='navbar' collapseOnSelect fixed='top' expand='sm' variant='dark'>
			<Container>
				<Navbar.Brand className='text'>Axel Angelini</Navbar.Brand>

				<Navbar.Toggle aria-controls='responsive-navbar-nav' />
				<Navbar.Collapse id='responsive-navbar-nav' className='justify-content-end'>
					<Nav>
						<Link to='/'>About Me</Link>
						<Link to='/jobs'>Jobs</Link>
						<Link to='/portfolio'>portfolio</Link>
					</Nav>
				</Navbar.Collapse>
			</Container>
		</Navbar>
	);
};

export default Navigation;
