import { useEffect, useState } from "react";
import dexList from "../../data/dex";
import { BigBlock, SmallBlock } from "./index";
import { Link } from "react-router-dom";
import { getDex, getDexes, getDexesAPI } from "../../apis/api";

// a 추후 onClick으로 대체
export const Tag = ({ id }, { dexid }) => {
  const tagid = id;
  //getDexList 함수 필요
  const [dexes, setDexList] = useState(dexList);

  // 이 부분 서버와 연결 필요
  // const [dex, setDex] = useState(dex);
  // 아래 get dexlist 수정해서 사용
  // useEffect(() => {
  //   const getDexesAPI = async () => {
  //     const dex = await getDex(id);
  //     setDex(dex);};
  //   getDexesAPI();
  // }, []);

  //이 부분은 완성되면 지워도 됩니다.
  console.log("tagid 찾기");
  console.log(tagid);
  const dex = dexList[id - 1];
  // const dex = dexList.find(dex => dex.id == id);
  console.log("확인");
  console.log(dex);
  //

  return (
    dex && (
      <div className="btn btn-xs btn-outline m-2 uppercase">
        <Link to={"/Bigblock/" + tagid} state={{ istag: true }}>
          {dex.title}
        </Link>
      </div>
    )
  );
};
