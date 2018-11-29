function ajax_get(url, callback) {
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function() {
        if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
            console.log('responseText:' + xmlhttp.responseText);
            try {
                var data = JSON.parse(xmlhttp.responseText);
            } catch(err) {
                console.log(err.message + " in " + xmlhttp.responseText);
                return;
            }
            callback(data);
        }
    };
 
    xmlhttp.open("GET", url, true);
    xmlhttp.send();
}

function fillDom(data){
    document.getElementById("title").innerHTML = data["title"];
 
    var html = "<h2>" + data["title"] + "</h2> <br> <h3>" + data["description"] + "</h3><ul>";
       for (var i=0; i < data["articles"].length; i++) {
           html = html + '<li><a href="' + data["articles"][i]["url"] + '">' + data["articles"][i]["title"] + "</a></li>";
       }
    html += "</ul>";
    document.getElementById("text").innerHTML = html;
};
 
ajax_get('data.json', fillDom);

