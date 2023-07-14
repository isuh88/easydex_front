import { useState, useEffect } from "react";
import { DexBlock } from "../components/DexBlock";
import dexList from "../data/dex";
import { BigBlock,SmallBlock } from "../components/Block";
import axios from "axios"
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