
// find your ip address
var head= document.getElementsByTagName('head')[0];  
var script= document.createElement('script'); 
var url;
script.type= 'text/javascript';  
script.onload = function(){  
    alert(remote_ip_info["city"]);
    url = "http://wthrcdn.etouch.cn/weather_mini?city=" + remote_ip_info["city"]
 }  
script.src= 'http://int.dpool.sina.com.cn/iplookup/iplookup.php?format=js&ip=';  
head.appendChild(script);

// get the temperature
$("#test").on('click', function(){
  $.get(url,function(data){
  	var dataObj = eval("("+data+")");
    // alert(dataObj.data.wendu);
    $(".temperature").text(dataObj.data.wendu);
  });
});