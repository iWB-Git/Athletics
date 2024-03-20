// // var data = races.jsonarray.map(function(e) {
// //     return e.age;
// //  });;
 
// //  var ctx = canvas.getContext('2d');
// //  var config = {
// //     type: 'line',
// //     data: {
// //        labels: labels,
// //        datasets: [{
// //           label: 'Graph Line',
// //           data: data,
// //           backgroundColor: 'rgba(0, 119, 204, 0.3)'
// //        }]
// //     }
// //  };


// <script src="https://cdn.jsdelivr.net/npm/chart.js"></script>


//     // Fetch block
//     async function fetchData(){
//         const url = 'races.json'
//         const respose = await fetch(url)
//         // wait until the request has been completed
//         const datapoints = await respose.json()
//        console.log(datapoints) // test if it comes from the json


//         return datapoints
//     }

//    //  //Making it into the graph
//    //  fetchData().then(datapoints => {
//    //      const 
//    //  })
//   const ctx = document.getElementById('myChart');

//   new Chart(ctx, {
//     type: 'bar',
//     data: {
//       labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
//       datasets: [{
//         label: '# of Votes',
//         data: [12, 19, 3, 5, 2, 3],
//         borderWidth: 1
//       }]
//     },
//     options: {
//       scales: {
//         y: {
//           beginAtZero: true
//         }
//       }
//     }
//   });
