package com.xebia.inno.hypr.controller

import com.xebia.inno.hypr.model.WorkoutPrompt
import com.xebia.inno.hypr.model.WorkoutType
import org.springframework.stereotype.Component

@Component
class WorkoutPromptBuilder {
    private fun resolveParticipants(prompt: WorkoutPrompt): Int {
        return when (prompt.type) {
            WorkoutType.CROSSFIT -> prompt.participants
            else -> 1
        }
    }

    private fun determineProgram(prompt: WorkoutPrompt): String {
        return if (prompt.fullProgram) {
            if (prompt.type != WorkoutType.CROSSFIT) {
                "- Create a full program including a warming-up, but excluding a cool-down"
            } else {
                "- Create a full program including a warming-up, strength accessories block, and a CrossFit style workout, but excluding a cool-down"
            }
        } else {
            """
            - Create a single CrossFit style workout, suitable to the amount of participants and using up the full duration. Do not split up the workout in sections and do not include a warm-up, cool-down, or finisher.
            """
        }
    }

    fun buildPromptMessage(prompt: WorkoutPrompt): String {
        return """
            You are an expert fitness coach with experience in programming workouts for various sports and skill levels. Given the following parameters, design an effective workout.

            ## SPORT: ${prompt.type}
            ## AGE: ${prompt.user.age ?: "Unknown"}
            ## WEIGHT: ${prompt.user.weightKilos ?: "Unknown"}
            ## EXPERIENCE LEVEL: ${prompt.user.level ?: "Unknown"}
            ## PARTICIPANTS: ${resolveParticipants(prompt)}
            ## AVAILABLE TIME: ${prompt.durationMinutes}
            ## AVAILABLE EQUIPMENT: ${prompt.gear.joinToString()}
            ## TARGET STIMULUS: ${prompt.targetStimulus.joinToString()}
            
            ### INSTRUCTIONS:
            ${determineProgram(prompt)}
            - Design a [solo/partner/team]-based workout tailored to the input above.
            - Make up titles, descriptions, and instructions for all components. 
            - Be playful in tone and creative in the titles.
            - Briefly explain how the workout achieves the target stimulus.
            - Avoid excessive equipment switching or setup if time is limited.
            - Format the workout plan as JSON only — no explanation or extra text.
            - Use camelCase keys for consistency.
            - Avoid equipment switching overload.
            """;
    }
}