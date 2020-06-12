import { BUY_CHOCOLATE } from './chocolateTypes'

export const buyChocolate = (quantity) => {
    return {
        type: BUY_CHOCOLATE,
        payload: quantity===0 ? 0 : quantity,
        cost: quantity!==0 ? quantity * 100 : 0
    }
}
