import React, { useState } from 'react'
import { Form, Button } from 'react-bootstrap'

const AddComment = (props) => {
    let [comment, setComment] = useState('')
    let [name, setName] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault();
        const id = Number(Math.random().toString().substring(2));
        props.add(id, comment, name)
        setComment('')
        setName('')
    }

    return (
        <div>
            <hr />
            <Form onSubmit={handleSubmit}>
                <Form.Group controlId="comments">
                    <Form.Label><b>Add Comment</b></Form.Label>
                    <Form.Control
                        as='textarea'
                        value={comment}
                        required
                        onChange={(e) => setComment(e.target.value)}
                        placeholder='Enter new comment here..'
                        />
                </Form.Group>
                <Form.Group controlId="name">
                    <Form.Label><b>Name</b></Form.Label>
                    <Form.Control
                        as='input'
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder='Enter Display Name Here'
                        />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        </div>
    )
}

export default AddComment