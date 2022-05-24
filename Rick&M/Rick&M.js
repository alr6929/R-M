
 window.onload = (e) => {document.querySelector("button").onclick = searchButtonClicked};	

 let displayTerm = "";
function searchButtonClicked(){
 
    const URL = 'https://rickandmortyapi.com/api/character/';

    let url = URL;
   let sp = document.querySelector('#species');
  let st =  document.querySelector('#status');
    let ge = document.querySelector('#gender');

    
   displayTerm = sp.value;
    url +='?' + 'species=' + displayTerm;
   
    let term = st.value;
     url +='&' + 'status=' + term;

  
 term = ge.value;
         url +='&' + 'gender=' + term;
        


   

        console.log(url);
        getData(url);
    }
    function getData(url){
        let xhr = new XMLHttpRequest();
        xhr.onload = dataLoaded;
        xhr.onerror = dataError;
        xhr.open("GET", url);
        xhr.send();
    }
    function dataLoaded(e){

    let xhr = e.target;
    console.log(xhr.responseText);
    let obj = JSON.parse(xhr.responseText);
    if(!obj.info || obj.info.length ==0){
        document.querySelector('#content').innerHTML = "<p>No results found.</p>";
        return
    }
    let results = obj.results;


   let bigString='';
    for(let i = 0; i<results.length; i++){
         let result = results[i];
    

    let line = `<figure> <img src ='${result.image}'alt ='${result.id}'/> <figcaption> '${result.name}'</figcaption> </figure>`
        
    bigString+=line;
       
    
   
    
} 
document.querySelector("#content").innerHTML = bigString;
    }
  

    function dataError(e){
        console.log('An error occured');
    }

