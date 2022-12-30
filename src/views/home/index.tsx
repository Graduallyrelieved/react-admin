/*
 * @Author: wangkun wangkun@axhome.com.cn
 * @Date: 2022-12-30 15:21:19
 * @LastEditors: wangkun wangkun@axhome.com.cn
 * @LastEditTime: 2022-12-30 16:11:10
 * @FilePath: \reactProject\react-template\src\views\home\index.tsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import React, { Component } from 'react'
import Layout from '../../components/layout/layout'
import './index.less'

class Home extends Component {
  render() {
    return (
      <div className='content'>
        <Layout />
      </div>
    )
  }
}
export default Home
