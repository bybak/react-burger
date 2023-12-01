import {FC, useRef} from "react";
import {useDispatch} from "react-redux";
import {deleteIngredient, moveIngredient} from "../../services/actions/burger-constructor";
import {useDrag, useDrop} from "react-dnd";
import style from "../burger-constructor-item/burger-constructor-item.module.css";
import {ConstructorElement, DragIcon} from "@ya.praktikum/react-developer-burger-ui-components";
import {TBurgerConstructorElement, TIngredientType} from "../../utils/types";
import { Identifier } from "dnd-core";

export const BurgerConstructorItem: FC<TBurgerConstructorElement> = ({element, id, index}) => {
    const ref = useRef(null)
    const dispatch = useDispatch()

    const moveCard = (start: number, end: number) => {
        dispatch(moveIngredient(start, end))
    }

    const deleteElement = (element: TIngredientType) => {
        dispatch(deleteIngredient(element))
    }

    const [{handlerId}, drop] = useDrop<
        {
            ingredient: TBurgerConstructorElement;
            index: number;
        },
        unknown,
        { handlerId: Identifier | null }
        >({
        accept: 'card',
        collect (monitor) {
            return {
                handlerId: monitor.getHandlerId()
            }
        },
        hover(item: {index: number}, monitor) {
            if (!ref.current) {
                return
            }

            const dragIndex = item.index
            const hoverIndex = index

            if (dragIndex === hoverIndex) {
                return
            }

            const rect: HTMLElement = ref.current
            const hoverBoundingRect = rect?.getBoundingClientRect()
            const hoverMiddleY = (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2
            const clientOffset = monitor.getClientOffset()
            const hoverClientY = clientOffset!.y - hoverBoundingRect.top

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
