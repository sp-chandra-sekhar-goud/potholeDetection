import React, { useState, useEffect } from "react";
import "./tableData.css"

const TableData = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://sheetdb.io/api/v1/lkqqntdky1lu3");
        const jsonData = await response.json();
        setData(jsonData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
    const interval = setInterval(fetchData, 1000000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="tableData">
      <h1>Data</h1>
      <table>
        <thead>
          <tr>
            <th>Timestamp</th>
            <th>Latitude</th>
            <th>Longitude</th>
            <th>Distance</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index}>
              <td>{item.Timestamp}</td>
              <td>{item.Latitude}</td>
              <td>{item.Longitude}</td>
              <td>{item.Distance}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TableData;
