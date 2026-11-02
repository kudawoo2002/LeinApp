import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "../pages/home/Home";
import Speak from "../pages/speak/Speak";
import Write from "../pages/write/Write";
import Photo from "../pages/photo/Photo";
import Video from "../pages/video/Video";
import "./appRoute.css";
import Navbar from "../components/navbar/Navbar";
import Footer from "../components/footer/Footer";
import Contribution from "../pages/home/controbution/Contribution";

function AppRouter() {
  return (
    <div className="">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="" element={<Home />} />
          <Route path="speak" element={<Speak />} />
          <Route path="write" element={<Write />} />
          <Route path="photo" element={<Photo />} />
          <Route path="video" element={<Video />} />
          <Route path="contribution" element={<Contribution />} />
        </Routes>
        {/* <Footer /> */}
      </BrowserRouter>
    </div>
  );
}

export default AppRouter;
