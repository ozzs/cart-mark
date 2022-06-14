import React, { useEffect, useState } from "react";
import axios from "axios";
import LoadingPage from "../LoadingPage/LoadingPage";
import ListDisplay from "./ListDisplay";
import "./ShowLists.css";

function ShowLists() {
  const [dates, setDates] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const [displayList, setDisplayList] = useState([]);
  const [displayListID, setDisplayListID] = useState([]);

  const [loaderID, setLoaderID] = useState(-1);

  const fetchDates = async () => {
    const response = await axios.get("/showlists");
    setDates(response.data);
    setIsLoading(false);
  };

  const fetchListByDate = async (date) => {
    const response = await axios.get("/showlists/get-list", {
      params: { date: date },
    });
    setDisplayListID(response.data[0].ID);
    setDisplayList(response.data);
    setLoaderID(-1);
  };

  useEffect(() => {
    fetchDates();
  }, []);

  if (isLoading) {
    return <LoadingPage />;
  }

  return (
    <>
      <div className="show-lists-title"> Previous Lists </div>
      <div className="dates-list">
        {dates.map((date) => (
          <div className="date-list-block" key={date.ID}>
            <div
              className="date-title-display"
              onClick={() => {
                setLoaderID(date.ID);
                fetchListByDate(date.Date);
              }}
            >
              {date.Date}
              {loaderID === date.ID ? <div className="loader"></div> : null}
            </div>

            <div className="list-by-date-display">
              {displayListID === date.ID ? (
                <ListDisplay list={displayList} />
              ) : null}
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default ShowLists;
