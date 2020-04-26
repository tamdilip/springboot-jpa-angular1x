app.service("topicHeaderService", topicHeaderService);

function topicHeaderService($http, HeaderValues) {
  this.th1 = HeaderValues.th1;
  this.th2 = HeaderValues.th2;
  this.th3 = HeaderValues.th3;
}


app.service("topicService", topicService);

function topicService($q, $http, url) {
  var self = this;

  self.getAllTopics = function () {
    //https://docs.angularjs.org/api/ng/service/$q
    //http://davidcai.github.io/blog/posts/angular-promise/
    //https://tylermcginnis.com/angularjs-factory-vs-service-vs-provider/
    //http://www.dotnettricks.com/learn/angularjs/understanding-angularjs-factory-service-and-provider
    var promise1 = $http.get(url + "/topics");
    var promise2 = promise1.then(function (response) {
      return response.data;
    },
      function (response) {
        return $q.reject(response);
      });
    return promise2;
  }

  self.addTopic = function (newTopic) {
    $http.post(url + "/topics", newTopic);
  }

  self.updateTopic = function (updateTopic) {
    $http.put(url + "/topics/" + updateTopic.id, updateTopic);
  }

  self.deleteTopic = function (deleteTopic) {
    $http.delete(url + "/topics/" + deleteTopic.id);
  }

}
