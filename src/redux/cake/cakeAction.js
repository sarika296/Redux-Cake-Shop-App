import { BUY_CAKE } from './cakeTypes'

export const buyCake = (number) => {
    return {
        type: BUY_CAKE,
        payload: number,
        cost: number * 500
    }
}
