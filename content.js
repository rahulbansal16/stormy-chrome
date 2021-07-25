chrome.runtime.sendMessage({
    todo:"showPageAction"
})

// function getHeaderElement(){
//     return getErrorDocument().querySelector('body > div > div > div:nth-child(1)')
// }


// function handleSpanClick(e){
//     var text = e.target.textContent.trim()
//     makeSearchQuery(text)
//     e.stopPropagation()
// }

// function makeSearchQuery(text){
//     // var text = e.target.textContent.trim()
//     var url = "https://www.google.com/search?q="+ text;
//     if (text !== ""){
//         window.open(encodeURI(url));
//     }
// }

// function handleHeaderClick(e, text){
//     makeSearchQuery(text)
//     e.stopPropagation()
// }

// var style = document.createElement('style');
// style.innerHTML = '.stormyLink:hover {text-decoration: underline;cursor: pointer;}';

// function addLink(){

//     var headerElement = getHeaderElement()
//     var text = headerElement.textContent.trim()
//     headerElement.addEventListener('click', (e) => handleHeaderClick(e, text))
//     headerElement.appendChild(style)
//     headerElement.setAttribute('class', 'stormyLink')

//     var textElements = getTextElements();
//     for (var i = 0 ; i < textElements.length ; i++){
//         textElements[i].addEventListener("click", handleSpanClick)
//         // textElements[i].appendChild(style)
//         // textElements[i].setAttribute('class', 'stormyLink')
//     }
// }


// setTimeout(addLink, 2000)

// function getErrorDocument(){
//     var iframe = document.getElementsByTagName('iframe')[0];
//     return iframe.contentDocument || iframe.contentWindow.document;
// }

// function getTextElements(){
//     return getErrorDocument().getElementsByTagName('span')
// }
