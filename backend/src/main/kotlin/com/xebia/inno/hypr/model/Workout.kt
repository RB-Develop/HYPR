package com.xebia.inno.hypr.model

data class Workout(
    var title: String,
    var description: String,
    var duration: String,
    var components: List<WorkoutSession> = ArrayList()
)

data class WorkoutSession (
    var name: String,
    var description: String?,
    var exerciseDuration: String,
    var targetRepetitions: Int?,
    var components: List<WorkoutComponent>?
)

data class WorkoutComponent (
    var name: String,
    var instruction: String?,
    var repetitions: Int?,
    var sets: Int?,
    var weightKilos: Int?,
    var distance: String?,
    var exerciseDuration: String,
    var restDuration: String?
)