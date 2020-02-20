import React, { useState } from 'react'
import classes from './Comment.module.css'
import axios from 'axios'

const Comment =(props) => {
    let [output, setOutput] = useState('')
    let [target, setTarget] = useState('')

    const translate = (input, target) => {
        // add api call here
    }

    return (
        <div className={classes.Comment}>
            <button className={classes.DeleteButton + " btn btn-sm btn-danger float-right"} onClick={() => props.delete(props.doc._id)}>X</button>
            <p className="font-weight-bold">{props.doc.owner_id}</p>
            <p>{props.doc.text}</p>
            {output &&
                <div>
                    <p className='font-italic'>{target}</p>
                    <p>{output}</p>
                </div>
            }
            <button onClick={() => translate(props.doc.text, 'es')} className={classes.TranslateButton + ' btn'}>Translate</button>
        </div>
    )
}

export default Comment