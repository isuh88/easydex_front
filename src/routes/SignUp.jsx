import { useState } from "react";
import { DexBlock } from "../components/DexBlock";
import dexList from "../data/dex";

const SignUpPage = () => {
  const [dexes, setPostList] = useState(dexList);

  const handleChange = (e) => {};

  return (
    <div>
      This is CustomPage
      <div className="grid grid-cols-4 px-10 mt-10">
        {dexes.map((dex) => (
          <DexBlock key={dex.id} dex={dex} />
        ))}
      </div>
    </div>
  );
};

export default SignUpPage;
