package com.example.demo.service;

import com.example.demo.model.CareerPath;
import org.springframework.stereotype.Service;
import reactor.core.publisher.Mono;

import java.util.Arrays;
import java.util.List;
import java.util.Random;

@Service
public class MockAIService implements AIService {
    
    private final List<String> techSkills = Arrays.asList(
        "Java", "Python", "JavaScript", "React", "Spring Boot", "Node.js", "SQL", "AWS"
    );
    
    private final List<CareerPath> careerPaths = Arrays.asList(
        new CareerPath(
            "Full Stack Developer",
            "Develop both front-end and back-end applications using various technologies.",
            Arrays.asList("JavaScript", "React", "Node.js", "SQL"),
            Arrays.asList("Advanced React", "Node.js Masterclass", "Database Design"),
            "$85,000 - $120,000",
            "22% (Much faster than average)",
            "Designing user interactions, developing servers and databases, ensuring cross-platform optimization"
        ),
        new CareerPath(
            "Data Scientist",
            "Analyze complex data to help companies make better decisions.",
            Arrays.asList("Python", "Machine Learning", "Statistics", "Data Visualization"),
            Arrays.asList("Machine Learning A-Z", "Python for Data Science", "Statistics for Data Science"),
            "$95,000 - $150,000",
            "31% (Much faster than average)",
            "Analyzing data, building predictive models, creating data visualizations"
        ),
        new CareerPath(
            "DevOps Engineer",
            "Bridge the gap between development and operations teams.",
            Arrays.asList("Docker", "Kubernetes", "AWS", "CI/CD"),
            Arrays.asList("Docker Mastery", "AWS Certified DevOps Engineer", "Kubernetes for Beginners"),
            "$90,000 - $140,000",
            "24% (Much faster than average)",
            "Implementing CI/CD pipelines, managing cloud infrastructure, automating deployment processes"
        )
    );
    
    private final Random random = new Random();

    @Override
    public Mono<CareerPath> generateCareerPathRecommendation(String skills, String interests, String experienceLevel) {
        // In a real implementation, this would call an AI service
        // For now, we'll return a random career path
        CareerPath recommendation = careerPaths.get(random.nextInt(careerPaths.size()));
        return Mono.just(recommendation);
    }

    @Override
    public Mono<List<CareerPath>> getRelatedCareerPaths(Long careerPathId) {
        // In a real implementation, this would return related career paths based on the given ID
        // For now, we'll return all career paths except the one with the given ID
        List<CareerPath> relatedPaths = careerPaths.stream()
            .filter(path -> !path.getId().equals(careerPathId))
            .toList();
        return Mono.just(relatedPaths);
    }
}
