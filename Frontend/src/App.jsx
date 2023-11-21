import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MusicHome from './MusicPage/MusicHome';

function App() {
    return (
        <>
            <Router>

                <Routes>
                    <Route exact path='/music' Component={MusicHome} />

                </Routes>
            </Router>
        </>
    )
}

export default App