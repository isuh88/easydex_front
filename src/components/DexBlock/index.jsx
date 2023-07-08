export const DexBlock = ({ dex }) => {
  const onClickLike = () => {
    console.log("나도 좋아!");
		// add api call for liking post here
  };

  return (
    <div className="w-64 relative block group py-10 px-8 mr-5 my-5 ring-8 ring-transparent border-2 border-box border-white hover:bg-orange-400 hover:text-black hover:border-transparent hover:ring-orange-200 rounded-xl font-medium">
      <div className="flex flex-wrap mt-5">
        this is dexBlock for dexID: {dex.id}
      </div>
      <div onClick={onClickLike}>
        You May Click Here for onClick Method
      </div>
    </div>
  );
};
