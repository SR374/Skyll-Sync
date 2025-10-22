package com.example.demo.repository;

import com.example.demo.model.CareerPath;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface CareerPathRepository extends JpaRepository<CareerPath, Long> {
    List<CareerPath> findByTitleContainingIgnoreCase(String title);
    List<CareerPath> findByRequiredSkillsContaining(String skill);
}
