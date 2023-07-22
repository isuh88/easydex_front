import { useState, useEffect } from "react";
import { DexBlock } from "../components/DexBlock";
import useDexList from "../data/dex";
import { Link } from "react-router-dom";
import axios from "axios";
import { BigBlock, SmallBlock } from "../components/Block";
import { getDexes, pullDexes, getUser } from "../apis/api";
import { getCookie, getSessionStorage, setSessionStorage } from "../utils/cookie";
import EasyDEXlogo from "../assets/images/EasyDEX_logo.png";

const HomePage = () => {
  
  //백엔드에 저장되는 데이터로 수정
  // const dexList = useDexList();
  const { dexList, watchDexList } = useDexList();

  //로그인 여부를 판정하기 위해 사용
  const [isUser, setIsUser] = useState("");
  useEffect(() => {
    const user = getCookie("access_token") ? true : false;
    setIsUser(user);
  }, []);

  // //여기서 dexList, watchDexList를 컨트롤중임... 로직 수정 필요
  // const [watchDex, setWatchList] = useState(getSessionStorage('cachedWatchingDexList'));
  // console.log(watchDex);
  // useEffect(() => {
  //   const watchDexAPI = async () => {
  //     //watchDex: dexes being practically rendered on the Home(Custom)Page
  //     //compare watchDex to the 'dexes', which is the whole list of the dexes saved in the backEnd DB
  //     if (isUser) {
  //       const user = await getUser();
  //       const watchingDex = dexList.filter(
  //         (dex) => dex.watching_users.includes(user.id) > 0
  //       );
  //       setWatchList(watchingDex);
  //       setSessionStorage('cachedWatchingDexList', watchDex);
  //     }
  //   };
  //   watchDexAPI();
  // }, []);
  // console.log(watchDex);

  const handleChange = (e) => {};
  //className="grid grid-cols-4 px-10 mt-10"

  return (
    <div>
      <div className="mainLayout">
        <div>
          <Link to="/">
            <img src={EasyDEXlogo} className="mainPageLogo" />
          </Link>
        </div>
        <div className="form-control">
          <input
            type="text"
            placeholder="관심 있는 키워드를 검색해보세요!"
            className="main-input input-bordered"
          />
        </div>
        <div>
          <Link to="/dexlist">전체 지표 목록 보기</Link>
        </div>
        {/* <div>
          This is WatchList
          {(watchDex && watchDex.length > 0) ? (
            <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
              {
              watchDex.map((dex) => (
                <SmallBlock dex={dex} key={dex.id} /> // Added 'key' prop to avoid warning
              ))}
            </div>
          ) : (
            <div>Loading...</div> // Render a loading indicator or any message you prefer
          )}
        </div>         */}
        <div>
          This is Whole DexList
          {(dexList && dexList.length > 0) ? (
            <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
              {dexList.map((dex) => (
                <SmallBlock dex={dex} key={dex.id} /> // Added 'key' prop to avoid warning
              ))}
            </div>
          ) : (
            <div>Loading...</div> // Render a loading indicator or any message you prefer
          )}
        </div>
      </div>
    </div>
  );
};

export default HomePage;
