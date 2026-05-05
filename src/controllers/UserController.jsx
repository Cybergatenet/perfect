import React, { useState, useEffect } from 'react'
import axios from 'axios'
// import MyModal from '../components/MyModel'
import { Button, Modal } from 'react-bootstrap'

const UserController = () => {
    const [posts, setPosts] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)
    const [show, setShow] = useState(false);
    const [id, setId] = useState('');
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [userId, setUserId] = useState('');  

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const handleSubmit = () => {
        // handle submit by calling the API
        // console.log(id, title, body, userId);
        const url = "https://jsonplaceholder.typicode.com/posts/"+id
        axios.put(url, JSON.stringify({id, title, body, userId}), {
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
        .then(response => {
            console.log(response.data);
        })


        handleClose()
    }

    useEffect(() => {
        axios.get("https://jsonplaceholder.typicode.com/posts")
        .then(response => {
            // console.log(response.data)
            setPosts(response.data)
            setLoading(false)
        })
    }, [])
    // console.log(posts);

    const handleEdit = (post) => {
        // alert(post.id)
        setId(post.id)
        setTitle(post.title)
        setBody(post.body)
        setUserId(post.userId)

        handleShow();
    } 

    const handleDelete = (id) => {
        const answer = confirm("Delete this Post?")
        if(answer) {
            // make API Call
            alert("Post Deleted")
        }else{
            alert("Well Done")
        }
    }


    if(loading) return <p>loading...</p>
    if(error) return <p>{setError("Unable to code...")}</p>

    return (
        <div className='container' style={{ width: "80%", margin: "10px auto" }}>
            <table className='table table-hover'>
                <thead>
                    <tr className='bg-primary'>
                        <th>Post ID</th>
                        <th>Post Title</th>
                        <th>Post Body</th>
                        <th>User ID</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {posts.length > 1 && posts.map((post) => [
                        <tr id={post.id}>
                            <td>{post.id}</td>
                            <td>{post.title}</td>
                            <td>{post.body}</td>
                            <td>{post.userId}</td>
                            <td>
                                <button className='btn btn-sm btn-warning' onClick={() => handleEdit(post)} id={post.id}>Edit</button>
                                <button className='btn btn-sm btn-danger' onClick={handleDelete}  id={post.id}>Delete</button>
                            </td>
                        </tr>
                    ])                        
                        // posts.forEach((post) => {
                        //     // console.log(post);
                        //     <tr id={post.id}>
                        //         <td>{post.id}</td>
                        //         <td>{post.title}</td>
                        //         <td>{post.body}</td>
                        //         <td>{post.userId}</td>
                        //     </tr>
                        // })
                    }
                    
                </tbody>
                <tfoot>

                </tfoot>
            </table>
            {/* Modal box here */}

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Edit Post</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <input type="hidden" name="id" onChange={e => setId(e.target.value)} value={id} />
                    <label htmlFor="title">Title</label>
                    <input type="text" className='form-control' value={title} onChange={e => setTitle(e.target.value)} />
                    <label htmlFor="body">Content</label>
                    <textarea className='form-control' onChange={e => setBody(e.target.value)} value={body}></textarea>
                    <label htmlFor="userId">User ID</label>
                    <input type="number" value={userId} onChange={e => setUserId(e.target.value)} className='form-control' />
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={handleClose}>Close</Button>
                    <Button onClick={handleSubmit}>Submit</Button>
                </Modal.Footer>
            </Modal>
        </div>
    )
}

export default UserController
