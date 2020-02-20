import React, { useState, useEffect } from 'react'
import AddComment from '../Comments/AddComment'
import Comment from '../Comment/Comment'

const {
    Stitch,
    RemoteMongoClient,
    AnonymousCredential
  } = require('mongodb-stitch-browser-sdk');

const client = Stitch.initializeDefaultAppClient('blog-itpoe');

const db = client.getServiceClient(RemoteMongoClient.factory, 'blog-comments').db('blog');

const DisplayComments = (props) => {
    let [docs, setDocs] = useState(null)

    const getComments = () => {
        client.auth.loginWithCredential(new AnonymousCredential()).then(() =>
            db.collection('blogComments').find({owner_id: client.auth.user.id}, { limit: 100}).asArray()
        ).then(docs => {
              setDocs(docs)
        }).catch(err => {
            console.error(err)
        });
    }

    const deleteComment = (id) => {
        db.collection('blogComments').deleteOne({_id: id})
        .then(() => getComments())
    }

    useEffect(() => {
        getComments()
    }, [])

    return (
        <div>
            <h2 className="text-center m-3">Comments</h2>
            {docs && docs.map(doc => {
                return <Comment key={doc._id} delete={deleteComment} doc={doc} />
            })
            }
            <AddComment update={getComments} client={client} db={db} />
        </div>
    )
}

export default DisplayComments
