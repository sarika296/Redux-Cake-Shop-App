import { BUY_CAKE } from './cakeTypes'

export const buyCake = (quantity) => {
    return {
        type: BUY_CAKE,
        payload: (quantity===0) ? 0 : quantity,
        cost: (quantity!==0) ?  quantity * 500 : 0 
    }
}
