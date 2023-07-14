import { useState } from "react";
import { DexBlock } from "../components/DexBlock";
import dexList from "../data/dex";
import { BigBlock,SmallBlock } from "../components/Block";
import { useLocation, useParams } from "react-router-dom";

const BigBlockPage = () => {
    
    const {blockid} = useParams();
    const dex = dexList.find((dex) => dex.id == blockid);

    const location = useLocation();
    const istag = location.state.istag;
    {istag ? console.log("태그에서 왔음") : console.log("다른데서 옴")};

  const handleChange = (e) => {};
  //className="grid grid-cols-4 px-10 mt-10"
  return (
    <div>
      This is BigblockPage
      <div>
        <BigBlock dex ={dex}/>
      </div>
    </div>
  );
};

export default BigBlockPage;