import React from "react";
import "./foodcont.css";
import FoodBox from "./FoodBox";
import Italian_risotto from "../img/Italian_risotto.jpg";
import Gnocchi from "../img/Gnocchi.jpg";
import Pizza_Margherita from "../img/Pizza_Margherita.jpg";
import Polenta from "../img/Polenta.jpg";
import Fiorentina from "../img/Fiorentina.jpg";
import Minestrone from "../img/Minestrone.jpg";
import PaymentSect from "./PaymentSect";
import { Link } from "react-router-dom";


function Italian() {
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
                            <FoodBox imgSrc={Italian_risotto} title={"Risotto"} price={"$28"}/>
                            <FoodBox imgSrc={Gnocchi} title={"Gnocchi"} price={"$10"}/>
                            <FoodBox imgSrc={Pizza_Margherita} title={"Pizza Margherita"} price={"$30"}/>
                            <FoodBox imgSrc={Polenta} title={"Polenta"} price={"$25"}/>
                            <FoodBox imgSrc={Fiorentina} title={"Fiorentina"} price={"$20"}/>
                            <FoodBox imgSrc={Minestrone} title={"Minestrone"} price={"$15"}/>
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

export default Italian;
