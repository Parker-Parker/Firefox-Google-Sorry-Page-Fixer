
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


// window.onfocus = () => {window.location.replace(url)}




let link2 = document.createElement("a");
link2.setAttribute("href", url);
link2.appendChild(document.createTextNode("!!!!!!!!!!!!! GO TO URL: "+url+" !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!" ));
document.body.appendChild(link2);

redirectstarted = false;
const redir = () => {if(!redirectstarted){link2.click(); redirectstarted=true;}};
window.onfocus = redir;
window.onBlur = redir;
document.body.addEventListener('mousemove',(e) => {redir()});

//  document.body.addEventListener("mouseenter")


// browser.browserAction.onClicked.addListener( //can only be done with BG script
//   (tab) => {
//     if(tab.id == browser.tabs.getCurrent().id){
//       console.log(tab.url);
//     }
//   }
// );

