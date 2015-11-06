var shot = require("shot");
var test = require("tape");
var router = require("./../backend-js/router.js");

testUrl("/", 200);
testUrl("/public/style.css", 200);
testUrl("/public/frontend.js", 200);
testUrl("/duckquack", 404);


function testUrl(url, statusCode){
  test("check " + url + " is " + statusCode, function(t){
    console.log("test-url>>>>>", url);
    var request = {
      method: "GET",
      url: url
    };

    shot.inject(router, request, function(res){
      var actual = res.statusCode;
      var expected = statusCode;
      t.equal(actual, expected, "test passed");
      t.end();
    });
  });
}
