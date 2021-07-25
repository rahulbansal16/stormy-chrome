var contextMenuItem = {
    "id": "quacky",
    "title": "Send Whatsapp Message",
    "contexts": ["selection"]
}

const defaultCountryCode = "91"
const URL = "https://api.whatsapp.com/send/?phone="

const getNumber = texts => {
    var numbers = '';
    for (let i in texts){
        if ( texts[i] >= '0' && texts[i] <='9'){
            numbers += texts[i]
        }
    }
    return numbers;
}

const parsePhone = clickedData => {
    var phoneNumber = getNumber(clickedData);
    if (phoneNumber.length === 10){
        return defaultCountryCode + phoneNumber
    }
    return phoneNumber
}

const openWhatsApp = (phoneNumber, text) => {
    window.open(URL + phoneNumber)
}

const handleContextMenuClick = clickedData => {
    var phoneNumber = parsePhone(clickedData.selectionText)
    openWhatsApp(phoneNumber, "")
}

chrome.contextMenus.create(contextMenuItem)
chrome.contextMenus.onClicked.addListener(handleContextMenuClick)

chrome.runtime.onMessage.addListener(function(request, sender, sendResponse){
    if(request.todo == "showPageAction"){
        chrome.tabs.query({active:true, currentWindow:true}, function(tabs){
            // chrome.pageAction.show(tabs[0].id)
        })
        console.log(document.textContent)
    }
})

