package com.xebia.inno.hypr.controller

import org.springframework.ai.chat.client.ChatClient
import org.springframework.web.bind.annotation.GetMapping
import org.springframework.web.bind.annotation.RequestParam
import org.springframework.web.bind.annotation.RestController

@RestController
internal class ChatController(chatClientBuilder: ChatClient.Builder) {
    private val chatClient = chatClientBuilder.build()

    @GetMapping("/ai/chat")
    fun chat(@RequestParam question: String): Map<String, String?> {
        val response = chatClient.prompt().user(question).call().content()
        return java.util.Map.of("question", question, "answer", response)
    }
}