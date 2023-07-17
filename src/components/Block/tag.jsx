import dexList from "../../data/dex";
import { BigBlock,SmallBlock } from "./index";
import { Link } from "react-router-dom";

// a 추후 onClick으로 대체
export const Tag = ({id},{dexid})=>{
  //dexid는 tag가 붙어있는 dex의 id
    const tagid = id;
    const dex = dexList.find(dex => dex.id === id);
    return (
      <div className="dextag">
        <Link to={'/Bigblock/'+tagid} state = {{ istag : true}}>{dex.title}</Link>
      </div>  
    );
};