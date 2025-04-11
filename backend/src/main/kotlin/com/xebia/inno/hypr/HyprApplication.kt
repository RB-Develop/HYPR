package com.xebia.inno.hypr

import org.springframework.boot.autoconfigure.SpringBootApplication
import org.springframework.boot.runApplication

@SpringBootApplication
class HyprApplication

fun main(args: Array<String>) {
	runApplication<HyprApplication>(*args)
}
