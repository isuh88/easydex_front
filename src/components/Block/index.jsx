import { Link } from "react-router-dom";
import dexList from "../../data/dex";
import { Tag } from "./tag";
import { useState } from "react";
import ModalBasic from "./modalBasic";

export const SmallBlock = ({ dex }) => {
  //taglist 만들어서 click시 연결 되도록
  // smallblock name에 bitblock으로 이어지는 코드 작성 요
  const [modalOpen, setModalOpen] = useState(false);
  const showModal = () => {
    setModalOpen(true);
  };



function getRandom (length){
  return Math.floor(Math.random() * (length))};
var randomTag = [];
if (dex.tags.length){
  randomTag.push(getRandom(dex.tags.length))
  randomTag.push(getRandom(dex.tags.length))
  while(randomTag[0] == randomTag[1]){
    randomTag[1] = getRandom(dex.tags.length)
  }
}
console.log(randomTag);
  return dex.invest ? (<>
    {modalOpen && <ModalBasic setModalOpen={setModalOpen} className="z-50"/>}
    <div className="w-[365px] h-[250px] mx-10 my-5 p-1 items-center justify-center bg-gradient-to-br rounded from-dexname/80">
      <div className="smallblock relative flex flex-col bg-white ">
        <div className="px-2 py-1 flex justify-between">
          <div>
          <button onClick={showModal}>설명 버튼</button>
          {/* {modalOpen && <ModalBasic setModalOpen={setModalOpen} className="w-300[px]/> h-200[px] z-20 border-solid border-4 bg-black"/>} */}
          </div>
          <button onClick={()=> console.log("좋아요 버튼 눌림")}>좋아요 버튼</button>
        </div>
        <div className="w-full flex flex-row flex-wrap justify-between">
          <div className="w-1/2 flex flex-col">
            <div className="flex flex-row justify-between">
              <Link
                to={"/Bigblock/" + dex.id}
                state={{ istag: false }}
                className="dexname"
              >
                {dex.title}
              </Link>
            </div>
            <p>{dex.value}</p>
          </div>
          <div className="flex-col">{
            randomTag.length ? (
              <>
              <Tag id={randomTag[0]} dexid = {dex.id}/>
              <Tag id={randomTag[1]} dexid = {dex.id}/>
              </>
            ):<></>
          }
          </div>
        </div>
        <div>
          <img src="/assets/images/lion.jpeg" alt="오류" />
        </div>
      </div>
    </div></>
  ) : (<>
    {modalOpen && <ModalBasic setModalOpen={setModalOpen} className="z-50"/>}
    <div className="w-[365px] h-[250px] mx-10 my-5 p-1 items-center justify-center bg-gradient-to-br rounded from-economy_tag/80">
      <div className="smallblock relative flex flex-col bg-white ">
      <div className="px-2 py-1 flex justify-between">
          <button onClick={showModal}>설명 버튼</button>
          <button onClick={()=> console.log("좋아요 버튼 눌림")}>좋아요 버튼</button>
        </div>
        <div className="w-full flex flex-row flex-wrap justify-between">
          <div className="w-1/2 flex flex-col">
            <div className="flex flex-row justify-between">
              <Link
                to={"/Bigblock/" + dex.id}
                state={{ istag: false }}
                className="economyname"
              >
                {dex.title}
              </Link>
            </div>
            <p>{dex.value}</p>
          </div>
          <div className="flex-col">{
            randomTag.length ? (
              <>
              <Tag id={randomTag[0]} dexid = {dex.id}/>
              <Tag id={randomTag[1]} dexid = {dex.id}/>
              </>
            ):<></>
          }
          </div>
        </div>
        <div>
          <img src="/assets/images/lion.jpeg" alt="오류" />
        </div>
      </div>
    </div>
    </>
  );
};

export const BigBlock = ({ dex }, index) => {
  //taglist 만들어서 click시 연결 되도록
  //index는 이전에 클릭 된 개체의 id를 의미 dex는 Big block 내용에 들어올 dex 의미
  // index와 dex id가 같으면 이전과의 관계 필요 x

    const [modalOpen, setModalOpen] = useState(false);
  const showModal = () => {
    setModalOpen(true);
  };

  const fromhome = dex.id == index ? true : false;
  var tagDexarr = [];
  dex.tags.map((id) => {
    tagDexarr.push(dexList.find((dex) => dex.id === id));
  });

  return (<>
    {modalOpen && <ModalBasic setModalOpen={setModalOpen} className="z-50"/>}
    <div className="flex flex-col">
      {dex.invest ? (
        <div className="self-center w-[755px] h-[460px] p-1 items-center justify-center bg-gradient-to-br rounded from-dexname/80">
          <div className="bigblock relative flex flex-col bg-white">
          <div className="px-2 py-1 flex justify-between">
          <button onClick={showModal}>설명 버튼</button>
          <button onClick={()=> console.log("좋아요 버튼 눌림")}>좋아요 버튼</button>
        </div>
            <div className="flex flex-row justify-between p-5">
              <Link
                to={"/Bigblock/" + dex.id}
                state={{ istag: false }}
                className="dexname"
              >
                {dex.title}
              </Link>
              <div className="flex flex-row">
                {dex.tags.map((id) => (
                  <Tag id={id} dexid={dex.id} />
                ))}
              </div>
            </div>
            <div className="flex flex-row">current rate value</div>
            <div>full description</div>
          </div>
        </div>

      ) : (
        <div className="self-center w-[755px] h-[460px] p-1 items-center justify-center bg-gradient-to-br rounded from-economy_tag/80">
          <div className="bigblock relative flex flex-col bg-white">
          <div className="px-2 py-1 flex justify-between">
          <button onClick={showModal}>설명 버튼</button>
          <button onClick={()=> console.log("좋아요 버튼 눌림")}>좋아요 버튼</button>
        </div>
            <div className="flex flex-row justify-between p-5">
              <Link
                to={"/Bigblock/" + dex.id}
                state={{ istag: false }}
                className="economyname"
              >
                {dex.title}
              </Link>
              <div className="flex flex-row">
                {dex.tags.map((id) => (
                  <Tag id={id} dexid={dex.id} />
                ))}
              </div>
            </div>
            <div className="flex flex-row">current rate description</div>
            <div>full description</div>
          </div>
        </div>
      )}
      <div className="grid grid-cols-4 gap-5">
        {tagDexarr.map((dex) => (
          <SmallBlock dex={dex} />
        ))}
      </div>
    </div>
    </>
  );
};
