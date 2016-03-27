//
// // find your ip address
(function(){
  var url;
  var city;
  (function(){
    var head= document.getElementsByTagName('head')[0];
    var script= document.createElement('script');
    script.type= 'text/javascript';
    script.onload = function(){
        city = remote_ip_info.city;
        url = "http://wthrcdn.etouch.cn/weather_mini?city=" + city;
        head.removeChild(script);
        remote_ip_info = null;
      };
      script.src= 'http://int.dpool.sina.com.cn/iplookup/iplookup.php?format=js&ip=';
      head.appendChild(script);
    })();

    var Util = {
      addHandler: function(element, type, handler){
        if(element.addEventListener){
          element.addEventListener(type, handler, false);
        } else if (element.attachEvent){
          element.attachEvent("on" + type, handler);
        } else {
          element["on" + type] = handler;
        }
      },
      createEW: function(){
        var a = document.createElement("a");
        a.id = "ew";
        a.href = "#";
        document.body.appendChild(a);

        var div = document.createElement("div");
        div.id = "ew-info";
        var p = document.createElement("p");
        var h1 = document.createElement("h1");
        div.appendChild(h1);
        div.appendChild(p);
        document.body.appendChild(div);

        var head = document.getElementsByTagName('head')[0];
        var style = document.createElement('style');
        style.innerHTML = "#ew{" +
                          "display: block;" +
                          "background: #EF4566;" +
                          "width:60px;height:60px;" +
                          "-webkit-border-radius: 120px;" +
                          "-moz-border-radius: 120px;" +
                          "bottom:10px;left:10px;" +
                          "position: fixed;" +
                          "border-radius: 120px;}" +
                          "#ew-info{" +
                          "background: #83ae9b;" +
                          "box-shadow: 0 0 10px #ccc;" +
                          "height:140px;width:140px;" +
                          "-webkit-border-radius: 2px;" +
                          "-moz-border-radius: 2px;" +
                          "bottom:10px;left:80px;" +
                          "position: fixed;" +
                          "border-radius: 2px;}";
        head.appendChild(style);
        var ew = document.getElementById('ew');
        var ewinfo = document.getElementById('ew-info');
        ewinfo.style.display = "none";
        var that = this;
        this.addHandler(ew, "click", function(){
          if(ewinfo.style.display == "none"){
            var xhr = new XMLHttpRequest();
            var tempdata;
            xhr.onreadystatechange = function(){
              if(xhr.readyState == 4){
                if((xhr.status >= 200 && xhr.status <300) || xhr.status == 304){
                  tempdata = JSON.parse(xhr.responseText).data;
                  ewinfo.childNodes[0].innerHTML = tempdata.wendu;
                  ewinfo.childNodes[1].innerHTML = city;
                }
              }
            };
            xhr.open('get', url, true);
            xhr.send(null);
            ewinfo.style.display = "block";
          } else if (ewinfo.style.display == "block") {
            ewinfo.style.display = "none";
          }
        });

      }
    };

    Util.createEW();
})();
