import React from "react";
import "../quotes/quotes.css";
import { useState } from "react";
import { useEffect } from "react";
import { FetchData } from "../../../services/api";
import arrow from "../../../assets/images/arrow.png";
function Quotes() {
  const [data, setData] = useState([]);
  useEffect(() => {
    FetchData(setData);
  }, []);
  const [x, setX] = useState();
  return (
    <>
      <ul>
        {data.map((quote, key) => {
          let classname = "quotehidden";
          let authorid = "";
          let arrowrotate = "";
          if (x == key) {
            classname = "quoteappear";
            authorid = "blackauthor";
            arrowrotate = "arrowrotate";
          } else {
            classname = "quotehidden";
            authorid = "";
            arrowrotate = "";
          }

          if (key < 5) {
            return (
              <div
                key={key}
                className="quotesdiv"
                onClick={() => {
                  setX(key);
                }}
              >
                <div className="quotesandarrow">
                  <p className="quote" key={key} id={authorid}>
                    {quote.author}
                  </p>
                  <img id={arrowrotate} src={arrow} alt="" />
                </div>
                <div className={classname}>
                  <p>{quote.quote}</p>
                </div>
              </div>
            );
          }
        })}
      </ul>
    </>
  );
}
export default Quotes;
