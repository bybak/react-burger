import style from "./modal-overlay.module.css";
import {FC} from "react";
import {TModalOverlay} from "../../utils/types";

export const ModalOverlay: FC<TModalOverlay> = ({onClose}) => {
    return (
        <div onClick={onClose} className={style.backDrop}/>
    )
}
