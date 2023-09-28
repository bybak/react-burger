import ReactDOM from "react-dom";
import React from 'react'
import style from './modal.module.css'
import { CloseIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import {ModalOverlay} from "../modalOverlay/modal-overlay";
import {ingredientsPropTypes} from "../../utils/propTypes";
import PropTypes from "prop-types";

const modalRoot = document.getElementById('react-modals')

export function Modal({header, children, onClose}) {
    React.useEffect(() => {
        const keyDown = (event) => {
            if (event.key === 'Escape') {
                onClose();
            }
        }

        document.addEventListener('keydown', keyDown)

        return () => {
            document.removeEventListener('keydown', keyDown)
        }
    }, [])

    return ReactDOM.createPortal(
        <>
            <ModalOverlay onClose={onClose}/>
            <div className={`${style.modal} p-10`}>
                <div className={style.header}>
                    <div className="text text_type_main-large">{header}</div>
                    <div className={style.closeButtonContainer}><CloseIcon type="primary" onClick={onClose}/></div>
                </div>
                {children}
            </div>
        </>,
        modalRoot
    )
}

Modal.propTypes = {
    header: PropTypes.string.isRequired,
    onClose: PropTypes.func.isRequired,
    children: PropTypes.node.isRequired
}
