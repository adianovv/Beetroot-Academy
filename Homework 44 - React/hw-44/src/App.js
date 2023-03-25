import './App.css';
import Header from "./components/header/header";
import Banner from "./components/Banner/banner";
import Blog from "./components/blog/blog";
import News from "./components/news/news";


function App() {
    return (
        <div className="App">
            <Header></Header>
            <Banner></Banner>
            <div className="news-wrapper">
                <Blog></Blog>
                <News></News>
            </div>
        </div>
    );
}

export default App;
