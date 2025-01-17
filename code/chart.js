//DOM-selector for the canvas 👇
const ctx = document.getElementById("chart").getContext("2d");

//"Draw" the chart here 👇

const drawChart = (amount) => {
  const config = {
    type: "doughnut",
    data: {
      labels: ["Projects Finished", "Projects Left"],
      datasets: [
        {
          label: "My First Dataset",
          data: [amount, 19 - amount],
          backgroundColor: ["#58a6ff", "rgb(255, 0, 0)", "rgb(255, 205, 86)"],
          hoverOffset: 4,
        },
      ],
    },
  };

  const statistics = new Chart(ctx, config);
};
