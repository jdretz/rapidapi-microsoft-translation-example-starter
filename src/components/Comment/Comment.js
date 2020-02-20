import React, { useState } from 'react'
import classes from './Comment.module.css'

const Comment =(props) => {
    // add translate function here

    return (
        <div className={classes.Comment}>
            <button className={classes.DeleteButton + " btn btn-sm btn-danger float-right"} onClick={() => props.delete(props.comment.owner_id)}>X</button>
            <p className="font-weight-bold">{props.comment.name ? props.comment.name : props.comment.owner_id}</p>
            <p>{props.comment.comment}</p>
            {/* add translation functionality here */}
        </div>
    )
}

export default Comment