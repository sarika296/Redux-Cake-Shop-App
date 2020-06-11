import { BUY_ICECREAM } from './iceCreamTypes'

export const buyIceCream = (number) => {
    return {
        type: BUY_ICECREAM,
        payload: number,
        cost: number * 200
    }
}
