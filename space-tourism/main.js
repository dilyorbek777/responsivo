fetch("./data.json")
.then(res=>res.json())
.then(data=>{
    console.log(data.planets);
    data.planets.forEach((element,index) => {
       console.log(element); 
       document.getElementById("viewer").innerHTML=`
       <p class="title">
                Pick your destination   
            </p>
            <div class="left">
                
                <div id="img-v">
        <img src="./image/${element.img}" >

                </div>
            </div>
            <div class="right">
                <div id="titles">
                ${element.name}
                </div>
                <div class="infos">
                    <h1 class="name">
                    ${element.name}
                    </h1>
                    <p class="describtion">

                    </p>
                    <p class="distance"></p>
                    <p class="time"></p>
                </div>
            </div>`
      
    });
   
})