package com.xebia.inno.hypr.controller

import com.xebia.inno.hypr.model.Workout
import com.xebia.inno.hypr.model.WorkoutPrompt
import org.springframework.ai.chat.client.ChatClient
import org.springframework.web.bind.annotation.GetMapping
import org.springframework.web.bind.annotation.PostMapping
import org.springframework.web.bind.annotation.RequestBody
import org.springframework.web.bind.annotation.RequestParam
import org.springframework.web.bind.annotation.RestController

@RestController
internal class ChatController(
    chatClientBuilder: ChatClient.Builder,
    val workoutPromptBuilder: WorkoutPromptBuilder
) {
    private val chatClient = chatClientBuilder.build()

    @GetMapping("/ai/chat")
    fun chat(@RequestParam question: String): Map<String, String?> {
        val response = chatClient.prompt().user(question).call().content()
        return java.util.Map.of("question", question, "answer", response)
    }

    @PostMapping("/hypr/workout")
    fun generateWorkout(@RequestBody prompt: WorkoutPrompt): Workout? {
        val response = chatClient.prompt()
            .user(workoutPromptBuilder.buildPromptMessage(prompt))
            .call()
            .entity(Workout::class.java)
        return response
    }
}