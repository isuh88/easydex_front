import { Link } from "react-router-dom";
import dexList from "../../data/dex";
import { Tag } from "./tag";
import { useState } from "react";
import ModalBasic from "./modalBasic";
import { watchDex } from "../../apis/api";

export const SmallBlock = ({ dex }) => {
  //taglist 만들어서 click시 연결 되도록
  // smallblock name에 bitblock으로 이어지는 코드 작성 요
  const [modalOpen, setModalOpen] = useState(false);
  const showModal = () => {
    setModalOpen(true);
  };

  function getRandom(length) {
    return Math.floor(Math.random() * length);
  }
  var randomTag = [];
  if (dex.tags.length) {
    randomTag.push(getRandom(dex.tags.length));
    randomTag.push(getRandom(dex.tags.length));
    while (randomTag[0] == randomTag[1]) {
      randomTag[1] = getRandom(dex.tags.length);
    }
    var randomTag = [];
    if (dex.tags.length) {
      randomTag.push(getRandom(dex.tags.length));
      randomTag.push(getRandom(dex.tags.length));
      while (randomTag[0] == randomTag[1]) {
        randomTag[1] = getRandom(dex.tags.length);
      }
    }
    console.log(randomTag);
    return dex.invest ? (
      <>
        {modalOpen && (
          <ModalBasic setModalOpen={setModalOpen} className="z-50" />
        )}
        <div className="card w-[300px] h-[300px]  p-1 m-10  items-center justify-center bg-gradient-to-br rounded">
          <div className="smallblock relative flex flex-col bg-white ">
            <div className="px-2 py-1 flex justify-between">
              <div className="tooltip" data-tip="이건 뭐게">
                <button className="" onClick={showModal}>
                  🙌
                </button>
                {/* {modalOpen && <ModalBasic setModalOpen={setModalOpen} className="w-300[px]/> h-200[px] z-20 border-solid border-4 bg-black"/>} */}
              </div>
              <button
                className="btn btn-xs"
                onClick={() => console.log("❤️ 눌림")}
              >
                ❤️
              </button>
            </div>
            <div className="w-full flex flex-row flex-wrap justify-between">
              <div className="w-1/2 flex flex-col">
                <div className="flex flex-col justify-between">
                  <Link
                    to={"/Bigblock/" + dex.id}
                    state={{ istag: false }}
                    className="btn btn-lg btn-ghost"
                  >
                    {dex.title}
                  </Link>
                </div>
                <p>{dex.value}</p>
              </div>
              <div className="flex-col justify-center">
                {randomTag.length ? (
                  <>
                    <Tag id={randomTag[0]} dexid={dex.id} />
                    <br></br>
                    <Tag id={randomTag[1]} dexid={dex.id} />
                  </>
                ) : (
                  <></>
                )}
              </div>
            </div>
            <div>
              <img src="/assets/images/lion.jpeg" alt="오류" />
            </div>
          </div>
        </div>
      </>
    ) : (
      <>
        {modalOpen && (
          <ModalBasic setModalOpen={setModalOpen} className="z-50" />
        )}
        <div className="card w-[300px] h-[300px] p-1 m-10 items-center justify-center bg-gradient-to-br rounded from-economy_tag/10">
          <div className="smallblock relative flex flex-col bg-white ">
            <div className="px-2 py-1 flex justify-between">
              <div className="tooltip" data-tip="이건 뭐게">
                <button className="" onClick={showModal}>
                  🙌
                </button>
              </div>
              <button
                className="btn btn-xs"
                onClick={() => console.log("❤️ 눌림")}
              >
                ❤️
              </button>
            </div>
            <div className="w-full flex flex-row flex-wrap justify-between">
              <div className="flex flex-col">
                <div className="flex flex-row justify-between">
                  <Link
                    to={"/Bigblock/" + dex.id}
                    state={{ istag: false }}
                    className="btn btn-ghost"
                  >
                    {dex.title}
                  </Link>
                </div>
                <p>{dex.value}</p>
              </div>
              <div className="flex-col">
                {randomTag.length ? (
                  <>
                    <Tag id={randomTag[0]} dexid={dex.id} />
                    <br></br>
                    <Tag id={randomTag[1]} dexid={dex.id} />
                  </>
                ) : (
                  <></>
                )}
              </div>
            </div>
            <div>
              <img src="/assets/images/lion.jpeg" alt="오류" />
            </div>
          </div>
        </div>
      </>
    );
  }
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

  return (
    <>
      {modalOpen && <ModalBasic setModalOpen={setModalOpen} className="z-50" />}
      <div className="flex flex-col">
        {dex.invest ? (
          <div className="self-center w-[755px] h-[460px] p-1 items-center justify-center bg-gradient-to-br rounded">
            <div className="bigblock relative flex flex-col bg-white">
              <div className="px-2 py-1 flex justify-between">
                <button className="btn" onClick={showModal}>
                  🙌
                </button>
                <button className="btn" onClick={() => console.log("❤️ 눌림")}>
                  ❤️
                </button>
              </div>
              <div className="flex flex-col justify-between">
                <Link
                  to={"/Bigblock/" + dex.id}
                  state={{ istag: false }}
                  className="btn btn-ghost"
                >
                  {dex.title}
                </Link>
                <div className="flex flex-col">
                  {dex.tags.map((id) => (
                    <Tag id={id} dexid={dex.id} />
                  ))}
                </div>
              </div>
              <div className="flex flex-col">
                <p>current rate value</p>
              </div>
              <div>full description</div>
            </div>
          </div>
        ) : (
          <div className="self-center w-[755px] h-[460px] p-1 items-center justify-center bg-gradient-to-br rounded from-economy_tag/80">
            <div className="bigblock relative flex flex-col bg-white">
              <div className=" flex justify-between">
                <button className="btn" onClick={showModal}>
                  🙌
                </button>
                <button className="btn" onClick={() => console.log("❤️ 눌림")}>
                  ❤️
                </button>
              </div>
              <div className="flex flex-rcol justify-between p-5">
                <Link
                  to={"/Bigblock/" + dex.id}
                  state={{ istag: false }}
                  className="btn btn-ghost"
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
