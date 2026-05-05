import { useState } from 'react';
import { Button, Modal } from 'react-bootstrap';

const MyModal = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button onClick={handleShow}>Launch Modal</Button>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton><Modal.Title>Modal</Modal.Title></Modal.Header>
        <Modal.Body>Body content</Modal.Body>
        <Modal.Footer>
          <Button onClick={handleClose}>Close</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default MyModal



// <!-- Button to Open the Modal -->
// <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#myModal">
//   Open modal
// </button>

// <!-- The Modal -->
// <div class="modal" id="myModal">
//   <div class="modal-dialog">
//     <div class="modal-content">

//       <!-- Modal Header -->
//       <div class="modal-header">
//         <h4 class="modal-title">Modal Heading</h4>
//         <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
//       </div>

//       <!-- Modal body -->
//       <div class="modal-body">
//         Modal body..
//       </div>

//       <!-- Modal footer -->
//       <div class="modal-footer">
//         <button type="button" class="btn btn-danger" data-bs-dismiss="modal">Close</button>
//       </div>

//     </div>
//   </div>
// </div>