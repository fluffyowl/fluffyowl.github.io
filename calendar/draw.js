(function(){
  var requestAjax = function(username, callback) {
    var xhr = new XMLHttpRequest();
    var endpoint = "http://kenkoooo.com/atcoder-api/problems?user=" + username;
    xhr.onreadystatechange = function(){
      if (this.readyState==4 && this.status==200) {
        callback(this.response);
      }
    };
    xhr.responseType = 'json';
    xhr.open('GET',endpoint,true);
    xhr.send();
  };
  requestAjax("nebukuro09", function(response){
  console.log(response);
  });

})();


var cal = new CalHeatMap();
cal.init({});
