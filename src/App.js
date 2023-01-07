import React, { useState } from "react";
import knightimg from "./knightimg.jpg";

const App = () => {
  const col = [0, 1, 2, 3, 4, 5, 6, 7];
  const row = [0, 1, 2, 3, 4, 5];
  const [rows, setRow] = useState(0);
  const [cols, setCol] = useState(1);
  const

  return (
    <>
      {row.map((i) => {
        return (
          <div style={{ display: "flex", flexDirection: "row" }}>
            {col.map((j) => {
              return (
                <div
                  style={{
                    border: "1px solid black",
                    width: "80px",
                    height: "80px",
                    backgroundColor: (i + j) % 2 === 0 ? "white" : "grey",
                  }}
                  onClick={() => {
                    setRow(i);
                    setCol(j);
                  }}
                >
                  {i === rows && j === cols && (
                    <img src={knightimg} width="80px" height="80px" />
                  )}
                </div>
              );
            })}
          </div>
        );
      })}
    </>
  );
};

export default App;
