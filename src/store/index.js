// 

import { createStore, combineReducers } from 'redux'

function countReducer(state = 0, action) {

  if (action.type === 'COUNT_ADD') {
    return state + 1;
  } else if (action.type === 'COUNT_REDUCE') {
    return state - 1;
  } else if (action.type === 'COUNT_CHSNGE') {
    return action.value
  } else {
    return state;
  }
}

function studentReducer(state = {name:'张三',age:20},action) {
  switch (action.type) {
    case 'STUDENT_CHANGE':
      return action.value;
  
    default:
      return state;
  }
}

function isLoginReducer(state = false,action) {
  switch (action.type) {
    case 'LOGIN_CHANGE':
      return action.value;
  
    default:
      return state;
  }
}


// 把多个reduce函数合并成一个,给状态数据起名
var reducers = combineReducers({count: countReducer,student: studentReducer,isLogin: isLoginReducer})

//创建仓库并导出
export default createStore(reducers) 


// reducer函数要求必须是纯函数，函数中不能出现除参数之外的其它变量，所有的结果和计算全部依赖于参数
// 纯函数：函数中所有的可能结果全部依赖于参数，一个输入对应一个输出
