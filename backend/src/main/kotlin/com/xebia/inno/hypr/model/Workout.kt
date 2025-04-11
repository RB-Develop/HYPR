package com.xebia.inno.hypr.model

import com.fasterxml.jackson.annotation.JsonInclude
import com.fasterxml.jackson.annotation.JsonInclude.Include

data class Workout(
    var title: String?,
    var description: String?,
    var duration: String,
    var stimulusExplanation: String?,
    var sections: List<WorkoutSections> = ArrayList()
)

data class WorkoutSections (
    var name: String?,
    var instruction: String?,
    var targetRounds: Int?,
    var workoutType: String?,
    var duration: String?,
    var components: List<WorkoutComponent> = ArrayList()
)

data class WorkoutComponent (
    var name: String?,
    var instruction: String?,
    var repetitions: Int?,
    var sets: Int?,
    var weightKilos: Int?,
    var distance: String?,
    var exerciseDuration: String?,
    var restDuration: String?
)