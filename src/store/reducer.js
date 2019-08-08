import { CHANGE_INPUT, ADD_ITEM, DELETE_ITEM, GET_LIST } from './actionTypes'
//例子管理员管理数据
const defaultState = {  //定义一下state里面到底有什么
  inputValue : 'Weite Something',
  list:[]
}  

//newState是一个新的数组，代码没有修改，仓库接受之后自己改变了


export default(state=defaultState,action)=>{  //管理状态的

  // console.log(state,action)
  //Reducer里只能接受state,不能改变state
  //改变input值
  if(action.type === CHANGE_INPUT){
    //深度拷贝(字符串转化成对象+JSON 字符串    类似元改变地址指向)
    let newState = JSON.parse(JSON.stringify(state))  //深度拷贝state
    newState.inputValue = action.value
    return newState
  }

  //添加
  if(action.type === ADD_ITEM){  //根据type值，编写业务逻辑
    let newState = JSON.parse(JSON.stringify(state))
    newState.list.push(newState.inputValue)  //push新的内容到列表中去
    newState.inputValue = ''
    return newState
  }

  //删除
  if(action.type === DELETE_ITEM){  //根据type值，编写业务逻辑
    let newState = JSON.parse(JSON.stringify(state))
    newState.list.splice(action.index,1)  //push新的内容到列表中去
    return newState
  }

  //赋值数据
  if(action.type === GET_LIST){  //根据type值，编写业务逻辑
    let newState = JSON.parse(JSON.stringify(state))
    newState.list = action.data.data.list
    return newState
  }

  return state
}