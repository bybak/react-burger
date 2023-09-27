import style from "./modal-overlay.module.css";

export function ModalOverlay ({onClose}) {
    return (
        <div onClick={onClose} className={style.backDrop}/>
    )
}
