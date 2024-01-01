const fullStar =
  "M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z";
const halfStar =
  "M5.354 5.119 7.538.792A.516.516 0 0 1 8 .5c.183 0 .366.097.465.292l2.184 4.327 4.898.696A.537.537 0 0 1 16 6.32a.548.548 0 0 1-.17.445l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256a.52.52 0 0 1-.146.05c-.342.06-.668-.254-.6-.642l.83-4.73L.173 6.765a.55.55 0 0 1-.172-.403.58.58 0 0 1 .085-.302.513.513 0 0 1 .37-.245l4.898-.696zM8 12.027a.5.5 0 0 1 .232.056l3.686 1.894-.694-3.957a.565.565 0 0 1 .162-.505l2.907-2.77-4.052-.576a.525.525 0 0 1-.393-.288L8.001 2.223 8 2.226v9.8z";

const filledStarColor = "#d6bd00";
const emptyStarColor = "#a5a5a1";

export const MonthData = [
  {
    name: "HAVIT HV-G92 Gamepad",
    iconKey: "https://i.imgur.com/urJWqiW.png",
    style: "h-[152px] w-[172px]",
    discount: "-40%",
    discountStyle: "ml-0 mt-16",
    heartStyle: "mt-16 mr-0",
    discountedPrice: "$120",
    price: "$160",
    StarColor1: filledStarColor,
    Star1: fullStar,
    StarColor2: filledStarColor,
    Star2: fullStar,
    StarColor3: filledStarColor,
    Star3: fullStar,
    StarColor4: filledStarColor,
    Star4: fullStar,
    StarColor5: filledStarColor,
    Star5: fullStar,
    rating: "(88)",
  },
  {
    name: "AK-900 Wired Keyboard",
    iconKey: "https://i.imgur.com/R9SsS1q.png",
    style: "w-[191px] h-[101px] mt-5",
    discount: "-35%",
    discountStyle: "-mt-9 ml-5",
    heartStyle: "-mt-10 mr-2",
    discountedPrice: "$960",
    price: "$1160",
    StarColor1: filledStarColor,
    Star1: fullStar,
    StarColor2: filledStarColor,
    Star2: fullStar,
    StarColor3: filledStarColor,
    Star3: fullStar,
    StarColor4: filledStarColor,
    Star4: fullStar,
    StarColor5: emptyStarColor,
    Star5: fullStar,
    rating: "(75)",
  },
  {
    name: "IPS LCD Gaming Monitor",
    iconKey: "https://i.imgur.com/Z7gu4CB.png",
    style: "w-[170px] h-[129px] mt-5",
    discount: "-30%",
    discountStyle: "-mt-1 ml-4",
    heartStyle: "-mt-2 mr-2",
    discountedPrice: "$370",
    price: "$400",
    StarColor1: filledStarColor,
    Star1: fullStar,
    StarColor2: filledStarColor,
    Star2: fullStar,
    StarColor3: filledStarColor,
    Star3: fullStar,
    StarColor4: filledStarColor,
    Star4: fullStar,
    StarColor5: filledStarColor,
    Star5: fullStar,
    rating: "(99)",
  },
  {
    name: "S-Series Comfort Chair",
    iconKey: "https://i.imgur.com/fwgTScZ.png",
    style: "w-[107px] h-[180px]",
    discount: "-25%",
    discountStyle: "ml-4 mt-6",
    heartStyle: "mt-4 mr-2",
    discountedPrice: "$375",
    price: "$400",
    StarColor1: filledStarColor,
    Star1: fullStar,
    StarColor2: filledStarColor,
    Star2: fullStar,
    StarColor3: filledStarColor,
    Star3: fullStar,
    StarColor4: filledStarColor,
    Star4: fullStar,
    StarColor5: filledStarColor,
    Star5: halfStar,
    rating: "(99)",
  },
];
