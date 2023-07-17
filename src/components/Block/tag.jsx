import { useEffect } from "react";
import dexList from "../../data/dex";
import { BigBlock, SmallBlock } from "./index";
import { Link } from "react-router-dom";

// a 추후 onClick으로 대체
export const Tag = ({ id }, { dexid }) => {
  //getDexList 함수 필요

  //dexid는 tag가 붙어있는 dex의 id
  // find 함수를 사용했으나 비동기적 사용으로 렌더링 이전에 dex 객체를 받아오지 못해 id를 인덱스로 사용해서 가져옴
  const tagid = id;
  console.log("tagid 찾기");
  console.log(tagid);
  const dex = dexList[id];
  // const dex = dexList.find(dex => dex.id == id);
  console.log("확인");
  console.log(dex);
  return (
    dex && (
      <div className="badge badge-neutral">
        <Link to={"/Bigblock/" + tagid} state={{ istag: true }}>
          {dex.title}
        </Link>
      </div>
    )
  );
};
