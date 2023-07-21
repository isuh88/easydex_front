// import { useEffect, useState } from 'react';
// import { getDexes, pullDexes } from "../apis/api";

// // 캐싱된 dexList 변수
// let cachedDexList = [];

// const useDexList = () => {
//   const [dexList, setDexList] = useState(cachedDexList);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         // Check if cachedDexList is empty, if yes, fetch from backend and cache the result
//         if (cachedDexList.length === 0) {
//           console.log("isempty");
//           await pullDexes();
//           const dexes = await getDexes();
//           console.log("fetch completed");
//           cachedDexList = dexes;
//           setDexList(cachedDexList);
//         }
//       } catch (error) {
//         console.error('Error fetching dex data:', error);
//       }
//     };

//     fetchData();
//   }, []);

//   return dexList;
// };

// export default useDexList;









// import { useEffect, useState } from 'react';
// import { getDexes, pullDexes, getUser } from '../apis/api';
// import { getCookie } from '../utils/cookie';

// let cachedDexList = [];


// const useDexList = () => {
//   const [cachedDexList, setCachedDexList] = useState([]);
//   const [cachedWatchDexList, setCachedWatchDexList] = useState([]);
//   const [isUser, setIsUser] = useState('');

//   useEffect(() => {
//     const user = getCookie("access_token") ? true : false;
//     setIsUser(user);
//   }, []);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         if (cachedDexList.length === 0) {
//           await pullDexes();
//           const dexes = await getDexes();
//           setCachedDexList(dexes);
//         }

//         if (isUser && cachedWatchDexList.length === 0) {
//           const user = await getUser(); // async 함수 내에서 await 사용
//           const watchingDex = cachedDexList.filter((dex) => dex.watching_users.includes(user.id) > 0);
//           setCachedWatchDexList(watchingDex);
//         }
//       } catch (error) {
//         console.error('지표 데이터를 가져오는 도중 오류가 발생했습니다:', error);
//       }
//     };

//     fetchData();
//   }, [isUser, cachedDexList]);

//   useEffect(() => {
//     const updateWatchDexList = async () => {
//       if (isUser) {
//         const user = await getUser(); // async 함수 내에서 await 사용
//         const watchingDex = cachedDexList.filter((dex) => dex.watching_users.includes(user.id) > 0);
//         setCachedWatchDexList(watchingDex);
//       }
//     };

//     updateWatchDexList();
//   }, [isUser, cachedDexList]);

//   return { dexList: cachedDexList, watchDexList: cachedWatchDexList };
// };

// export default useDexList;











// import { useEffect, useState } from 'react';
// import { getDexes, pullDexes, getUser } from '../apis/api';
// import { getCookie, setLocalStorage, getLocalStorage } from '../utils/cookie';

// const useDexList = () => {
//   const [cachedDexList, setCachedDexList] = useState([]);
//   const [cachedWatchDexList, setCachedWatchDexList] = useState([]);
//   const [isUser, setIsUser] = useState('');

//   useEffect(() => {
//     const user = getCookie('access_token') ? true : false;
//     setIsUser(user);
//   }, []);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         // 최초 접속 시에는 localStorage에서 dexList를 불러옵니다.
//         const cachedDexes = getLocalStorage('cachedDexList');
//         if (cachedDexes) {
//           setCachedDexList(cachedDexes);
//         } else {
//           await pullDexes();
//           const dexes = await getDexes();
//           setCachedDexList(dexes);
//           // 최초로 받아온 dexList를 localStorage에 저장합니다.
//           setLocalStorage('cachedDexList', dexes);
//         }
//       } catch (error) {
//         console.error('지표 데이터를 가져오는 도중 오류가 발생했습니다:', error);
//       }
//     };

//     fetchData();
//   }, []); // Run only once on initial mount to fetch the dexList.

//   useEffect(() => {
//     const updateWatchDexList = async () => {
//       if (isUser && cachedDexList.length > 0) {
//         const user = await getUser();
//         const watchingDex = cachedDexList.filter((dex) => dex.watching_users.includes(user.id) > 0);
//         setCachedWatchDexList(watchingDex);
//       }
//     };

//     updateWatchDexList();
//   }, [isUser, cachedDexList]);

//   return { dexList: cachedDexList, watchDexList: cachedWatchDexList };
// };

// export default useDexList;





import { useEffect, useState } from 'react';
import { getDexes, pullDexes, getUser } from '../apis/api';
import { getCookie, setLocalStorage, getLocalStorage } from '../utils/cookie';

const useDexList = () => {
  const [cachedDexList, setCachedDexList] = useState([]);
  const [cachedWatchDexList, setCachedWatchDexList] = useState([]);
  const [isUser, setIsUser] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const user = getCookie('access_token') ? true : false;
        setIsUser(user);

        // 최초 접속 시에는 localStorage에서 dexList를 불러옵니다.
        const cachedDexes = getLocalStorage('cachedDexList');

        if (cachedDexes) {
          setCachedDexList(cachedDexes);
        } else {
          await pullDexes();
          const dexes = await getDexes();
          setCachedDexList(dexes);
          // 최초로 받아온 dexList를 localStorage에 저장합니다.
          setLocalStorage('cachedDexList', dexes);
        }

        if (user && cachedDexList.length > 0) {
          const watchingDex = cachedDexList.filter((dex) => dex.watching_users.includes(user.id) > 0);
          setCachedWatchDexList(watchingDex);
        }

        // console.log(cachedDexList);

      } catch (error) {
        console.error('지표 데이터를 가져오는 도중 오류가 발생했습니다:', error);
      }
    };

    fetchData();
  }, []);

  return { dexList: cachedDexList, watchDexList: cachedWatchDexList };
};

export default useDexList;