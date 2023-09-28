import style from "./modal-overlay.module.css";
import PropTypes from "prop-types";

export function ModalOverlay ({onClose}) {
    return (
        <div onClick={onClose} className={style.backDrop}/>
    )
}

ModalOverlay.propTypes = {
    onClose: PropTypes.func.isRequired
}
