import { useState, useEffect } from "react";
import { DexBlock } from "../components/DexBlock";
import dexList from "../data/dex";

import { Link } from "react-router-dom";

import { BigBlock, SmallBlock } from "../components/Block";

import axios from "axios";
import { getPosts } from "../apis/api";

const HomePage = () => {
  const [dexes, setPostList] = useState(dexList);
  // useEffect(() => {
  // 	const getPostsAPI = async () => {
  // 		const posts = await getPosts();
  //     setPostList(posts);
  //   };
  //   getPostsAPI();
  // }, []);
  // console.log(dexes);

  const handleChange = (e) => {};
  //className="grid grid-cols-4 px-10 mt-10"
  return (
    <div>
      <div className="mainLayout">
        <div className="form-control">
          <input
            type="text"
            placeholder="관심 있는 키워드를 검색해보세요!"
            className="main-input input-bordered "
          />
        </div>
        <div>
          <div class="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 ">
            {dexes.map((dex) => (
              <SmallBlock dex={dex} />
            ))}
          </div>{" "}
        </div>
      </div>
    </div>
  );
};

export default HomePage;
