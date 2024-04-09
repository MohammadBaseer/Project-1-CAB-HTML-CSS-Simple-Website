console.log("hello World", apikey);

function getApi(getAPIFomJson) { 
    var pBox = document.getElementById("pBox"); //


    
    for (let i = 0; i < getAPIFomJson.length; i++) {
        
        var pContainer = document.createElement("div");
        pBox.appendChild(pContainer);
        


    var pTitle = document.createElement("p");
    pTitle.innerText = getAPIFomJson[i].title;

    pContainer.appendChild(pTitle);

console.log(pTitle);

    
}


}

getApi(apikey);
