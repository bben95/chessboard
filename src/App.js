import React, { useEffect, useState } from "react";
import knightimg from "./knightimg.jpg";
import getPossibleKnightMoves from "./logic";
import "./App.css";

const App = () => {
  const col = [0, 1, 2, 3, 4, 5, 6, 7];
  const row = [0, 1, 2, 3, 4, 5];
  const [rows, setRow] = useState(0);
  const [cols, setCol] = useState(1);
  const [possible,setpossible]=useState([])
  useEffect(()=>{setpossible(getPossibleKnightMoves(rows,cols))},[rows,cols])
 const possiblity =(i,j)=>{for (const element of possible){if(element[0]===i&& element[1]===j)return true} }
  

  return (

    <div style={{position:"absolute" ,top:"5%",left:"25%"}}>
      <h2 style={{textAlign:"center"}}>Click On blocks to find the possible positions Of Knight</h2>
      {row.map((i) => {
        return (
          <div style={{ display: "flex", flexDirection: "row" }}>
            {col.map((j) => {
              return (
                <div
                className={possiblity(i,j)?"backgroundred":""}
                  
                style={{
                    border: "1px solid black",
                    width: "80px",
                    height: "80px",
                
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
    </div>
  );
};

export default App;
