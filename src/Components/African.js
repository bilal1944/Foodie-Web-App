import React from "react";
import "./foodcont.css";
import FoodBox from "./FoodBox";
import africa_food from "../img/africa_food.jpg";
import Bunnychow from "../img/Bunny chow.jpg";
import JollofRice from "../img/Jollof Rice.jpg";
import Piri_piri_chicken from "../img/Piri piri chicken.jpg";
import Cachupa from "../img/Cachupa.jpg";
import Couscous from "../img/Couscous.jpg";
import PaymentSect from "./PaymentSect";
import { Link } from "react-router-dom";



function African() {

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
                            <FoodBox imgSrc={africa_food} title={"African 1"} price={"$12"} />
                            <FoodBox imgSrc={Bunnychow} title={"Bunny chow"} price={"$15"} />
                            <FoodBox imgSrc={JollofRice} title={"Jollof Rice"} price={"$20"} />
                            <FoodBox imgSrc={Piri_piri_chicken} title={"Piri Piri Chicken"} price={"$25"} />
                            <FoodBox imgSrc={Cachupa} title={"Cachupa"} price={"$30"} />
                            <FoodBox imgSrc={Couscous} title={"Couscous"} price={"$18"} />

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

export default African;
