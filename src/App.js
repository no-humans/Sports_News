import "./App.css";
import Article from "./components/Article/Article";
import Coursel1 from "./components/Courosel/Coursel1";
import Footer from "./components/Footer/Footer";
import Head from "./components/Head/Head";
import RecentNews from "./components/News/RecentNews";
import Category from "./pages/Category";
import Home from "./pages/Home";
import News from "./pages/News";

function App() {
  return (
    <>
      <Head />
      <Home />
      <Category />
      <News />
      <Coursel1 />
      <RecentNews/>
      <Article/>
      <Footer/>
    </>
  );
}

export default App;
