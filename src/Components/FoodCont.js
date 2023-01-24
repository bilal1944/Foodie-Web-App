import React from "react";
import "./foodcont.css";
import FoodBox from "./FoodBox";
import pasta from "../img/pasta.jpg";
import burger from "../img/Burger.jpg";
import pizza from "../img/Pizza.jpg";
import afri from "../img/afri.jpg";
import chine from "../img/chine.jpg";
import ital from "../img/ital.jpg";
import PaymentSect from "./PaymentSect";
import { Link } from "react-router-dom";



function FoodCont() {
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
              <FoodBox imgSrc={pasta} title={"Pasta"} price={"$20"} />
              <FoodBox imgSrc={afri} title={"Fish"} price={"$10"} />
              <FoodBox imgSrc={ital} title={"Fried Chicken"} price={"$5"} />
              <FoodBox imgSrc={chine} title={"Cake"} price={"$7"} />
              <FoodBox imgSrc={burger} title={"Burger"} price={"$10"} />
              <FoodBox imgSrc={pizza} title={"Pizza"} price={"$15"} />
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

export default FoodCont;
