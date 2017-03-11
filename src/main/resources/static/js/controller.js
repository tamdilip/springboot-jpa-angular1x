 
   app.controller("topicCtrl", todo);
      
   function todo(topicService,topicHeaderFactory){
   var self=this;
   
   self.head1=topicHeaderFactory.th1;
   self.head2=topicHeaderFactory.th2;
   self.head3=topicHeaderFactory.th3;
   
   function allTopics(){
    topicService.getAllTopics()
	.then(function(data){
			self.topics=data;
			self.selectedTopic="";
			},
			function(data){
			console.log("Error!!");
			});
			}
   allTopics();
   self.addTopic=function(){
   topicService.addTopic(self.newTopic);
   self.newTopic="";
   allTopics();
   };
   
   self.selectedIndex=function(index){
   console.log("id",index);
   self.selectedTopic=self.topics[index];
   };
   
   self.updateTopic=function(){
   topicService.updateTopic(self.selectedTopic)
   self.selectedTopic="";
   allTopics();
   };
   
   self.deleteTopic=function(index){
   topicService.deleteTopic(self.selectedTopic);
   self.selectedTopic="";
   allTopics();
   };
  
  
   }