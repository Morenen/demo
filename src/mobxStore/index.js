// 这是mobx状态管理仓库
import { observable, action } from 'mobx'

// 定义状态数据
let store = observable({
  name: '张三',
  number: 0
})

// 定义状态数据的更新函数
store.setName = action((value)=>{
  store.name = value
})
store.setNum = action(()=>{
  store.number ++
})

export default store

