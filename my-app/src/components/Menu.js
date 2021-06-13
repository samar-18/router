import React from 'react';
import { Nav,Navbar,Form,FormControl,Button } from 'react-bootstrap';
function Menu({setSearch}){
    const HandleCange=(e)=>{
        setSearch(e.target.value);
    }
return(
<>
<Navbar bg="light" variant="light">
<Navbar.Brand href="#home">Movie App</Navbar.Brand>
<Nav className="mr-auto">
  <Nav.Link href="/">Home</Nav.Link>
  <Nav.Link href="#features">
Movies
  </Nav.Link>
  <Nav.Link href="#pricing">Pricing</Nav.Link>
</Nav>
<Form inline>
  <FormControl type="text" placeholder="Search" className="mr-sm-2" onChange={HandleCange}/>
  <Button variant="outline-primary" href=''>Search</Button>
</Form>
</Navbar>
</>
)}
export default Menu;