package com.example.demo.controller;

import com.example.demo.model.CareerPath;
import com.example.demo.service.AIService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import reactor.core.publisher.Mono;

import java.util.List;

@RestController
@RequestMapping("/api/career")
public class CareerPathController {

    private final AIService aiService;

    public CareerPathController(AIService aiService) {
        this.aiService = aiService;
    }

    @GetMapping("/recommend")
    public Mono<ResponseEntity<CareerPath>> getCareerRecommendation(
            @RequestParam String skills,
            @RequestParam(required = false, defaultValue = "") String interests,
            @RequestParam(required = false, defaultValue = "beginner") String experienceLevel) {
        
        return aiService.generateCareerPathRecommendation(skills, interests, experienceLevel)
                .map(ResponseEntity::ok)
                .defaultIfEmpty(ResponseEntity.notFound().build());
    }

    @GetMapping("/related/{id}")
    public Mono<ResponseEntity<List<CareerPath>>> getRelatedCareerPaths(@PathVariable Long id) {
        return aiService.getRelatedCareerPaths(id)
                .map(ResponseEntity::ok)
                .defaultIfEmpty(ResponseEntity.notFound().build());
    }
}
