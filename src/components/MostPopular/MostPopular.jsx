import "./MostPopular.css";

import { FaApple } from "react-icons/fa";
import image from "../../../src/assets/images/popular-01.jpg";
const MostPopular = () => {
    return (
        <>
            <div className="section-wrapper">
                <div className="section-header">
                    <h4>most popular</h4>
                </div>
                <div className="most-popular-items">
                    <div className="most-popular-item">
                        <div className="card-wrapper">
                            <img className="mp-image" src={image} alt="" />
                            <div className="mp-item-content">
                                <h4 className="mp-item-title">
                                    fortnight <br />
                                    <span>sandBox</span>
                                </h4>
                                <ul>
                                    <li>
                                        <span style={{ color: "yellow" }}>
                                            <FaApple />
                                        </span>
                                        <span>4.2</span>
                                    </li>
                                    <li>
                                        <FaApple />
                                        <span>3.2</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="most-popular-item">
                        <div className="card-wrapper">
                            <img className="mp-image" src={image} alt="" />
                            <div className="mp-item-content">
                                <h4 className="mp-item-title">
                                    fortnight <br />
                                    <span>sandBox</span>
                                </h4>
                                <ul>
                                    <li>
                                        <span>4.2</span>
                                    </li>
                                    <li>
                                        <span>3.2</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="most-popular-item">
                        <div className="card-wrapper">
                            <img className="mp-image" src={image} alt="" />
                            <div className="mp-item-content">
                                <h4 className="mp-item-title">
                                    fortnight <br />
                                    <span>sandBox</span>
                                </h4>
                                <ul>
                                    <li>
                                        <span>4.2</span>
                                    </li>
                                    <li>
                                        <span>3.2</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="most-popular-item">
                        <div className="card-wrapper">
                            <img className="mp-image" src={image} alt="" />
                            <div className="mp-item-content">
                                <h4 className="mp-item-title">
                                    fortnight <br />
                                    <span>sandBox</span>
                                </h4>
                                <ul>
                                    <li>
                                        <span>4.2</span>
                                    </li>
                                    <li>
                                        <span>3.2</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="most-popular-item">
                        <div className="card-wrapper">
                            <img className="mp-image" src={image} alt="" />
                            <div className="mp-item-content">
                                <h4 className="mp-item-title">
                                    fortnight <br />
                                    <span>sandBox</span>
                                </h4>
                                <ul>
                                    <li>
                                        <span>4.2</span>
                                    </li>
                                    <li>
                                        <span>3.2</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="most-popular-item">
                        <div className="card-wrapper">
                            <img className="mp-image" src={image} alt="" />
                            <div className="mp-item-content">
                                <h4 className="mp-item-title">
                                    fortnight <br />
                                    <span>sandBox</span>
                                </h4>
                                <ul>
                                    <li>
                                        <span>4.2</span>
                                    </li>
                                    <li>
                                        <span>3.2</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="most-popular-item">
                        <div className="card-wrapper">
                            <img className="mp-image" src={image} alt="" />
                            <div className="mp-item-content">
                                <h4 className="mp-item-title">
                                    fortnight <br />
                                    <span>sandBox</span>
                                </h4>
                                <ul>
                                    <li>
                                        <span>4.2</span>
                                    </li>
                                    <li>
                                        <span>3.2</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="most-popular-item">
                        <div className="card-wrapper">
                            <img className="mp-image" src={image} alt="" />
                            <div className="mp-item-content">
                                <h4 className="mp-item-title">
                                    fortnight <br />
                                    <span>sandBox</span>
                                </h4>
                                <ul>
                                    <li>
                                        <span>4.2</span>
                                    </li>
                                    <li>
                                        <span>3.2</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default MostPopular;
