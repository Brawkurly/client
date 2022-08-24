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
              data: changePrice?.map((item) => {
                return item?.price;
              }),
            },
          ]}
          options={{
            theme: {
              mode: "dark",
            },
            chart: {
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
            yaxis: {
              show: true,
              labels: {
                formatter: (val) =>
                  val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","),
              },
            },
            xaxis: {
              axisBorder: { show: true },
              labels: { show: true },
              axisTicks: { show: true },
              categories: changePrice?.map((price) => price?.createAt),
              type: "datetime",
              tickPlacement: "on",
            },
            markers: {
              size: 6,
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
