import { Link } from "react-router-dom";
import dexList from "../../data/dex";
import { Tag } from "./tag";
import { watchDex } from "../../apis/api";



export const SmallBlock = ({dex}) =>{
//taglist 만들어서 click시 연결 되도록
// smallblock name에 bitblock으로 이어지는 코드 작성 요
    const onClickWatch = () => {
        console.log(dex.id);
        watchDex(dex.id);
    };

return(
    dex.invest ? (
    <div className="w-[365px] h-[250px] mx-10 my-5 p-1 items-center justify-center bg-gradient-to-br rounded from-dexname/80">
    <div className="smallblock relative flex flex-col bg-white ">
        <div className="w-full flex flex-row flex-nowrap justify-between">
            <div className="w-1/2 flex flex-col">
                <div className="flex flex-row justify-between">
                <Link to={'/Bigblock/' + dex.id} state = {{istag : false}} className="dexname">{dex.title}</Link>
                    <a className="italic font-semibold underline" href="http://www.naver.com">hyper link</a>
                </div>
                <p>{dex.description}</p>
            </div>
            <div
                className="absolute bottom-3 left-4 cursor-pointer"
                onClick={onClickWatch}
            >
                ❤️
            </div>
            <div className="flex-col">
                {dex.tags.map( (id) => (
                    <Tag id={id} dexid={dex.id}/>
                ))}
            </div>
        </div>
        <div>
            <img src="/assets/images/lion.jpeg" alt="오류"/>
        </div>
    </div>
    </div>) : (
    <div className="w-[365px] h-[250px] mx-10 my-5 p-1 items-center justify-center bg-gradient-to-br rounded from-economy_tag/80">
    <div className="smallblock relative flex flex-col bg-white ">
        <div className="w-full flex flex-row flex-nowrap justify-between">
            <div className="w-1/2 flex flex-col">
                <div className="flex flex-row justify-between">
                <Link to={'/Bigblock/' + dex.id} state = {{istag : false}} className="economyname">{dex.title}</Link>
                    <a className="italic font-semibold underline" href="http://www.naver.com">hyper link</a>
                </div>
                <p>{dex.description}</p>
            </div>
            <div className="flex-col">
                {dex.tags.map( (id) => (
                    <Tag id={id} dexid={dex.id} />
                ))}
            </div>
        </div>
        <div>
            <img src="/assets/images/lion.jpeg" alt="오류"/>
        </div>
    </div>
    </div>)
);
};

export const BigBlock = ({dex},index)=>{
//taglist 만들어서 click시 연결 되도록
//index는 이전에 클릭 된 개체의 id를 의미 dex는 Big block 내용에 들어올 dex 의미 
// index와 dex id가 같으면 이전과의 관계 필요 x

const fromhome = (dex.id == index ? true : false);
var tagDexarr = [];
dex.tags.map((id) =>{
    tagDexarr.push(dexList.find(dex => dex.id === id));
});

return (
    <div className="flex flex-col">
        {dex.invest ?
        <div className="self-center w-[755px] h-[460px] p-1 items-center justify-center bg-gradient-to-br rounded from-dexname/80">
        <div className="bigblock flex flex-col bg-white">
            <div className="flex flex-row justify-between p-5">
                <Link to={'/Bigblock/' + dex.id} state = {{istag : false}} className="dexname">{dex.title}</Link>
                <a className="italic font-semibold underline" href="http://www.naver.com">hyper link</a>
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
        :
        <div className="self-center w-[755px] h-[460px] p-1 items-center justify-center bg-gradient-to-br rounded from-economy_tag/80">
        <div className="bigblock flex flex-col bg-white">
            <div className="flex flex-row justify-between p-5">
                <Link to={'/Bigblock/' + dex.id} state = {{istag : false}} className="economyname">{dex.title}</Link>
                <a className="italic font-semibold underline" href="http://www.naver.com">hyper link</a>
                <div className="flex flex-row">
                {dex.tags.map((id) => (
                    <Tag id={id} dexid={dex.id} />
                ))}
                </div>
            </div>
            <div className="flex flex-row">current rate description</div>
            <div>full description</div>
        </div>
        </div>}
        <div className="grid grid-cols-4 gap-5">
            {tagDexarr.map((dex) => (
                <SmallBlock dex={dex}/>
            ))}
        </div>
    </div>
);
};
