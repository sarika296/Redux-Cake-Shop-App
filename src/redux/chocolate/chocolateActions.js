import { BUY_CHOCOLATE } from './chocolateTypes'

export const buyChocolate = (number) => {
    return {
        type: BUY_CHOCOLATE,
        payload: number
    }
}
