package com.xebia.inno.hypr.model

data class WorkoutPrompt(
    var type: WorkoutType,
    var participants: Int,
    var durationMinutes: Int,
    var gear: List<String>,
    var targetStimulus: List<String>,
    var user: WorkoutUser
)
