import React from 'react'
import ReactDOM from 'react-dom/client'
import FirstApp from './FirstApp'
import './styles.css'

ReactDOM.createRoot( document.getElementById('root') ).render(
    <React.StrictMode>
        <FirstApp title='titulo' number={ 123 } isActive isNotActive={false} ></FirstApp>
    </React.StrictMode>
)