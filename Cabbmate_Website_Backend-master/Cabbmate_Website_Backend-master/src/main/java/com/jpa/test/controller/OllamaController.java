package com.jpa.test.controller;
import org.springframework.ai.chat.model.ChatModel;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;

import reactor.core.publisher.Flux;

@Controller
public class OllamaController {

	private final ChatModel chatModel;

	public OllamaController(ChatModel chatModel) {
		this.chatModel = chatModel;
	}

	@PostMapping("/Aipage")
	public String index() {
		return "Aipage";
	}

	@GetMapping("/ai")
	public Flux<String> getAi(@RequestParam String aidata) throws Exception {
		Flux<String> flux = null;
		try {
			flux = chatModel.stream(aidata);
		} catch (Exception e) {
			System.out.println("issue");
		}
		return flux;
	}
}
