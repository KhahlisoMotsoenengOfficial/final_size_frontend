import '../css/Navbar.css'

export default function Navbar(){

    return (
        <>
        
            
            <nav className="navbar">
                <div className="navbar__container">
                    <a href="#" id="navbar__logo"><i className="fa-solid fa-folder-tree"></i>SizeAndShine</a>
                    <div className="navbar__toggle" id="mobile-menu">
                        <span className="bar"></span>
                        <span className="bar"></span>
                        <span className="bar"></span>

                    </div>
                    <ul className="navbar__menu">
                        <li className="navbar__item">
                            <a href="/Home" className="navbar__links"><i className="fa-solid fa-house"></i>Home</a>
                        </li>
                        <li className="navbar__item">
                            <a href="/Shop" className="navbar__links" id="navbar__size"> <i className="fa-solid fa-shirt"></i>Shop</a>
                        </li>
                        <li className="navbar__item">
                            <a href="/Print" className="navbar__links" id="navbar__print"> <i className="fa-solid fa-file-pdf"></i>Print</a>
                        </li>
                        <li className="navbar__btn">
                            <a href="/Login" className="button">Login</a>
                        </li>
                    </ul>
                </div>
            </nav>
        </>
    );
    
}