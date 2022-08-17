import "./App.css";
import ImageContent from "./components/ImageContent";
import SinglePost from "./components/singlePostContent";
// import "../scss/FileName.scss";
import { library } from "@fortawesome/fontawesome-svg-core";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import { fab } from "@fortawesome/free-brands-svg-icons";
import {
  faCheckSquare,
  faCoffee,
  faComment,
  faEye,
  faChevronUp,
  faChevronDown,
  faArrowLeft,
  faHandPointDown,
} from "@fortawesome/free-solid-svg-icons";

library.add(
  faCheckSquare,
  faCoffee,
  faComment,
  faEye,
  faChevronUp,
  faChevronDown,
  faArrowLeft,
  faHandPointDown
);

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={<ImageContent />} />
        <Route path="/singlePost/:imageId" element={<SinglePost />} />
      </Routes>
      <Footer />
      {/* <SinglePost /> */}
    </div>
  );
}

export default App;
