import {useRef} from "react";
import {useDispatch} from "react-redux";
import {deleteIngredient, moveIngredient} from "../../services/actions/burger-constructor";
import {useDrag, useDrop} from "react-dnd";
import style from "../burger-constructor-item/burger-constructor-item.module.css";
import {ConstructorElement, DragIcon} from "@ya.praktikum/react-developer-burger-ui-components";
import { PropTypes } from 'prop-types';
import { ingredientsPropTypes } from '../../utils/propTypes';

export function BurgerConstructorItem({element, id, index}) {
    const ref = useRef(null)
    const dispatch = useDispatch()

    const moveCard = (start, end) => {
        dispatch(moveIngredient(start, end))
    }

    const deleteElement = (element) => {
        dispatch(deleteIngredient(element))
    }

    const [{handlerId}, drop] = useDrop({
        accept: 'card',
        collect (monitor) {
            return {
                handlerId: monitor.getHandlerId()
            }
        },
        hover(item, monitor) {
            if (!ref.current) {
                return
            }

            const dragIndex = item.index
            const hoverIndex = index

            if (dragIndex === hoverIndex) {
                return
            }

            const hoverBoundingRect = ref.current?.getBoundingClientRect()
            const hoverMiddleY = (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2
            const clientOffset = monitor.getClientOffset()
            const hoverClientY = clientOffset.y - hoverBoundingRect.top

            if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) {
                return
            }

            if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) {
                return
            }

            moveCard(dragIndex, hoverIndex)
            item.index = hoverIndex
        }
    })
    const [{isDragging}, drag] = useDrag({
        type: 'card',
        item: () => {
            return {id, index}
        },
        collect: (monitor) => ({
            isDragging: monitor.isDragging()
        })
    })

    const opacity = isDragging ? 0 : 1

    drag(drop(ref))

    return (
        <div style={{...style, opacity}} className={style.saucesAndMainItem} key={element.id} ref={ref} data-handler-id={handlerId}>
            <DragIcon type="primary"/>
            <div className={`${style.constructorElementContainer} pr-1 pl-1`}>
                <ConstructorElement
                    handleClose={() => deleteElement(element)}
                    text={element.name}
                    price={element.price}
                    thumbnail={element.image}
                />
            </div>
        </div>
    )
}

BurgerConstructorItem.propTypes = {
    element: ingredientsPropTypes.isRequired,
    id: PropTypes.string.isRequired,
    index: PropTypes.number.isRequired,
}
