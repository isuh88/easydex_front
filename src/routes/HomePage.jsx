import { useState, useEffect } from "react";
import { DexBlock } from "../components/DexBlock";
import dexList from "../data/dex";
import { Link } from "react-router-dom";
import axios from "axios";
import { BigBlock, SmallBlock } from "../components/Block";
import { getDexes, pullDexes, getUser } from "../apis/api";
import { getCookie } from "../utils/cookie";

const HomePage = () => {
  const [dexes, setDexList] = useState(dexList);

  //로그인 여부를 판정하기 위해 사용
  const [isUser, setIsUser] = useState("");
  useEffect(() => {
    const user = getCookie("access_token") ? true : false;
    setIsUser(user);
  }, []);

  useEffect(() => {
    const getDexesAPI = async () => {
      await pullDexes();
      const dexes = await getDexes();
      setDexList(dexes);
      // console.log(dexes);

      //watchDex: dexes being practically rendered on the Home(Custom)Page
      //compare watchDex to the 'dexes', which is the whole list of the dexes saved in the backEnd DB
      if (isUser) {
        const user = await getUser();
        const watchingDex = dexes.filter(
          (dex) => dex.watching_users.includes(user.id) > 0
        );
        // console.log(watchingDex);
      }
    };
    getDexesAPI();
  }, []);

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
