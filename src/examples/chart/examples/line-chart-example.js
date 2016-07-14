export class LineChartExample {
  loading = true;

  data = null;

  options = {
    scales: {
      yAxes: [{
        ticks: {
          beginAtZero: true
        }
      }]
    }
  };


  attached() {
    setTimeout(()=> {
      this.loading = false;
      this.data = {
        labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
        datasets: [{
          label: '# of Votes',
          data: [12, 19, 3, 5, 2, 3],
          backgroundColor: [
            'rgba(255, 99, 132, 0.2)'
          ],
          borderColor: [
            'rgba(255, 99, 132, 0.9)'
          ],
          borderWidth: 1
        }]
      };
    }, 1000)
  }
}
