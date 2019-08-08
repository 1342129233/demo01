import { GET_MY_LIST, CHANGE_INPUT, ADD_ITEM, DELETE_ITEM, GET_LIST } from './actionTypes'
// import axios from 'axios';

//输入框
export const changeInputAction = (value)=>({
  type:CHANGE_INPUT,
  value
})

//添加
export const addItemAction = ()=>({
  type:ADD_ITEM
})


//删除
export const deleltItemAction = (index)=>({
  type:DELETE_ITEM,
  index
})

//添加数据
export const getListAction = (data)=>({
  type:GET_LIST,
  data
})

//axois
export const getTodoList = ()=>{
  return (dispatch)=>{
    // axios.get('https://www.easy-mock.com/mock/5cfcce489dc7c36bd6da2c99/xiaojiejie/getList')
    //   .then((res)=>{
    //     const data = res.data
    //     const action = getListAction(data)
    //     dispatch(action)
    //     // const action = getListAction(data)
    //     // store.dispatch(action)
    //   })
  }
}

export const getMyListAction = ()=>({
    type:GET_MY_LIST
})
