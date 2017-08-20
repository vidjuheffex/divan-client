import regeneratorRuntime from "regenerator-runtime";
import { call, put, takeEvery } from 'redux-saga/effects';
import {push} from 'react-router-redux';
import {
  SEND_SIGNUP_REQUEST,
  SIGNUP_SUCCEEDED,
  SIGNUP_FAILED,
  SEND_LOGIN_REQUEST,
  LOGIN_SUCCEEDED,
  LOGIN_FAILED,
  GET_GLOBAL_SETTINGS,
  GET_GLOBAL_SETTINGS_SUCCEEDED,
  GET_GLOBAL_SETTINGS_FAILED,
  SEND_PROJECT_CREATION_REQUEST,
  PROJECT_CREATION_SUCCEEDED,
  PROJECT_CREATION_FAILED
} from '../constants/ActionTypes.js';
import {store} from '../index.js';;

export function* getGlobalSettings(action) {
  try {
    const data = yield call( () => {
      return fetch("http://localhost:3001/api/globalSettings",
                   {
                     method: "GET",
                     headers: {
                       'Accept' : 'application/json',
                       'Content-Type' : 'applicaation/json',
                       'x-access-token' : localStorage.token
                     }
                   })
        .then(data => data.json())
        .then(data => {return data;});
    });
    console.log(data);
    if (data.msg === 'success'){
      yield put({type: GET_GLOBAL_SETTINGS_SUCCEEDED, data});
    }
    else {
      yield put({type: GET_GLOBAL_SETTINGS_FAILED, data});
    }
  }
  catch (err){
    yield put({type: GET_GLOBAL_SETTINGS_FAILED, err});
  }
}

export function* sendSignup(action) {
  try {
    const data = yield call( () => {
      return fetch("http://localhost:3001/signup",
                   {
                     method: "POST",
                     headers : {
                       'Accept'        : 'application/json',
                       'Content-Type'  : 'application/json'
                     },
                     body: JSON.stringify(action.payload)
                   })
        .then(data => data.json())
        .then(data => {return data;});
    });
    if (data.msg === "success") {
      yield put({type: SIGNUP_SUCCEEDED, data});  
    }
    else {
      yield put({type: SIGNUP_FAILED, data});
    }
  } catch (error) {
    yield put({type: SIGNUP_FAILED, error});
  }
}

export function* sendLogin(action) {
  try {
    const data = yield call( () => {
      return fetch("http://localhost:3001/login",
                   {
                     method: "POST",
                     headers : {
                       'Accept'        : 'application/json',
                       'Content-Type'  : 'application/json'
                     },
                     body: JSON.stringify(action.payload)
                   })
        .then(data => data.json())
        .then(data => { return data;});
    });
    if (data.msg === "success") {
      yield put({type: LOGIN_SUCCEEDED, data}); 
      store.dispatch(push("/"));
    }
    else {
      yield put({type: LOGIN_FAILED, data});
    }
    
  } catch (error) {
    yield put({type: LOGIN_FAILED, error});
  }
}

export function* sendProjectCreationRequest(action){
  try {
    const data = yield call( ()=>{
      console.log(localStorage.token);
      console.log(JSON.stringify(action.payload));
      return fetch("http://localhost:3001/admin/project",
                   {
                     method: "POST",
                     headers : {
                       'Accept'        : 'application/json',
                       'Content-Type'  : 'application/json',
                       'x-access-token' : localStorage.token
                     },
                     body: JSON.stringify(action.payload)
                   })
        .then(data => data.json())
        .then(data => {return data;});
    });
    if(data.msg === "success") {
      yield put({type: PROJECT_CREATION_SUCCEEDED, data});
    }
    else {
      yield put({type: PROJECT_CREATION_FAILED, data});
    }
  }
  catch (error){
    yield put({type: PROJECT_CREATION_FAILED, error});
  }
}

export default function* rootSaga() {
  yield takeEvery(SEND_SIGNUP_REQUEST, sendSignup);
  yield takeEvery(SEND_LOGIN_REQUEST, sendLogin);
  yield takeEvery(GET_GLOBAL_SETTINGS, getGlobalSettings);
  yield takeEvery(SEND_PROJECT_CREATION_REQUEST, sendProjectCreationRequest);
}
