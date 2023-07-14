import { useState } from "react";
import { DexBlock } from "../components/DexBlock";
import dexList from "../data/dex";
import { Link } from "react-router-dom";

const HomePage = () => {
  const [dexes, setPostList] = useState(dexList);

  const handleChange = (e) => {};

  return (
    <div className="mainLayout">
      <div className="form-control">
        <input
          type="text"
          placeholder="관심 있는 키워드를 검색해보세요!"
          className="main-input input-bordered "
        />
      </div>
      <div>
        <div className="grid mainBlocks px-10 mt-10 ">
          {dexes.map((dex) => (
            <DexBlock key={dex.id} dex={dex} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomePage;
