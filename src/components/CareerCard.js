import React, { useEffect, useState } from 'react';
import axios from 'axios';

const CareerCard = ({ careerPath }) => {
  const [relatedCareers, setRelatedCareers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchRelatedCareers = async () => {
      if (!careerPath?.id) return;
      
      setLoading(true);
      try {
        const response = await axios.get(`http://localhost:8080/api/career/related/${careerPath.id}`);
        setRelatedCareers(response.data);
      } catch (err) {
        setError('Failed to load related career paths');
        console.error('Error:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchRelatedCareers();
  }, [careerPath?.id]);

  if (!careerPath) return null;

  // Log the careerPath to debug
  console.log('Career Path Data:', careerPath);

  return (
    <div className="career-card">
      <div className="career-header">
        <h2>{careerPath.career || 'Career Path'}</h2>
        <div className="salary">Avg. Salary: {careerPath.salary || 'Not specified'}</div>
      </div>
      
      <div className="career-section">
        <h3>Description</h3>
        <p>{careerPath.description || 'No description available'}</p>
      </div>
      
      <div className="career-section">
        <h3>Key Skills</h3>
        <div className="skills-list">
          {careerPath.skills && careerPath.skills.map((skill, index) => (
            <span key={index} className="skill-tag">{skill}</span>
          ))}
        </div>
      </div>
      
      <div className="career-section">
        <h3>Recommended Courses</h3>
        <ul>
          {careerPath.recommendedCourses?.map((course, index) => (
            <li key={index}>{course}</li>
          ))}
        </ul>
      </div>
      
      <div className="career-section">
        <h3>Job Growth</h3>
        <p>{careerPath.jobGrowth}</p>
      </div>
      
      <div className="career-section">
        <h3>Key Responsibilities</h3>
        <p>{careerPath.responsibilities}</p>
      </div>
      
      {relatedCareers.length > 0 && (
        <div className="related-careers">
          <h3>Related Career Paths</h3>
          <div className="related-careers-list">
            {relatedCareers.map((career) => (
              <div key={career.id} className="related-career">
                <h4>{career.title}</h4>
                <p>{career.description.substring(0, 100)}...</p>
              </div>
            ))}
          </div>
        </div>
      )}
      
      {loading && <div className="loading">Loading related careers...</div>}
      {error && <div className="error">{error}</div>}
      
      <style jsx>{`
        .career-card {
          background: white;
          border-radius: 8px;
          box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
          padding: 2rem;
          margin: 1rem 0;
          max-width: 800px;
          margin: 0 auto;
        }
        
        .career-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 1.5rem;
          padding-bottom: 1rem;
          border-bottom: 1px solid #eee;
        }
        
        .career-header h2 {
          margin: 0;
          color: #2c3e50;
        }
        
        .salary {
          background: #4CAF50;
          color: white;
          padding: 0.5rem 1rem;
          border-radius: 20px;
          font-weight: bold;
        }
        
        .career-section {
          margin-bottom: 1.5rem;
        }
        
        .career-section h3 {
          color: #3498db;
          margin-bottom: 0.5rem;
        }
        
        .skills-list {
          display: flex;
          flex-wrap: wrap;
          gap: 0.5rem;
          margin-top: 0.5rem;
        }
        
        .skill-tag {
          background: #e0f7fa;
          color: #00838f;
          padding: 0.3rem 0.8rem;
          border-radius: 15px;
          font-size: 0.9rem;
        }
        
        .related-careers {
          margin-top: 2rem;
          padding-top: 1.5rem;
          border-top: 1px solid #eee;
        }
        
        .related-careers-list {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
          gap: 1rem;
          margin-top: 1rem;
        }
        
        .related-career {
          background: #f8f9fa;
          padding: 1rem;
          border-radius: 6px;
          border-left: 4px solid #3498db;
        }
        
        .related-career h4 {
          margin: 0 0 0.5rem 0;
          color: #2c3e50;
        }
        
        .related-career p {
          margin: 0;
          color: #666;
          font-size: 0.9rem;
        }
        
        .error {
          color: #e74c3c;
          margin-top: 1rem;
          padding: 0.5rem;
          background: #fde8e8;
          border-radius: 4px;
        }
        
        .loading {
          color: #3498db;
          margin-top: 1rem;
          text-align: center;
        }
      `}</style>
    </div>
  );
};

export default CareerCard;
