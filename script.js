/*Fill your code */
//total price to be paid by the customer
var totalPrice=0; 
//state mof buy button
var buyButton=false
// indicates number of layers
var noOfLayers=0;
//checks if buy button is active
var isBuyActive=true
//state of ingredients of cake
var state={
    chocolate:false,
    strawBerry:false,
    butterScotch:false,
    vanilla:false,
    redVelvet:false
}
//width of each layer
var layerWidth={
  1:"245px",
  2:"200px",
  3:"160px",
  4:"120px",
  5:"80px"
}

//prices of ingedients of cake
var price={
    chocolate:300,
    strawBerry:100,
    butterScotch:200,
    vanilla:250,
    redVelvet:350
}


//to render chocolate
function renderChocolate(){
    if(noOfLayers<5){
      noOfLayers++
      let newElement=document.createElement("div")
      newElement.classList.add("layer1")
      newElement.style.width=layerWidth[noOfLayers]
      document.querySelector("#cake").prepend(newElement)
      totalPrice+=price["chocolate"]
      let newItem=document.createElement("div")
      newItem.classList.add("item")
      newItem.innerHTML="CHOCOLATE----300"
      document.querySelector(".totalBill").append(newItem)
    }
}
//to render strawberry
function renderStrawBerry(){
    if(noOfLayers<5){
      noOfLayers++
      let newElement=document.createElement("div")
      newElement.classList.add("layer2")
      newElement.style.width=layerWidth[noOfLayers]
      document.querySelector("#cake").prepend(newElement)
      totalPrice+=price["strawBerry"]
      let newItem=document.createElement("div")
      newItem.classList.add("item")
      newItem.innerHTML="STRAWBERRY----100"
      document.querySelector(".totalBill").append(newItem)
    }
}

//to render butterscotch
function renderButterScotch(){
    if(noOfLayers<5){
      noOfLayers++
      let newElement=document.createElement("div")
      newElement.classList.add("layer3")
      newElement.style.width=layerWidth[noOfLayers]
      document.querySelector("#cake").prepend(newElement)
      totalPrice+=price["butterScotch"]
      let newItem=document.createElement("div")
      newItem.classList.add("item")
      newItem.innerHTML="BUTTERSCOTCH----200"
      document.querySelector(".totalBill").append(newItem)
    }

}
//to render vanilla
function renderVanilla(){
    if(noOfLayers<5){
      noOfLayers++
      let newElement=document.createElement("div")
      newElement.classList.add("layer4")
      newElement.style.width=layerWidth[noOfLayers]
      document.querySelector("#cake").prepend(newElement)
      totalPrice+=price["vanilla"]
      let newItem=document.createElement("div")
      newItem.classList.add("item")
      newItem.innerHTML="VANILLA----250"
      document.querySelector(".totalBill").append(newItem)
    }

}
//to render redvelvet
function renderRedVelvet(){
    if(noOfLayers<5){
      noOfLayers++
      let newElement=document.createElement("div")
      newElement.classList.add("layer5")
      newElement.style.width=layerWidth[noOfLayers]
      document.querySelector("#cake").prepend(newElement)
      totalPrice+=price["redVelvet"]
      let newItem=document.createElement("div")
      newItem.classList.add("item")
      newItem.innerHTML="REDVELVET----350"
      document.querySelector(".totalBill").append(newItem)
    }

}
//on clicking buy button
function clickBuy(){
    if((noOfLayers===5) && isBuyActive){
        console.log("hi")
        console.log("hi")
        let newElement=document.createElement("div");
        newElement.classList.add("total")
        newElement.innerHTML=`TOTAL----${totalPrice}`
        document.querySelector(".totalBill").appendChild(newElement);
        let cakeImage=document.createElement("img");
        cakeImage.id="cakeImage"
        cakeImage.src="data:image/jpeg;base64,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"
        document.querySelector("#cake").prepend(cakeImage)
        isBuyActive=!isBuyActive
     }
}

// adding event listeners to buttons
document.querySelector("#buttonChocolate").addEventListener("click",renderChocolate);
document.querySelector("#buttonStrawBerry").addEventListener("click",renderStrawBerry);
document.querySelector("#buttonButterScotch").addEventListener("click",renderButterScotch);
document.querySelector("#buttonVanilla").addEventListener("click",renderVanilla);
document.querySelector("#buttonRedVelvet").addEventListener("click",renderRedVelvet);
document.querySelector("#buttonBuy").addEventListener("click",clickBuy);


