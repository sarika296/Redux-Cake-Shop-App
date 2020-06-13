import { BUY_ICECREAM } from './iceCreamTypes'

export const buyIceCream = (quantity) => {
    return {
        type: BUY_ICECREAM,
        payload: quantity===0 ? 0 : quantity,
        cost: quantity!==0 ? quantity * 200 : 0
    }
}
