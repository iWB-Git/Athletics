const server = 'http://localhost:3000';

var champname
var year
var racetype
var timetaken
var medal
var ath

async function fetchathlete() {
    const url = server + '/races';
    const options = {
        method: 'GET',
        headers: {
            'Accept' : 'application/json'
        }
    }
    const response = await fetch(url, options);
    const athlete = await response.json();
    populateContent(athlete);
    ath=athlete
}

async function addathlete() {
    const url = server + '/races';
    const athlete = {id: champname, year: year,racetype: racetype, tt: timetaken, 
                                    medal: medal};
    const options = {
        method: 'POST',
        headers: {
            'Content-Type' : 'application/json'
        },
        body: JSON.stringify(athlete)
    }
    const response = await fetch(url, options);
}



async function deletethlete(athletes) {
    
    var dele = athletes.parentNode.parentNode
    var nlist=athletes.parentNode.parentNode
    var nnlist=nlist.parentNode.rows
    var index=nnlist.length-nlist.rowIndex
    var ind=nlist.rowIndex
    dele.parentNode.removeChild(dele)
    var athle=[];
    // ath.splice(index,1)
    var i=1;
    ath.forEach(ath=>{
        if(ind==i){

        }else{
            athle.push(ath)

        }
        i++;
    })
    ath=athle
    populateContent(athle);
    


    const url = server + '/races';
    const options = {
        method: 'DELETE',
        headers: {
            'Content-Type' : 'application/json'
        },
        body: JSON.stringify(athle)
    }
    const response = await fetch(url, options);
}

async function getAthlete(){
    const url = server + '/races';
    const options = {
        method: 'GET',
        headers: {
            'Accept' : 'application/json'
        }
    }
    const response = await fetch(url, options);
    const athlete = await response.json();
    return athlete
}





function populateContent(athlete) {
    var table = document.getElementById('content');
    table.innerHTML = "<tr><th>Chapionship Name</th><th>Year</th><th>Race Type</th><th>Time Taken(s)</th><th>Medal</th></tr>";
    athlete.forEach(athlete => {
        var row = document.createElement('tr');
        var dataId = document.createElement('td');
        var textId = document.createTextNode(athlete.id);
        dataId.appendChild(textId);
        var datayear = document.createElement('td');
        var textyear = document.createTextNode(athlete.year);
        datayear.appendChild(textyear);
        var dataRT = document.createElement('td');
        var textRT = document.createTextNode(athlete.racetype);
        dataRT.appendChild(textRT);
        var datatime = document.createElement('td');
        var texttime = document.createTextNode(athlete.tt);
        datatime.appendChild(texttime);
        var datamedal = document.createElement('td');
        var textmedal = document.createTextNode(athlete.medal);
        datamedal.appendChild(textmedal);
        

        var edit= document.createElement('td');
        edit.innerHTML= '<input type = "button" name = "Edit" value = "Edit" onClick = "EdData(this);" >'

        var dataDelete = document.createElement('td');
        dataDelete.innerHTML= '<input type = "button" name = "Delete" value = "Delete" onClick = "deletethlete(this);" >'


        row.appendChild(dataId);
        row.appendChild(datayear);
        row.appendChild(dataRT);
        row.appendChild(datatime);
        row.appendChild(datamedal);
        row.appendChild(edit);
        row.appendChild(dataDelete);
        table.appendChild(row);
        
    });
}

document.querySelector('form').addEventListener('submit', (e) => {
    
     champname = document.getElementById('champname').value;
     year = document.getElementById('year').value;
     racetype = document.getElementById('racetype').value;
     timetaken = document.getElementById('timetaken').value;
     medal = document.getElementById('medal').value;
    if (champname && year && racetype && timetaken && medal ) {
        // studentId = parseInt(studentId);
        addathlete();
        fetchathlete();
    }
    e.preventDefault();
});






function openForm() {
    
    document.getElementById("myForm").style.display = "block";
  }
  
  function closeForm() {
    document.getElementById("myForm").style.display = "none";
  }

window.addEventListener('scroll',()=>{
    
    const scrolled=window.scrollY;
    console.log(scrolled);
    var element = document.getElementById("imgr");
    var element2 = document.getElementById("title");
    var element3 = document.getElementById("content-left");
    if(scrolled>400){
        
        element.classList.remove("visibility");
        element2.classList.add("absolution")
        element3.classList.add("left")
        element.classList.add("hidden");
    }else{

        element.classList.remove("hidden");
        element2.classList.remove("absolution")
        element3.classList.remove("left")

        
        element.classList.add("visibility");
    }
})