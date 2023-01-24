import React from "react";
import "./foodcont.css";
import FoodBox from "./FoodBox";
import Mapo_Tofu from "../img/Mapo_Tofu.jpg";
import pork from "../img/Pork.jpg";
import Spring_Roll from "../img/Spring-Roll.jpg";
import Chow_mein from "../img/Chow_mein.jpg";
import Wonton_Soup from "../img/Wonton-Soup.jpg";
import chinese_rice from "../img/Mapo_Tofu.jpg";
import PaymentSect from "./PaymentSect";
import { Link } from "react-router-dom";


function Chinese() {
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
                            <FoodBox imgSrc={Mapo_Tofu} title={"Mapo Tofu"} price={"$10"}/>
                            <FoodBox imgSrc={pork} title={"Sweet & Sour Pork"} price={"$25"}/>
                            <FoodBox imgSrc={Spring_Roll} title={"Spring Roll"} price={"$15"}/>
                            <FoodBox imgSrc={Chow_mein} title={"Chow mein"} price={"$20"}/>
                            <FoodBox imgSrc={Wonton_Soup} title={"Wonton Soup"} price={"$30"}/>
                            <FoodBox imgSrc={chinese_rice} title={"Chinese Rice"} price={"$24"}/>
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

export default Chinese;
