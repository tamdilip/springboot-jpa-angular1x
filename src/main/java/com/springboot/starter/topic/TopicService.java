package com.springboot.starter.topic;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class TopicService {
	
	@Autowired
	private TopicRepository topicRepository;
	
/*	private List<Topic> topics=new ArrayList<>(Arrays.asList(
			new Topic("Spring","Spring Service Framework","Full Course Spring"),
			new Topic("Java","Java EE","Full Course Java"),
			new Topic("Angular","Angular JS","Full Course JS")
			));*/
	
	public List<Topic> getAllTopics() {
		List<Topic> topics = new ArrayList<>();
		topicRepository.findAll()
		.forEach(topics::add);
		return topics;
		
		
		//return topics;
	}
	
	public Topic getTopic(int id) {
		return topicRepository.findOne(id);
		//return topics.stream().filter(t->t.getId().equals(id)).findFirst().get();
	}

	public void addTopic(Topic topic) {
		topicRepository.save(topic);
	}

	public void updateTopic(String id, Topic topic) {
		/*for (int i = 0; i < topics.size(); i++) {
			Topic t=topics.get(i);
			if(t.getId().equals(id)){
				topics.set(i, topic);
			}			
		}	*/	
		topicRepository.save(topic);
	}

	public void deleteTopic(int id) {
		topicRepository.delete(id);
		//topics.removeIf(t -> t.getId().equals(id));
	}
	
	
}
