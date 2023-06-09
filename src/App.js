import './App.css';
import { Routes, Route } from "react-router-dom";
import Header from './components/Header.js'
import Footer from "./components/Footer.js"
import Gallery from "./components/Gallery"
import PhotoPage from "./pages/PhotoPage"
import BookmarkPage from './pages/BookmarkPage';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route exact path="/" element={<Gallery />} />
        <Route exact path="/bookmarks" element={<BookmarkPage />} />
        <Route exact path="/photo/:photoId" element={<PhotoPage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
