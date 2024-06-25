
// console.log("III'M COOOOOOUUUUUMMMMMM EEEEEEENG");
// console.log(browser.tabs.getCurrent().url);
// console.log(browser.tabs.getCurrent().id);
console.log(document.getElementsByTagName("div"))
let innerTexts = [];
let divs = document.getElementsByTagName("div");
for(let i = 0; i<divs.length;i++){
  innerTexts[i] = divs[i].innerText;
}

console.log(innerTexts);

let url = null;
for (i=0; (url===null) && i<innerTexts.length; i++){
  lines = innerTexts[i].split("\n");
  for (let k=0; (url===null) && k<lines.length; k++){
    if (lines[k].startsWith("URL: ")) {
      
      url = lines[k].slice(5);
    }
  }


  // if innerTexts[i]
}
console.log("URL IS THIS: "+ url);

for (i=0; i<divs.length; i++){

  let link = document.createElement("a")
  link.setAttribute("href", url);
  link.appendChild(document.createTextNode("!!!!!!!!!!!!! GO TO URL: "+url+" !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!" ))
  divs[i].insertAdjacentElement("afterbegin",link)

}


// browser.browserAction.onClicked.addListener( //can only be done with BG script
//   (tab) => {
//     if(tab.id == browser.tabs.getCurrent().id){
//       console.log(tab.url);
//     }
//   }
// );














// async function runthing() { //this feels sloppy but i just want a synchronous blocking browser.storage.local.get is that too much to ask 



// console.log("Wideo Speed plugin loaded: started")
// // Select the node that will be observed for mutations
// const targetNode = document.getElementsByTagName("video")[0];

// // Options for the observer (which mutations to observe)
// const config = { attributes: true};

// //TODO: may need to add 2nd observer that checks if document.getElementsByTagName("video")[0]'s parent childList has changed, then remake mutationObserver for document.getElementsByTagName("video")[0].playbackSpeed

// // Video Speed
// // console.log(browser.storage.local.get("videoSpeed"));
//     var videoSpeed = 1.0;
//     // browser.storage.local.get("videoSpeed").then();
//     var result = await browser.storage.local.get("videoSpeed");
//     videoSpeed = result.videoSpeed;

//     console.log(videoSpeed);

// if (!(typeof videoSpeed === 'number')){
//   browser.storage.local.set({"videoSpeed":2.0});
//   videoSpeed = 2.0;
// }

// // set page's video speed to desired speed
// function syncVidSpeed() {

//   if( !(targetNode.playbackRate === videoSpeed)  )  {
//     targetNode.playbackRate = videoSpeed;
//     console.log("Speed set:"+videoSpeed );
//   }  

// }

// // Callback function to execute when mutations are observed
// const mutationCallback = (mutationList, observer) => {
//   for (const mutation of mutationList) {
//     if (mutation.type === "attributes") {
//       syncVidSpeed();
//     } 
//   }
// };


// // Callback function to execute when stored Speed has changed
// const storedSpeedCallback = (changes, area) => {
//   if (area === "local") {
//     if("videoSpeed" in changes){
//       if(  !(changes["videoSpeed"].newValue === videoSpeed)  ){
//         videoSpeed = changes["videoSpeed"].newValue;
//         console.log("New Speed from storage: "+videoSpeed);
//         syncVidSpeed();
//       }
//     }
//   } 

// };



// // Create an observer instance linked to the callback function
// const mutationObserver = new MutationObserver(mutationCallback);

// // Start observing the target node for configured mutations
// mutationObserver.observe(targetNode, config);

// // Start listening to the stored target speed
// browser.storage.onChanged.addListener(storedSpeedCallback);


// console.log("Wideo Speed plugin loaded: Live")


// }
// runthing();

