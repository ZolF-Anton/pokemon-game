import React from 'react';
import { useRef, useEffect } from 'react';
import s from './modal.module.css';
import cn from 'classnames';

const Modal = ({ title, children, onCloseModal, isOpen }) => {
    const modalEl = useRef();

    useEffect(() => {
        document.querySelector('body').style.overflow = isOpen ? 'hidden' : null;
    }, [isOpen]);

    const handleCloseModal = () => {
        onCloseModal && onCloseModal(false);
    };
    const handleClickRoot = (event) => {
        if (!modalEl.current.contains(event.target)) {
            handleCloseModal();
        }
    };
    return (
        <div onClick={handleClickRoot} className={cn(s.root, { [s.open]: isOpen })}>
            <div ref={modalEl} class={s.modal}>
                <div className={s.head}>
                    {title}
                    <span className={s.btnClose} onClick={handleCloseModal}></span>
                </div>
                <div className={s.content}>{children}</div>
            </div>
        </div>
    );
};

export default Modal;
