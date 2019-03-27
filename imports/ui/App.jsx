import React from 'react';
import Navbar from "./Navbar";

const App = ({ main }) => (
    <div>
        <Navbar/>
        <div className={"container"}>
            { main }
        </div>
    </div>
);

export default App;
