import Header from "./components/Header";
import Footer from "./components/Footer";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./routes/HomePage";
import SignUpPage from "./routes/SignUpPage";
import SignInPage from "./routes/SignInPage";
import BigBlockPage from "./routes/BigBlockPage";
import MyPage from "./routes/MyPage";


function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Header />
        <Routes>
          {/* home */}
          <Route path="/" element={<HomePage />} />
          <Route path="/signin" element={<SignInPage />} />
          <Route path="/signup" element={<SignUpPage />} />
          <Route path="/my" element={<MyPage />} />
          <Route path="/Bigblock/:blockid" element = {<BigBlockPage/>}/>
          {/* <Route path="/create" element={<PostCreatePage />} /> */}
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  )
}

export default App;