
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

