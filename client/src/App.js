import React from 'react';
import { Route, Routes, Link } from 'react-router-dom';
import Dashboard from './views/Dashboard';
import CreateAuthor from './views/CreateAuthor';
import UpdateAuthor from './views/UpdateAuthor';

function App() {
    return (
        <div className="App container col mt-5 mx-auto w-25">
            <h1 className='text-center'>Favorite Authors</h1>

            {/* <p className='fs-5 in-line'><Link to="/authors">
                Home</Link></p>
            <p className='fs-5 in-line'><Link to="/authors/new">
                Add An Author</Link></p> */}
            <hr />

            <Routes>
                <Route path="/authors" element={<Dashboard/>} />
                <Route path="/authors/new" element={<CreateAuthor/>} />
                <Route path="/authors/:id/edit" element={<UpdateAuthor/>} />
            </Routes>
        </div>
    );
}

export default App;
