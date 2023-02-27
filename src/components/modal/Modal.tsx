import React from 'react';
import './Modal.css';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

class Modal extends React.Component<ModalProps> {
  render() {
    const { isOpen, onClose, children } = this.props;

    return (
      <div className={`modal ${isOpen ? 'open' : ''}`}>
        <div className="modal-content">
          {children}
          <button className="modal-close" onClick={onClose}>
            Close
          </button>
        </div>
      </div>
    );
  }
}

export default Modal;