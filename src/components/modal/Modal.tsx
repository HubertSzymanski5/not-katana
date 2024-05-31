import React from 'react';
import {useState, useRef, useEffect} from 'react';
import './Modal.css'

interface Props {
  isOpen: boolean;
  hasClosedBtn?: boolean;
  onClose?: () => void;
  children: React.ReactNode;
}

const Modal = ({isOpen, hasClosedBtn, onClose, children}: Props) => {
  const [isModalOpen, setIsModalOpen] = useState(isOpen)
  const modalRef = useRef<HTMLDialogElement | null>(null);

  useEffect(() => {
    if (isOpen) {
      setIsModalOpen(isOpen)
    }
  }, [isOpen]);

  useEffect(() => {
    const modalElement = modalRef.current;
    if (modalElement) {
      if (isModalOpen) {
        modalElement.showModal();
      } else {
        modalElement.close();
      }
    }
  }, [isModalOpen]);

  const handleCloseModal = () => {
    if (onClose) {
      onClose();
    }
    setIsModalOpen(false);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Escape" || e.key === "Enter") {
      handleCloseModal();
    }
  }

  return (
    <dialog ref={modalRef} className="modal" onKeyDown={handleKeyDown}>
      {hasClosedBtn && (
        <button className="modal-close-btn" onClick={handleCloseModal}>x</button>
      )}
      {children}
    </dialog>
  )
}

export default Modal;