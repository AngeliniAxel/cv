import { Navbar, Nav, Container } from 'react-bootstrap';

const Navigation = () => {
	return (
		<Navbar className='navbar' collapseOnSelect fixed='top' expand='sm' variant='dark'>
			<Container>
				<Navbar.Brand className='text'>Axel Angelini</Navbar.Brand>

				<Navbar.Toggle aria-controls='responsive-navbar-nav' />
				<Navbar.Collapse id='responsive-navbar-nav' className='justify-content-end'>
					<Nav>
						<Nav.Link href='/'>About Me</Nav.Link>
						<Nav.Link href='/jobs'>Jobs</Nav.Link>
						<Nav.Link href='/portfolio'>Portfolio</Nav.Link>
					</Nav>
				</Navbar.Collapse>
			</Container>
		</Navbar>
	);
};

export default Navigation;
