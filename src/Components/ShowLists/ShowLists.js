import React, { useEffect, useState } from "react";
import axios from "axios";
import LoadingPage from "../LoadingPage/LoadingPage";
import "./ShowLists.css";

function ShowLists() {
  const [dates, setDates] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const fetchDates = async () => {
    const response = await axios.get("/showlists");
    setDates(response.data);
    setIsLoading(false);
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
        {dates.map((date, index) => (
          <div key={index} className="date-display">
            {date.Date}
          </div>
        ))}
      </div>
    </>
  );
}

export default ShowLists;
