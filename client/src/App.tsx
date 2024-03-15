/* import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Signup } from "./pages/Signup";
import { Signin } from "./pages/Signin";
import { Blog } from "./pages/Blog";
import { LandingPage } from "./pages/Landingpage";
import { Dashboard } from "./pages/Dashboard";
import { Blogs } from "./pages/Blogs";
import { NewBlog } from "./pages/NewBlog";
import { NotFound } from "./pages/NotFound"; */

function App() {
  return (
    <div>
      {/* <BrowserRouter>
        <Routes>
          //<Route path="/*" errorElement={<NotFound />} />
          <Route
            path="/"
            element={<LandingPage />}
            errorElement={<NotFound />}
          />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/blog/:id" element={<Blog />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/write-in-verse" element={<NewBlog />} />
        </Routes>
      </BrowserRouter> */}
    </div>
  );
}

export default App;
