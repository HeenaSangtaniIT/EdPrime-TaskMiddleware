import {call,put,takeLatest} from 'redux-saga/effects';
import {SHOW_CARD_LOADING, SHOW_CARD_SUCCESS, SHOW_CARD_ERROR, SHOW_CARD } from '../redux/actions';
import {generateCard} from '../common/call-card-api'

// Card Saga
function* genCard(action){
    try {
        yield put({
        type : SHOW_CARD_LOADING,

     })
      const response = yield call(generateCard)
        console.log("response",response.data)

        // if(response.data){
            yield put({
                type :SHOW_CARD_SUCCESS,
                payload: {
                    responseObject : response.data

                } 
            })
           
        // }
        // else {
        //     yield put({
        //         type: SHOW_CARD_ERROR,
        //         payload:{
        //            error:"Something Went Wrong!"
        //         }
        //     })   
        // }
    } catch (error) {
        yield put({
            type: SHOW_CARD_ERROR,
            payload:{
                error:"Something Went Wrong Exception Occured!"
   
            }
        })
    }
}
export default function* cardGenSaga(){
    yield takeLatest(SHOW_CARD,genCard);
} 