import { useState } from "react";
import { DexBlock } from "../components/DexBlock";
import dexList from "../data/dex";
import { BigBlock,SmallBlock } from "../components/Block";

const HomePage = () => {
  const [dexes, setPostList] = useState(dexList);

  const handleChange = (e) => {};
  //className="grid grid-cols-4 px-10 mt-10"
  return (
    <div>
      This is HomePage

      
      <div>
        {dexes.map((dex) => (
          //<DexBlock key={dex.id} dex={dex} />
          <>
          <SmallBlock dex={dex} />
          <BigBlock dex={dex}/>
          </>
        ))}
      </div>
    </div>
  );
};

export default HomePage;