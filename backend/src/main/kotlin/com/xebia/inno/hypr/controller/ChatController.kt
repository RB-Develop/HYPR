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
internal class ChatController(chatClientBuilder: ChatClient.Builder) {
    private val chatClient = chatClientBuilder.build()

    private val promptBuilder: (WorkoutPrompt) -> String = { prompt: WorkoutPrompt ->
        """
        I'm looking for a workout to do right now. The sport I'm doing is ${prompt.type} and
        I'm of ${prompt.user.level} level. Act like an experienced coach in this type of sport. My age is ${prompt.user.age}
        and I weigh ${prompt.user.weightKilos} kilos. The amount of people I'm doing the workout with is ${prompt.participants}
        and we want to spend ${prompt.durationMinutes} minutes on the workout. Make sure that the workout is lower than this
        duration, but stay close to it, or match it. The target stimulus of this workout is: ${prompt.targetStimulus.joinToString()} and I
        have the following gear available: ${prompt.gear.joinToString()}. Generate the result in a JSON format that I can use to format the
        workout in an interface.
        """
    }

    @GetMapping("/ai/chat")
    fun chat(@RequestParam question: String): Map<String, String?> {
        val response = chatClient.prompt().user(question).call().content()
        return java.util.Map.of("question", question, "answer", response)
    }

    @PostMapping("/hypr/workout")
    fun generateWorkout(@RequestBody prompt: WorkoutPrompt): Workout? {
        val inputPrompt = promptBuilder.invoke(prompt);
        val response = chatClient.prompt()
            .user(inputPrompt)
            .call()
            .entity(Workout::class.java)
        return response
    }
}