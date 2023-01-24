import React from "react";
import "./foodcont.css";
import FoodBox from "./FoodBox";
import Fudge_cake from "../img/Fudge_cake.jpg";
import Cheese_Cake from "../img/Cheese_Cake.jpg";
import Chocolate_cake from "../img/Chocolate_cake.jpg";
import apple_crumble from "../img/apple_crumble.jpg";
import caramel_pudding from "../img/caramel_pudding.jpg";
import Ice_cream from "../img/Ice_cream.jpg";
import PaymentSect from "./PaymentSect";
import { Link } from "react-router-dom";


function Desert() {
    return (
        <>
            <div className="foodcontainer">
                <div className="left-side">
                    <div className="cards">
                        <div className="all">
                            <div className="varieties">
                                <Link to="/" className="var-btn">
                                    All
                                </Link>
                                <Link to="/african" className="var-btn">
                                    African
                                </Link>
                                <Link to="/chinese" className="var-btn">
                                    Chinese
                                </Link>
                                <Link to="/italian" className="var-btn">
                                    Italian
                                </Link>
                                <Link to="/desert" className="var-btn">
                                    Desert
                                </Link>
                            </div>
                        </div>

                        <main>
                            <FoodBox imgSrc={Fudge_cake} title={"Chocolate Fudge Cake"} price={"$25"}/>
                            <FoodBox imgSrc={Cheese_Cake} title={"Cheese Cake"} price={"$20"}/>
                            <FoodBox imgSrc={Chocolate_cake} title={"Chocolate Cake"} price={"$15"}/>
                            <FoodBox imgSrc={apple_crumble} title={"Apple Berry Crumble"} price={"$18"}/>
                            <FoodBox imgSrc={caramel_pudding} title={"Caramel Pudding"} price={"$10"}/>
                            <FoodBox imgSrc={Ice_cream} title={"Ice_cream"} price={"$8"}/>
                        </main>
                    </div>
                </div>
                <div className="right-side">
                    <PaymentSect />
                </div>
            </div>
        </>
    );
}

export default Desert;
