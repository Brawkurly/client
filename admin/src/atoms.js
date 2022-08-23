import { atom, selector } from "recoil";

export const Data = atom({
  key: "Data",
  default: {},
});

export const lowCom = selector({
  key: "lowCom",
  get: ({ get }) => {
    const { competitorPrice } = get(Data);
    let lowKey = "";
    let lowValue = 9999999999;

    competitorPrice?.forEach((data) => {
      if (data.price < lowValue) {
        lowKey = data.competitor;
        lowValue = data.price;
      }
    });
    return { name: lowKey, price: lowValue };
  },
});
