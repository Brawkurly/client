import { useRecoilValue } from "recoil";
import { Data } from "../atoms";
import ApexChart from "react-apexcharts";

function LineChart() {
  const { changePrice } = useRecoilValue(Data);

  return (
    <>
      {!changePrice ? (
        "nowLoading"
      ) : (
        <ApexChart
          height={"100%"}
          type="line"
          series={[
            {
              name: "Price",
              data: changePrice?.map((item) => item?.price),
            },
          ]}
          options={{
            theme: {
              mode: "dark",
            },
            chart: {
              height: "50px",
              toolbar: {
                show: false,
              },
              background: "transparent",
            },
            grid: { show: true },
            stroke: {
              curve: "smooth",
              width: 10,
            },
            yaxis: { show: true },
            xaxis: {
              axisBorder: { show: false },
              labels: { show: true },
              axisTicks: { show: false },
              categories: changePrice?.map((price) => price?.createAt),
              type: "datetime",
            },
            colors: ["#6650d3"],
            fill: {
              type: ["gradient"],
              gradient: { gradientToColors: ["#6c7592"], stops: [0, 100] },
            },
            tooltip: {
              // y: { formatter: (value) => `$ ${value.toFixed(3)}` },
              theme: "dark",
            },
          }}
        />
      )}
    </>
  );
}

export default LineChart;
