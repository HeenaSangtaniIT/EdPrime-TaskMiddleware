import {
    apiRootCardaxios,
} from './axios'
import { CARD_API } from './api';

export const generateCard = () => {
    return apiRootCardaxios.get(CARD_API)

}