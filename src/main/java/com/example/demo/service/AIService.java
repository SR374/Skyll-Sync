package com.example.demo.service;

import com.example.demo.model.CareerPath;
import reactor.core.publisher.Mono;

import java.util.List;

public interface AIService {
    Mono<CareerPath> generateCareerPathRecommendation(String skills, String interests, String experienceLevel);
    Mono<List<CareerPath>> getRelatedCareerPaths(Long careerPathId);
}
