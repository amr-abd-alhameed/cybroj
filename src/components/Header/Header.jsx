import "./Header.css";
import logo from "../../../src/assets/images/logo.png";
import logo2 from "../../../src/assets/images/profile-header.jpg";
import NavItem from "../NavItem/NavItem";
import { Link } from "react-router-dom";
const Header = () => {
    return (
        <header className="header-area header-sticky header">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <nav className="main-nav">
                            <a href="index.html" className="logo">
                                <img src={logo} alt="logo" />
                            </a>
                            <div className="search-input">
                                <form id="search" action="#">
                                    <input
                                        type="text"
                                        placeholder="Type Something"
                                        id="searchText"
                                        name="searchKeyword"
                                    />
                                    <i className="fa fa-search"></i>
                                </form>
                            </div>
                            <ul className="nav">
                                <NavItem className="aaaa">
                                    <Link to="/" className="active">
                                        home
                                    </Link>
                                    {/* <a href="/" className="active">
                                        Home
                                    </a> */}
                                </NavItem>
                                <NavItem>
                                    <Link to="/About">About</Link>
                                </NavItem>
                                <NavItem>
                                    <a href="details.html">Details</a>
                                </NavItem>
                                <NavItem>
                                    <a href="streams.html">Streams</a>
                                </NavItem>
                                <NavItem>
                                    <a href="profile.html">
                                        Profile <img src={logo2} alt="" />
                                    </a>
                                </NavItem>
                            </ul>
                            {
                                // eslint-disable-next-line jsx-a11y/anchor-is-valid
                                <a className="menu-trigger">
                                    <span>Menu</span>
                                </a>
                            }
                        </nav>
                    </div>
                </div>
            </div>
        </header>

        // <nav className="navbar navbar-expand-lg bg-light">
        //     <div className="container-fluid">
        //         <a className="navbar-brand" href="#">
        //             <img src={logo} alt="logo" />
        //         </a>
        //         <button
        //             className="navbar-toggler"
        //             type="button"
        //             data-bs-toggle="collapse"
        //             data-bs-target="#navbarSupportedContent"
        //             aria-controls="navbarSupportedContent"
        //             aria-expanded="false"
        //             aria-label="Toggle navigation"
        //         >
        //             <span className="navbar-toggler-icon"></span>
        //         </button>
        //         <div
        //             className="collapse navbar-collapse"
        //             id="navbarSupportedContent"
        //         >
        //             <form className="d-flex" role="search">
        //                 <input
        //                     className="form-control me-2"
        //                     type="search"
        //                     placeholder="Search"
        //                     aria-label="Search"
        //                 />
        //             </form>
        //             <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        //                 <li className="nav-item">
        //                     <a
        //                         className="nav-link active"
        //                         aria-current="page"
        //                         href="#"
        //                     >
        //                         Home
        //                     </a>
        //                 </li>
        //                 <li className="nav-item">
        //                     <a className="nav-link" href="#">
        //                         Browse
        //                     </a>
        //                 </li>
        //                 <li className="nav-item">
        //                     <a className="nav-link" href="#">
        //                         Details
        //                     </a>
        //                 </li>
        //                 <li className="nav-item">
        //                     <a className="nav-link" href="#">
        //                         Streams
        //                     </a>
        //                 </li>
        //             </ul>
        //         </div>
        //     </div>
        // </nav>
    );
};

export default Header;
