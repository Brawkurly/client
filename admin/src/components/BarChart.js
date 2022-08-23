import { useRecoilValue } from "recoil";
import { Data } from "../atoms";
import ApexChart from "react-apexcharts";

function BarChart() {
  const { consumerReserveCnt } = useRecoilValue(Data);

  return (
    <>
      {!consumerReserveCnt ? (
        "nowLoading"
      ) : (
        <ApexChart
          height={"100%"}
          type="bar"
          series={[
            {
              name: "Count",
              data: consumerReserveCnt?.map((item) => item?.cnt),
            },
          ]}
          options={{
            theme: {
              mode: "dark",
            },
            chart: {
              height: 100,
              width: 100,
              toolbar: {
                show: false,
              },
              background: "transparent",
            },
            stroke: {
              curve: "smooth",
              width: 1,
            },
            xaxis: {
              axisBorder: { show: false },
              labels: { show: true },
              axisTicks: { show: false },
              categories: consumerReserveCnt?.map((price) => price?.price),
              type: "number",
            },
            colors: ["#6650d3"],
            fill: {
              type: ["gradient"],
              gradient: { gradientToColors: ["#6c7592"], stops: [0, 100] },
            },
            tooltip: {
              theme: "dark",
            },
            plotOptions: {
              bar: {
                borderRadius: 4,
                horizontal: true,
              },
            },
          }}
        />
      )}
    </>
  );
}

export default BarChart;
