import React, { useState } from 'react'
import { Button, Form } from 'react-bootstrap'
import { useHistory } from 'react-router-dom'
// useHistory是用來訪問網站內部的component

function SearchBox() {
    const [keyword, setKeyword] = useState('')

    let history = useHistory()

    const submitHandler = (e) => {
        e.preventDefault()
        if (keyword) {
            history.push(`/?keyword=${keyword}&page=1`)
        } else {
            history.push(history.push(history.location.pathname))
        }
    }
    return (
        <Form  className='d-flex' onSubmit={submitHandler} inline>
            <Form.Control
                type='text'
                name='q'
                onChange={(e) => setKeyword(e.target.value)}
                className='form-control me-sm-2'
            ></Form.Control>

            <Button
                type='submit'
                variant='dark'
                className='p-2'
            >
                Submit
            </Button>
        </Form>
    )
}

export default SearchBox
