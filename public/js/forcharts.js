function updateCharts(){
    // Fetch block
    async function fetchData(){
        const url = 'http://localhost:3000/races'
        const respose = await fetch(url)
        // wait until the request has been completed
        const datapoints = await respose.json()
    console.log(datapoints) // test if it comes from the json

        return datapoints
}

// Making it into the graph
fetchData().then(datapoints => {
    const graphrace =  datapoints.map(function(index){
        return index.racetype
        
    })
    const graphtime =  datapoints.map(function(index){
        return index.tt
        
    })
    console.log(graphrace)
    console.log(graphtime)

    myChart.config.data.labels =graphrace
    myChart.config.data.datasets[0].data = graphtime
    myChart.update()


})
}

//updating line chart 100m
function updatelineCharts(){
// Fetch block
async function fetchData(){
    const url = 'http://localhost:3000/races'
    const respose = await fetch(url)
    // wait until the request has been completed
    const datapoints = await respose.json()
console.log(datapoints) // test if it comes from the json

    return datapoints
}

//types of races array
var hundred = []
var twohundred = []

fetchData().then(datapoints => {
const rttypes = datapoints.map(function(index){
    if(index.racetype == '100'){
        hundred.push(index.racetype)
    }else{
        twohundred.push(index.racetype)
    }
})
})

console.log("hundres " , hundred)
console.log("twohunie " , twohundred)

// Making it into the graph
fetchData().then(datapoints => {
const graphyear =  datapoints.map(function(index){
    return index.year
    
})
const graphtime =  datapoints.map(function(index){
    return index.tt
    
})
console.log(graphyear)
console.log(graphtime)

myChart.config.data.datasets[0].data = graphtime

myChart.config.data.labels =hundred

myChart.update()
})
}


//updating line chart 200m
function updatelineCharts2(){
// Fetch block
async function fetchData(){
    const url = 'http://localhost:3000/races'
    const respose = await fetch(url)
    // wait until the request has been completed
    const datapoints = await respose.json()
console.log(datapoints) // test if it comes from the json

    return datapoints
}

//types of races array
var hundred = []
var twohundred = []

fetchData().then(datapoints => {
const rttypes = datapoints.map(function(index){
    if(index.racetype == '100'){
        hundred.push(index.racetype)
    }else{
        twohundred.push(index.racetype)
    }
})
})

console.log("hundres " , hundred)
console.log("twohunie " , twohundred)

// Making it into the graph
fetchData().then(datapoints => {
const graphyear =  datapoints.map(function(index){
    return index.year
    
})
const graphtime =  datapoints.map(function(index){
    return index.tt
    
})
console.log(graphyear)
console.log(graphtime)

myChart.config.data.datasets[0].data = graphtime
myChart.config.data.labels =twohundred

myChart.update()
})
}



//updating pie chart
function updatepieCharts(){
// Fetch block
async function fetchData(){
    const url = 'http://localhost:3000/races'
    const respose = await fetch(url)
    // wait until the request has been completed
    const datapoints = await respose.json()
console.log(datapoints) // test if it comes from the json

    return datapoints
}

var gold = []
var silver = []
var bronze = []
var nonemedals = []


fetchData().then(datapoints => {
const arraymedals =  datapoints.map(function(index){
    if(index.medal == 'Gold'){
        gold.push(index.medal)
    } 
    if(index.medal == 'Silver'){
        silver.push(index.medal)
    }
    if(index.medal == 'Bronze'){
        bronze.push(index.medal)
    }
    else{
        nonemedals.push(index.medal)
    }

})
})

console.log("goldmedals" , gold)




// Making it into the graph
fetchData().then(datapoints => {
const graphyear =  datapoints.map(function(index){
    return index.year
    
})
const graphmedals =  datapoints.map(function(index){
    return index.medal
    
})
console.log(graphyear)
console.log("medals" ,graphmedals)
console.log("graphmedals type" ,typeof(graphmedals))
console.log("gold medals  type" ,typeof(gold))


// myChart.config.data.labels =graphyear
myChart.configpie.datadoughnut.datasets[0].data = graphmedals
myChart.update()


})
}

// setup
const data = {
labels:[] ,
datasets: [{
    label: 'Race Timings',
    data: [],
    backgroundColor: 'rgb(128,0,128)' ,
    borderColor:'rgba(0, 0, 0, 0.5)',
    borderWidth: 1,
    tension :0.3
}]
}

// setupline
const dataline = {
labels:[],
datasets: [{

    label: ' 100 Race Timings',
    data: [],
    backgroundColor: 'rgb(128,58,128)',
    borderColor:'rgba(0, 0, 0, 0.5)',
    borderWidth: 1,
    tension :0.3 ,
    yAxisID: 'y'
}
]
}
const dataline2 = {
    labels:[],
    datasets: [{  
        label: ' 200 Race Timings',
        data: [],
        backgroundColor: 'rgb(128,58,128)',
        borderColor:'rgba(0, 0, 0, 0.5)',
        borderWidth: 1,
        tension :0.3 ,
        yAxisID: 'y'
    }
    ]
    }

// setup
const datadoughnut = {
labels:['Gold' ,'Silver' , 'Bronze' , "None"] ,
datasets: [{
    label: 'Race Timings',
    data: [],
    backgroundColor: [
        'rgb(255, 99, 132)',
  'rgb(54, 162, 235)',
  'rgb(255, 205, 86)'
    ] ,

    hoverOffset: 4
    
}]
}



//config 
const config = {
type :'bar',
data,
options: {
    resposive :true ,
    maintainAspectRatio: false ,
    scales: {
        y: {
            beginAtZero :true
        }
    }
}
}

//config 
const configline = {
type :'line',
data : dataline,
options: {
    resposive :true ,
    maintainAspectRatio: false ,
    scales: {
        y: {
            beginAtZero :true
        }
    }
}

}

//config 
const configlinetwo = {
    type :'line',
    data : dataline2,
    options: {
        resposive :true ,
        maintainAspectRatio: false ,
        scales: {
            y: {
                beginAtZero :true
            }
        }
    }
    
    }
//config 
const configpie = {
type :'doughnut',
data :  datadoughnut,
options: {
    resposive :true ,
    maintainAspectRatio: false ,
}
}
//config 
const configbubble = {
type :'bubble',
data,
options: {
    resposive :true ,
    maintainAspectRatio: false ,
    scales: {
        y: {
            beginAtZero :true
        }
    }
}
}


let myChart = new Chart(
document.getElementById('myCharthp'), config 
    )  


function chartType(type){
//destroy the current chart
myChart.destroy()
if(type ==='line'){
    myChart = new Chart(
        document.getElementById('myCharthp'), configline
            )  
myChart.config.type = type

updatelineCharts()    

}
if(type ==='bar'){
myChart = new Chart(
    document.getElementById('myCharthp'), config
        )  
myChart.config.type = type

updateCharts()            
}
if(type ==='doughnut'){
myChart = new Chart(
    document.getElementById('myCharthp'), configpie
        )  
myChart.config.type = type

updatepieCharts()            
}
if(type ==='bubble'){
myChart = new Chart(
    document.getElementById('myCharthp'), configbubble
        )  
myChart.config.type = type

updateCharts()            
}

}

function chartType2(type){
    //destroy the current chart
    myChart.destroy()
if(type ==='line'){
    myChart = new Chart(
        document.getElementById('myCharthp'), configlinetwo
            )  
myChart.config.type = type

updatelineCharts2()            
}
}