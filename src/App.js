import { useEffect, useState } from "react";
import "./styles.css";

const MiniData = [
  { date: "2022-09-01", views: 100, article: "Article 1" },

  { date: "2023-09-01", views: 100, article: "Article 1" },

  { date: "2023-09-02", views: 150, article: "Article 2" },

  { date: "2023-09-02", views: 120, article: "Article 3" },

  { date: "2020-09-03", views: 200, article: "Article 4" },
];

export default function App() {
  const [data, setData] = useState([]);

  const handleDate = () => {
    let filteredDataByDate = [...MiniData].sort(
      (a, b) => b.date.replace(/\D/g, "") - a.date.replace(/\D/g, "")
    );
    console.log(filteredDataByDate);
    setData(filteredDataByDate);
  };

  /*
const handleDate = () => {
  let filteredDataByDate = [...MiniData].sort(
    (a, b) => new Date(b.date) - new Date(a.date)
  );
  setData(filteredDataByDate);
};

  */

  const handleViews = () => {
    let filteredDataByViews = [...MiniData].sort((a, b) => b.views - a.views);
    console.log(filteredDataByViews);
    setData(filteredDataByViews);
  };

  useEffect(() => {
    setData(MiniData);
  }, []);

  return (
    <div className="App">
      <h1>Date and Views Table</h1>
      <button onClick={handleDate}>Sort by Date</button>
      <button onClick={handleViews}>Sort by Views</button>
      <table>
        <thead>
          <tr>
            <th>Date</th>
            <th>Views</th>
            <th>Article</th>
          </tr>
        </thead>
        <tbody>
          {data.map((data) => {
            return (
              <tr bgcolor="white">
                <td>{data.date}</td>
                <td>{data.views}</td>
                <td>{data.article}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
