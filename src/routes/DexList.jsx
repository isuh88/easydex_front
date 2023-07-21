import { useState } from "react";
import { DexBlock } from "../components/DexBlock";
import useDexList from "../data/dex";
import { BigBlock,SmallBlock } from "../components/Block/index";
import { Tag } from "../components/Block/tag";
import { Link } from "react-router-dom";
import { getSessionStorage } from "../utils/cookie";

const DexListPage = () => {
  // const dexList = useDexList();
  // const { dexList, watchDexList } = useDexList();
  const dexList = getSessionStorage('cachedDexList');
  console.log(`DexList is ${dexList}`);

  const handleChange = (e) => {};

  return (
    <div>
      <div class="flex flex-col dexlist-layout">
        <div class="overflow-x-auto sm:-mx-6 lg:-mx-8 dexlist">
          <div class="inline-block min-w-full py-2 sm:px-6 lg:px-8">
            <div class="overflow-hidden">
              <table class="min-w-full text-left text-sm font-light">
                <thead class="border-b font-medium dark:border-neutral-500">
                  <tr>
                    <th scope="col" class="px-6 py-4">
                      #
                    </th>
                    <th scope="col" class="px-6 py-4">
                      Title
                    </th>
                    <th scope="col" class="px-6 py-4">
                      Value
                    </th>
                    <th scope="col" class="px-6 py-4">
                      Tags
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {/* <tr class="border-b transition duration-300 ease-in-out hover:bg-neutral-100 dark:border-neutral-500 dark:hover:bg-neutral-600">
                    <td class="whitespace-nowrap px-6 py-4 font-medium">1</td> 
                    <td class="whitespace-nowrap px-6 py-4">Mark</td>
                    <td class="whitespace-nowrap px-6 py-4">Otto</td>
                    <td class="whitespace-nowrap px-6 py-4">@mdo</td>
                  </tr>
                  <tr class="border-b transition duration-300 ease-in-out hover:bg-neutral-100 dark:border-neutral-500 dark:hover:bg-neutral-600">
                    <td class="whitespace-nowrap px-6 py-4 font-medium">2</td>
                    <td class="whitespace-nowrap px-6 py-4">Jacob</td>
                    <td class="whitespace-nowrap px-6 py-4">Thornton</td>
                    <td class="whitespace-nowrap px-6 py-4">@fat</td>
                  </tr>
                  <tr class="border-b transition duration-300 ease-in-out hover:bg-neutral-100 dark:border-neutral-500 dark:hover:bg-neutral-600">
                    <td class="whitespace-nowrap px-6 py-4 font-medium">3</td>
                    <td class="whitespace-nowrap px-6 py-4">Larry</td>
                    <td class="whitespace-nowrap px-6 py-4">Wild</td>
                    <td class="whitespace-nowrap px-6 py-4">@twitter</td>
                  </tr> */}
                  {dexList.map((dex)=>(
                    <DexInfo dex={dex} />
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DexListPage;

const DexInfo = ({dex}) =>{
// 순서  1. id, 2. title, 3. closing, 4. tags
// 3번째 td에 5000을 추후 dex.closing으로 수정
return (<>
  <tr class="border-b transition duration-300 ease-in-out hover:bg-neutral-100 dark:border-neutral-500 dark:hover:bg-neutral-600">
  <td class="whitespace-nowrap px-6 py-4 font-medium">{dex.id}</td> 
  <td class="whitespace-nowrap px-6 py-4">                  
    <Link
      to={"/Bigblock/" + dex.id}
      state={{ istag: false }}>
      {dex.title}
    </Link>
  </td>
  <td class="whitespace-nowrap px-6 py-4">5000</td>
  <td class="whitespace-nowrap px-6 py-4 flex flex-row">
    {dex.tags.map((id)=>(
    <Tag id={id} dexid={dex.id}/>
  ))}
  </td>
</tr></>
);};