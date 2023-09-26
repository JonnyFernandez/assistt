import { Landing, User1, User2, User3, User4, Profile1, Cart, Orders, Fav } from "./views"
import Create1User from "./components/Formularios/Create1User";
import Create2User from "./components/Formularios/Create2User";
import Create3User from "./components/Formularios/Create3User";
import Create4User from "./components/Formularios/Create4User";
import { Route, Routes } from "react-router-dom"
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
        <Route exact path="/user4" element={<User4 />} />
        <Route exact path="/Profile1" element={<Profile1 />} />
        <Route exact path="/cart" element={<Cart />} />
        <Route exact path="/orders" element={<Orders />} />
        <Route exact path="/detail/:id" element={<User3 />} />
        <Route exact path="/register1" element={<Create1User />} />
        <Route exact path="/register2" element={<Create2User />} />
        <Route exact path="/register3" element={<Create3User />} />
        <Route exact path="/register4" element={<Create4User />} />
        <Route exact path="/fav" element={<Fav />} />
      </Routes>
    </div>
  )
}

export default App