import style from './burger-ingredients-sets.module.css'
import {BurgerIngredientsSet} from "../burger-ingredients-set/burger-ingredients-set";
import {useDispatch, useSelector} from "react-redux";
import {useEffect, useRef} from "react";
import {setActiveTab} from "../../services/actions/burger-ingredients-scroll";

export function BurgerIngredientsSets() {
    const dispatch = useDispatch()
    const scroll = useSelector((state: any) => state.scrollIngredients.scroll)

    const bunRef = useRef<HTMLParagraphElement>(null)
    const sauceRef = useRef<HTMLParagraphElement>(null)
    const mainRef = useRef<HTMLParagraphElement>(null)
    const scrollRef = useRef<HTMLParagraphElement>(null)

    useEffect(() => {
        let ref = bunRef
        if (scroll === 'sauce') {
            ref = sauceRef
        }
        if (scroll === 'main') {
            ref = mainRef
        }

        ref.current?.scrollIntoView({behavior: 'smooth'})
    }, [scroll])

    useEffect(() => {
        const headings = [
            bunRef.current,
            sauceRef.current,
            mainRef.current
        ]

        const observer = new IntersectionObserver((headings: IntersectionObserverEntry[]) => {
            headings.forEach(heading => {
                if (heading.target === bunRef.current) {
                    dispatch(setActiveTab('bun'))
                }
                if (heading.target === sauceRef.current) {
                    dispatch(setActiveTab('sauce'))
                }
                if (heading.target === mainRef.current) {
                    dispatch(setActiveTab('main'))
                }
            })
        },
        {
            root: scrollRef.current,
            rootMargin: '0px 0px -90% 0px'
        })

        headings.forEach(heading => observer.observe(heading!))
    }, [dispatch])

    return (
        <div className={style.sets} ref={scrollRef}>
            <div id="bun" className="text text_type_main-medium" ref={bunRef}>Булки</div>
            <div className={style.list}>
                <BurgerIngredientsSet type='bun'/>
            </div>
            <div id="sauce" className="pt-10 text text_type_main-medium" ref={sauceRef}>Соусы</div>
            <div className={style.list}>
                <BurgerIngredientsSet type='sauce'/>
            </div>
            <div id="main" className="pt-10 text text_type_main-medium" ref={mainRef}>Начинки</div>
            <div className={style.list}>
                <BurgerIngredientsSet type='main'/>
            </div>
        </div>
    )
}

BurgerIngredientsSets.propTypes = {
}
