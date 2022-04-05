import Helmet from "react-helmet";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Blog from "./component/Blog/Blog";
import Dashboard from "./component/Dashboard/Dashboard";
import Header from "./component/Header/Header";
import Home from "./component/Home/Home";
import NotFound from "./component/NotFound/NotFound";
import Reviews from "./component/Reviews/Reviews";

function App() {
  return (
    <div className="App">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Laptop Review</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>

      <Header></Header>

      <Routes>
          <Route path="/" element={<Home></Home>}></Route>
          <Route path="/home" element={<Home></Home>}></Route>
          <Route path="/reviews" element={<Reviews></Reviews>}></Route>
          <Route path="/blog" element={<Blog></Blog>}></Route>
          <Route path="/dashboard" element={<Dashboard> </Dashboard>}></Route>
          <Route path="*" element={<NotFound></NotFound>}></Route>
      </Routes>
    </div>
  );
}

export default App;
