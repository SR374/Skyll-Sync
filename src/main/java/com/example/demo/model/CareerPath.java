package com.example.demo.model;

import lombok.Data;
import javax.persistence.*;
import java.util.List;

@Data
@Entity
@Table(name = "career_paths")
public class CareerPath {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    
    @Column(nullable = false)
    private String title;
    
    @Column(columnDefinition = "TEXT")
    private String description;
    
    @ElementCollection
    private List<String> requiredSkills;
    
    @ElementCollection
    private List<String> recommendedCourses;
    
    @Column(name = "average_salary")
    private String averageSalary;
    
    @Column(name = "job_growth")
    private String jobGrowth;
    
    @Column(columnDefinition = "TEXT")
    private String responsibilities;
    
    // Default constructor for JPA
    public CareerPath() {}
    
    public CareerPath(String title, String description, List<String> requiredSkills, 
                     List<String> recommendedCourses, String averageSalary, 
                     String jobGrowth, String responsibilities) {
        this.title = title;
        this.description = description;
        this.requiredSkills = requiredSkills;
        this.recommendedCourses = recommendedCourses;
        this.averageSalary = averageSalary;
        this.jobGrowth = jobGrowth;
        this.responsibilities = responsibilities;
    }
}
