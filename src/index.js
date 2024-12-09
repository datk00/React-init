import React from 'react';
import ReactDOM from 'react-dom';



function App() {
    return (
        <div>
            <h1>Hello, React!</h1>
            <p>This is a simple React application.</p>
            <p onClick= {() => {console.log(Math.random())}}>Created by: Phung Thanh Dat</p>
        </div>
    )
}


ReactDOM.render(<App />, document.getElementById('root'));