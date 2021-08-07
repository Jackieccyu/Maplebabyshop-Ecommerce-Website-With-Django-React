import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Navbar, Nav, Container, Row, NavDropdown } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'
import SearchBox from './SearchBox'
import { logout } from '../actions/userActions'

function Header() {

    const userLogin = useSelector(state => state.userLogin)
    const { userInfo } = userLogin

    const dispatch = useDispatch()

    const logoutHandler = () => {
        dispatch(logout())
    }

    return (
        <header>
            <Navbar collapseOnSelect  bg="primary" variant="dark" expand="lg" >
                <Container>
                    <LinkContainer to='/'>
                        <Navbar.Brand>Maple Baby Shop</Navbar.Brand>
                    </LinkContainer>

                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    
                    <Navbar.Collapse id="basic-navbar-nav">
                        
                        <Nav className="me-auto">
    
                            <LinkContainer to='/cart'>
                                <Nav.Link ><i className="fas fa-shopping-cart"></i>購物車</Nav.Link>
                            </LinkContainer>

                            {userInfo ? (
                                <NavDropdown title={userInfo.name} id='username'>
                                    <LinkContainer to='/profile'>
                                        <NavDropdown.Item>訂單資料</NavDropdown.Item>
                                    </LinkContainer>

                                    <NavDropdown.Item onClick={logoutHandler}>登出</NavDropdown.Item>

                                </NavDropdown>
                            ) : (
                                    <LinkContainer to='/login'>
                                        <Nav.Link><i className="fas fa-user"></i>登入</Nav.Link>
                                    </LinkContainer>
                                )}


                            {userInfo && userInfo.isAdmin && (
                                <NavDropdown title='Admin' id='adminmenue'>
                                    <LinkContainer to='/admin/userlist'>
                                        <NavDropdown.Item>Users</NavDropdown.Item>
                                    </LinkContainer>

                                    <LinkContainer to='/admin/productlist'>
                                        <NavDropdown.Item>Products</NavDropdown.Item>
                                    </LinkContainer>

                                    <LinkContainer to='/admin/orderlist'>
                                        <NavDropdown.Item>Orders</NavDropdown.Item>
                                    </LinkContainer>

                                </NavDropdown>
                            )}
                        </Nav>
                       
                        <SearchBox />
                        
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </header>
    )
}

export default Header
