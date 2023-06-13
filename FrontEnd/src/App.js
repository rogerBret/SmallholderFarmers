import ReactDOM from "react-dom/client";
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import Blogs from "./pages/Blogs";
import Login from "./pages/Login";
import NoPage from "./pages/Nopage";
import Dashboard from "./pages/Dashboard";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="blogs" element={<Blogs />} />
          <Route path="Login" element={<Login />} />
          <Route path="*" element={<NoPage />} />
          <Route path="dashboard" element={<Dashboard/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);


// import Login from './components/Login';

// // import Particles from "react-particles-js"

// function App() {
//   return (
//     <>
//       <Login/>
//     </>
//     );
// }

// export default App;