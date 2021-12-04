import React from "react";

function Dashboard () {
    const [show, setModel] = useState(false)
 

  function showModal () {
    setShow( true );
  };

  function hideModal () {
    setShow(false);
  };
    return (
      <div>
        <Modal show={show} handleClose={hideModal}>
          <p>Modal</p>
        </Modal>
        <button type="button" onClick={showModal}>
        edit
        </button>
      </div>
    );
  }

export default Dashboard