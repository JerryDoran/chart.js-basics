const pollData = [
  {
    option: 'Spiderman',
    votes: 11,
    color: 'rgba(255, 99, 132, 0.5)',
  },
  {
    option: 'Superman',
    votes: 22,
    color: 'rgba(54, 162, 235, 0.5)',
  },
  {
    option: 'Batman',
    votes: 11,
    color: 'rgba(255, 206, 86, 0.5)',
  },
  {
    option: 'Son Goku',
    votes: 5,
    color: 'rgba(75, 192, 192, 0.5)',
  },
  {
    option: 'Hulk',
    votes: 8,
    color: 'rgba(153, 102, 255, 0.5)',
  },
  {
    option: 'Wolverine',
    votes: 9,
    color: 'rgba(255, 159, 64, 0.5)',
  },
  {
    option: 'Other',
    votes: 10,
    color: 'rgba(75, 125, 200, 0.5)',
  },
];

Chart.defaults.global.defaultFontFamily = 'sans-serif';

const ctx = document.getElementById('chart').getContext('2d');
const pollChart = new Chart(ctx, {
  type: 'bar',
  data: {
    labels: pollData.map((pollOption) => pollOption.option),
    datasets: [
      {
        label: '# of Votes',
        data: pollData.map((pollOption) => pollOption.votes),
        backgroundColor: pollData.map((pollOption) => pollOption.color),
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)',
          'rgba(75, 125, 200, 1)',
        ],
        borderWidth: 1,
      },
    ],
  },
  options: {
    scales: {
      yAxes: [
        {
          ticks: {
            beginAtZero: true,
          },
        },
      ],
    },
    title: {
      display: true,
      text: 'Favorite Super Heros',
      fontColor: '#333',
      fontSize: 18,
      padding: 20,
    },
    aspectRatio: 2 / 1,
    legend: {
      display: false,
    },
  },
});
