async function get_data(username){
    let response = await fetch('https://www.chess.com/callback/user/popup/' + username,{
    mode: 'cors',
    method: 'GET',
    headers: {}})
    let data = await response.json();
    data = JSON.stringify(data);
    data = JSON.parse(data);
    return data;
}
function profile() {
    let user = document.getElementById("input").value
    let data = get_data(username=user)
    console.log(data)
}
var menuList = document.getElementById("navMenu");
    menuList.style.maxHeight = "0px";
    function togglemenu(){
        if (menuList.style.maxHeight == "0px") {
            menuList.style.maxHeight = "130px"
        }
        else {
            menuList.style.maxHeight = "0px"
    }
}
async function server() {
    let main = document.getElementById("main")
    console.log("Hello World")
    let address = document.getElementById("address").value
    var url = "https://api.minetools.eu/ping/" + address;
    var fav = "https://eu.mc-api.net/v3/server/favicon/" + address;
    var img = "https://mcapi.us/server/image?ip=" + address + "&theme=dark"
    console.log(fav)
    async function get_data(){
        let response = await fetch(url);
        let data = await response.json();
        data = JSON.stringify(data);
        data = JSON.parse(data);
        return data;
    }
    let ile = await get_data();
    console.log(ile)
    document.getElementById("address").style.display = "none"
    document.getElementById("cre").style.display = "none"
    document.getElementById("heading").style.display = "none"
    document.getElementById("main").style.marginTop = "150px"
    let info = document.createElement("div")
    info.id = "newdiv"
    main.appendChild(info)
    let fle = document.createElement("img")
    fle.src = fav
    info.appendChild(fle)
    let name = document.createElement("h3")
    name.innerHTML = address + "'s status"
    info.appendChild(name)
    let ver = document.createElement("h4")
    ver.innerHTML = "Version: " + ile["version"]["name"]
    info.appendChild(ver)
    let latency = document.createElement("h4")
    latency.innerHTML = "Latency/Ping: " + ile["latency"] + "ms"
    info.appendChild(latency)
    let motd = document.createElement("h4")
    motd.innerHTML = "MOTD: " + "<code>" + ile["description"] + "</code>"
    info.appendChild(motd)
    let online = document.createElement("h4")
    online.innerHTML = "Players Online: " + ile["players"]["online"] + "/" + ile["players"]["max"]
    info.appendChild(online)
    let prot = document.createElement("h4")
    prot.innerHTML = "Protocol: " + ile["version"]["protocol"]
    info.appendChild(prot)
}