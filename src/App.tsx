import logo from "./logo.svg";
import "@/App.less";
import React,{useState} from "react";
import {Button,Input} from 'antd'

function Tset(){
  const [ count, setCounts ] = useState('')
  const onChange = (e: any) => {
    setCounts(e.target.value)
  }
  // console.log(vars)
  return (
    <>
      <h2>webpack5+react+ts</h2>
      <p>受控组件</p>
      <Input type="text" value={count} onChange={onChange} />
      <br />
      <p>非受控组件</p>
      <Input type="text" />
      <Button type="primary">按钮</Button>
    </>
  )
}

function App () {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <div>webpack</div>
        <Tset></Tset>
      </header>
    </div>
  );
}

export default App;
