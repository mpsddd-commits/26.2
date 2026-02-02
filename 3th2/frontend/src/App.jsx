import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { BrowserRouter, Routes, Route } from "react-router";
import Login from "./pages/Login";

const Home = () => {
  return (
    <div className="text-center">
      <h1>메인 화면입니다.</h1>
      <a href="/login" type="btn">로그인</a>
      <a href="/login" type="btn">로그아웃</a>

    </div>
  )
}

const NotFound = () => {
  return (
    <div className="text-center">
      <h1>404</h1>
      <p>페이지를 찾을 수 없습니다.</p>
    </div>
  )
}

const App = () => {
  const paths = [
    {path: "/", element: <Home />},
    {path: "/login", element: <Login />},
    {path: "*", element: <NotFound />},
  ]
  
  return (
    <>
      <BrowserRouter>
        <Routes>
          { paths?.map((v, i) => <Route key={i} path={v.path} element={v.element} />) }
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App