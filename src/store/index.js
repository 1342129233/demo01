//仓库管理文件  compose用于增强函数
import {createStore, applyMiddleware, compose } from 'redux'

//这个是redux-thunk的中间件
//import thunk from 'redux-thunk'

//这个是redux-saga
import createSagaMiddleware from 'redux-saga'
import mySagas from './sagas'

//管理员
import reducer from './reducer'

const sagaMiddleware = createSagaMiddleware();

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPONSE__?
                         window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE({}):compose


//const enhancer = composeEnhancers(applyMiddleware(thunk))


const enhancer = composeEnhancers(applyMiddleware(sagaMiddleware))
const store = createStore( reducer, enhancer)
sagaMiddleware.run(mySagas)

// const store = createStore(
//   reducer,
//   enhancer
  //applyMiddleware(thunk)
  //window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() // 创建数据存储仓库
// )
export default store