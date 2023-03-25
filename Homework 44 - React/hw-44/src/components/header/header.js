import './header.css';

function Header() {
    return (
        <div className="App-header">
            <div className="huge-box"></div>
            <span className="blog-title">Blog name</span>
            <div className="small-box-wrapper">
                <div className="small-box"></div>
                <div className="small-box"></div>
                <div className="small-box"></div>
                <div className="small-box"></div>
                <div className="small-box"></div>
            </div>
        </div>
    );
}

export default Header;