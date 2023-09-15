import React from 'react';

const Modal = ({ isOpen, onClose, children }) => {
  const modalClasses = isOpen
    ? 'fixed w-screen  mt-16 inset-0 flex  z-50 overflow-x-hidden overflow-y-scroll '
    : 'hidden';

  return (
    <div className={modalClasses}   role="dialog"
        aria-modal="true"
        aria-hidden={!isOpen}
    >
      <div onClick={onClose} className="modal-overlay fixed w-full h-full bg-gray-900 opacity-50 "></div>

      <div className="modal-container bg-white  w-11/12 mt-2 mb-2 md:max-w-md mx-auto rounded-md overflow-x-hidden shadow-lg z-50 overflow-y-scroll ov ">
          <button
            className="text-gray-500 hover:text-gray-700 float-right"
            onClick={onClose}
          >
            Close
          </button>
        <div className="modal-content  ">{children}</div>
        {/* <div className="modal-footer p-3"> */}
          
        {/* </div> */}
      </div>
    </div>
  );
};

export default Modal;