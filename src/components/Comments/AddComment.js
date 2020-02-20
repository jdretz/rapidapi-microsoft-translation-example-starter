import React, { useState } from 'react'
import { Form, Button } from 'react-bootstrap'

const AddComment = (props) => {
    let [comment, setComment] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault();

        props.db.collection('blogComments').insertOne({
            owner_id: props.client.auth.user.id,
            text: comment
        })
        .then(() => {
            setComment('')
            props.update()
        })
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
                        onChange={(e) => setComment(e.target.value)}
                        placeholder='Enter new comment here..'
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