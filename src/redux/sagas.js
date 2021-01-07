import { all, takeEvery } from "redux-saga/effects";
import {getCardSaga} from '../card/card.saga';
import {SHOW_CARD} from './actions';

export default function* rootSagas(){
    yield all([yield takeEvery(SHOW_CARD,getCardSaga)])
}