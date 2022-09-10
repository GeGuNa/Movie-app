import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { useNavigate } from 'react-router';
import Home from './pages/Home.js';
import Login from './pages/Login.js';
import Bydata from './pages/By.js';
import Viewed from './pages/Viewed.js';
import Register from './pages/Registration.js';
import Video from './pages/video.js';
import { Auth } from './api/user.js';


import Ongoing from './pages/Ongoing.js';


import Profile from './pages/Profile.js';

import  Cat  from './pages/list.js';
import { Cookies } from 'react-cookie';
import { is_number, Escape } from './api/funcs.js'

import 'bootstrap/dist/css/bootstrap.min.css'
import './css/App.css'
import './css/w3.css'
import './css/index.css';


function Error_Detected() {

const qqq = useNavigate();

/*
React.useEffect(() => {
	return qqq('/');
});

React.useEffect(() => {
 qqq('/');
}, []);

*/


return <h1>page cannot be found</h1>
}



function App() {

const qre = useNavigate();

const Qcookies = new Cookies()

const qname = Qcookies.get('username');

return (

<Routes>

<Route path="/" element={<Home />} />
<Route path="/movie/:id" element={<Video />} />

<Route path="/type/:type" element={<Bydata />} />
<Route path="/viewed" element={<Viewed />} />
<Route path="/cat/:id" element={<Cat />} />
<Route path="/ongoing" element={<Ongoing />} />

<Route path="/login" element={<Login />} />
<Route path="/registration" element={<Register />} />
{qname && <Route path="/Profile" element={<Profile />} />}
<Route path="*" element={<Error_Detected/>} /> 






</Routes>
);
}

export default App;
