import React from 'react'
import { Nav } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'

function CheckoutSteps({ step1, step2, step3, step4 }) {

    return (
        <Nav className='justify-content-center mb-4'>
            <Nav.Item>
                {step1 ? (
                    <LinkContainer to='/login'>
                        <Nav.Link>登入</Nav.Link>
                    </LinkContainer>
                ) : (
                        <Nav.Link disabled>Login</Nav.Link>
                    )}
            </Nav.Item>

            <Nav.Item>
                {step2 ? (
                    <LinkContainer to='/shipping'>
                        <Nav.Link>訂單資料</Nav.Link>
                    </LinkContainer>
                ) : (
                        <Nav.Link disabled>訂單資料</Nav.Link>
                    )}
            </Nav.Item>

            <Nav.Item>
                {step3 ? (
                    <LinkContainer to='/payment'>
                        <Nav.Link>付款資訊</Nav.Link>
                    </LinkContainer>
                ) : (
                        <Nav.Link disabled>付款資訊</Nav.Link>
                    )}
            </Nav.Item>

            <Nav.Item>
                {step4 ? (
                    <LinkContainer to='/placeorder'>
                        <Nav.Link>訂單完成</Nav.Link>
                    </LinkContainer>
                ) : (
                        <Nav.Link disabled>訂單完成</Nav.Link>
                    )}
            </Nav.Item>
        </Nav>
    )
}

export default CheckoutSteps
