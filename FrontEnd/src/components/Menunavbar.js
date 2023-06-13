import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

const Menunavbar = () => {
  return (
  <Container>
    <Navbar className="Container bg-light">
        <Navbar.Brand href="#">Farmers</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <FontAwesomeIcon icon={faBars} style={{ color: "#fff" }} />
        </button>
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}username
            navbarScroll
          >
          <div className="collapse navbar-collapse mx-5" id="navbarSupportedContent">
            <ul className="navbar-nav ml-auto">
             <li className="nav-item active">
               <a className="nav-link" href="#">Solutions </a>
             </li>
             <li className="nav-item">
               <a className="nav-link" href="#">Our community</a>
             </li>
             <li className="nav-item">
               <a className="nav-link" href="#">Testimonies</a>
             </li>
             <li className="nav-item">
              <a className="nav-link" href="#">Contacts</a>
             </li>
           </ul>
         </div>
          <div className="d-flex ">
            <Button className="mx-4" variant="outline-success">Login</Button>
            <Button variant="success">SignUp</Button>
          </div>
          </Nav>
        </Navbar.Collapse>
    </Navbar>  
  </Container>    

    //  <nav className="navbar navbar-expand-lg navbar-light bg-dark" >
    //   <div className="container">
    //     <a className="navbar-brand" href="#"><span className="logo"><b>ChrisAfrotech</b></span></a>
    //     <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    //       <FontAwesomeIcon icon={faBars} style={{ color: "#fff" }} />
    //     </button>

    //     <div className="collapse navbar-collapse" id="navbarSupportedContent">
    //       <ul className="navbar-nav ml-auto">
    //         <li className="nav-item active">
    //           <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
    //         </li>
    //         <li className="nav-item">
    //           <a className="nav-link" href="#">about me</a>
    //         </li>
    //         <li className="nav-item">
    //           <a className="nav-link" href="#">services</a>
    //         </li>
    //         <li className="nav-item">
    //           <a className="nav-link" href="#">experiences</a>
    //         </li>
    //         <li className="nav-item">
    //           <a className="nav-link" href="#">portfolio</a>
    //         </li>

    //         <li className="nav-item">
    //           <a className="nav-link" href="#">contacts</a>
    //         </li>

    //       </ul>

    //     </div>

    //   </div>
    // </nav>

  )
}

export default Menunavbar