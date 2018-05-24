import { call, put, takeEvery } from 'redux-saga/effects';
import { delay } from 'redux-saga';

function* sayHelloAsync() {
  yield call(delay, 1000)
  yield put({type: 'SAY_HELLO'})
}

function* watchSayHelloAsync() {
  yield takeEvery('SAY_HELLO_ASYNC', sayHelloAsync)
}

const homeSaga = [
  watchSayHelloAsync()
]

export default homeSaga;