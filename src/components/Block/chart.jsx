import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
  } from 'chart.js';
  import { Line } from 'react-chartjs-2';
  import { watchDex,getDexes,getDexesAPI,pullDexes } from "../../apis/api";
  import dexList from '../../data/dex';
  //기본 Line 차트
  //https://react-chartjs-2.js.org/examples/line-chart
  
  ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
  );
  export const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
        display: false,
      },
      title: {
        display: false,
        text: 'Chart.js Line Chart',
      },
    },
  };
  
  const dummy ={"14" : 1400.00, "15" : 1500.00,"16" : 1600.00, "17" : 1700.00};
  const xDatas = Object.keys(dummy);
  const yDatas = Object.values(dummy);

  
  export const data = {
    labels: xDatas,
    datasets: [
      {
        label: 'dex_name', //그래프 분류되는 항목
        data: yDatas, //실제 그려지는 데이터(Y축 숫자)
        borderColor: 'rgb(255, 99, 132)', //그래프 선 color
        backgroundColor: 'rgba(255, 99, 132, 0.5)', //마우스 호버시 나타나는 분류네모 표시 bg
      },
    ],
  };
  
  export function LineChart({dex}) {
    // const xDatas = Object.keys(dex.value);
    // const yDatas = Object.values(dex.value);
    // const data = {
    //   labels : xDatas,
    //   datasets: [
    //     {
    //       label: 'dex.title', //그래프 분류되는 항목
    //       data: yDatas, //실제 그려지는 데이터(Y축 숫자)
    //       borderColor: 'rgb(255, 99, 132)', //그래프 선 color
    //       backgroundColor: 'rgba(255, 99, 132, 0.5)', //마우스 호버시 나타나는 분류네모 표시 bg
    //     },
    //   ],
    // };
  
    return (
      <div className='contentWrap'>
        <div className='contentInner'>
          <Line options={options} data={data} />
        </div>
      </div>
    );
  }