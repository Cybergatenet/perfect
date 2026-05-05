import React, { useState } from 'react'
import Header from '../Header'
import Users from '../../controllers/UserController'
import { Modal, Button } from 'react-bootstrap'

const Dashboard = () => {
  const [id, setId] = useState('');
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [userId, setUserId] = useState('');  
  const [show, setShow] = useState(false)

  const handleShow = () => setShow(true)
  const handleClose = () => setShow(false)

  const handleSubmit = () => {


    handleClose()
  }

  return (
    <>
    <Header/>
    <div className="row mt-3">
      <h1 className='col-8'>Welcome to Dashboard page</h1>
      <button className='btn btn-sm col-2 btn-primary' onClick={handleShow}>Add Post</button>
    </div>
    <Users />

    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
          <Modal.Title>Create Post</Modal.Title>
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

    </>
  )
}

export default Dashboard
