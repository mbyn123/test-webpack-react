import React from "react";
import "./index.less";
import App from './App'
import {createRoot} from 'react-dom/client' 

const container=document.getElementById('root');
const root=createRoot(container as HTMLAnchorElement);
root.render(<App/>);
