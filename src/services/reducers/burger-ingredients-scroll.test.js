import {
    scrollIngredientsReducer as reducer,
    initialState as state,
} from './burger-ingredients-scroll';
import { setActiveTab } from '../actions/burger-ingredients-scroll';
import { scrollIngredients } from '../actions/burger-ingredients-scroll';

describe('burger-ingredients-scroll reducer test', () => {
    it('should handle set active tab bun', () => {
        expect(reducer(state, setActiveTab('bun')))
            .toEqual({
                current: 'bun',
                scroll: 'bun'
            })
    })
    it('should handle scroll ingredients to bun', () => {
        expect(reducer(state, scrollIngredients('bun')))
            .toEqual({
                current: 'bun',
                scroll: 'bun'
            })
    })
})
