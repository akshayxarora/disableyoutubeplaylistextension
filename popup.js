let enable = document.getElementById("enable");
let disable = document.getElementById("disable");

disable.addEventListener("click", async () => {
    let tabs = await chrome.tabs.query({ active: true, currentWindow: true });
    
    chrome.scripting.executeScript({
        target: { tabId: tab.id },
        function: disableSecondaryPlaylist,
    });
});

enable.addEventListener("click", async () => {
    let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
    
    chrome.scripting.executeScript({
        target: { tabId: tab.id },
        function: enableSecondaryPlaylist,
    });
});


function disableSecondaryPlaylist() {
    document.getElementById("related").style.display = "none";
}

function enableSecondaryPlaylist() {
    document.getElementById("related").style.display = "block";
}