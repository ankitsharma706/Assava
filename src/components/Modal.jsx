import { useState } from "react";

function Modal() {
  const [showModal, setShowModal] = useState(false);

  const MyModal = () => {
    return (
      <>
        {/* <CategoryBox/> */}
        <button onClick={() => setShowModal(false)}>Close</button>
      </>
    );
  };
  return (
    <>
      <button onClick={() => setShowModal(true)}>Open Modal</button>
      {showModal && <MyModal />}
    </>
  );
}

export default Modal;
