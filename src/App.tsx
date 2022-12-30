/*
 * @Author: wangkun wangkun@axhome.com.cn
 * @Date: 2022-12-30 15:12:20
 * @LastEditors: wangkun wangkun@axhome.com.cn
 * @LastEditTime: 2022-12-30 16:04:49
 * @FilePath: \reactProject\react-template\src\App.tsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import React from 'react';
import './App.less';
import 'antd/dist/antd.min.css'
import Home from './views/home/index'
function App() {
  return (
    <div className="App">
      <Home />
    </div>
  );
}

export default App;
