import React, { Component } from 'react';
import 'antd/dist/antd.css'
import store from './store/index'
//getListAction    getTodoList
import { changeInputAction, addItemAction, deleltItemAction, getMyListAction } from './store/actionCreators'
import TodoListUI from './TodoListUI'



class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = store.getState() //所有数据
    this.changeInputValue = this.changeInputValue.bind(this)
    this.storeChange = this.storeChange.bind(this)
    this.deleteItem = this.deleteItem.bind(this)
    store.subscribe(this.storeChange)  //订阅一下(更新后的数据)

    this.clickBtn = this.clickBtn.bind(this)
  }
  render() {
    return (
      <TodoListUI 
        inputValue = {this.state.inputValue}
        changeInputValue = {this.changeInputValue}
        clickBtn = {this.clickBtn}
        list = {this.state.list}
        deleteItem = {this.deleteItem}
      />
     );
  }

  componentDidMount(){
    // const action = getTodoList()
    // store.dispatch(action)

    const action = getMyListAction()
    store.dispatch(action)
    console.log(action)
  }

  changeInputValue(e){
    // const action = {
    //   type:CHANGE_INPUT,    //类似于给action起一个名字方便找到
    //   value:e.target.value   //改变之后的值
    // }
    const action = changeInputAction(e.target.value)
    store.dispatch(action)  //传给仓库action的值
  }

  //去返回仓库订阅（数据）setState用来改变
  storeChange(){
    this.setState(store.getState())
  }

  clickBtn(){
    // const action = {
    //   type: ADD_ITEM
    // }
    const action = addItemAction()
    store.dispatch(action)
  }

  deleteItem(index){
    // const action = {
    //   type: DELETE_ITEM,
    //   index
    // }
    const action = deleltItemAction(index)
    store.dispatch(action)
  }
}
 
export default TodoList;