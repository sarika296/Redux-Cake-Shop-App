import { BUY_CHOCOLATE } from './cakeTypes'

export const buyCHOCOLATE = (number) => {
    return {
        type: BUY_CHOCOLATE,
        payload: number
    }
}
