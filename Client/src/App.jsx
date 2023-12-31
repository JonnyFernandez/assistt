
import { Landing, User1, User2, User3, Profile1, Cart, Orders, Fav } from "./views"
import { Route, Routes } from "react-router-dom"
import React from 'react';
import UserList from "./views/user3/userList";
import axios from "axios";

axios.defaults.baseURL = "http://localhost:3001";

function App() {

  return (
    <div>
      <Routes>
        <Route exact path="/" element={<Landing />} />
        <Route exact path="/user1" element={<User1 />} />
        <Route exact path="/user2" element={<User2 />} />
        <Route exact path="/user3" element={<User3 />} />
        <Route exact path="/Profile1" element={<Profile1 />} />
        <Route exact path="/cart" element={<Cart />} />
        <Route exact path="/orders" element={<Orders />} />
        <Route path="/detail/:id" element={<User3 />} />
        <Route path="/usersList" element={<UserList />} />
        <Route exact path="/fav" element={<Fav />} />
      </Routes>
    </div>
  )
}

export default App