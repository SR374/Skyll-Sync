import React, { useState } from 'react';
import axios from 'axios';

const CareerForm = ({ onRecommendation }) => {
  const [formData, setFormData] = useState({
    skills: '',
    interests: '',
    experienceLevel: 'beginner'
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    
    try {
      const response = await axios.get('http://localhost:8080/api/career/recommend', {
        params: {
          skills: formData.skills,
          interests: formData.interests,
          experienceLevel: formData.experienceLevel
        }
      });
      
      onRecommendation(response.data);
    } catch (err) {
      setError('Failed to get career recommendation. Please try again.');
      console.error('Error:', err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="career-form">
      <h2>Get Career Path Recommendations</h2>
      {error && <div className="error">{error}</div>}
      
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="skills">Your Skills (comma-separated):</label>
          <input
            type="text"
            id="skills"
            name="skills"
            value={formData.skills}
            onChange={handleChange}
            placeholder="e.g., JavaScript, Python, React"
            required
          />
        </div>
        
        <div className="form-group">
          <label htmlFor="interests">Your Interests (optional):</label>
          <input
            type="text"
            id="interests"
            name="interests"
            value={formData.interests}
            onChange={handleChange}
            placeholder="e.g., Web Development, Data Science"
          />
        </div>
        
        <div className="form-group">
          <label htmlFor="experienceLevel">Experience Level:</label>
          <select
            id="experienceLevel"
            name="experienceLevel"
            value={formData.experienceLevel}
            onChange={handleChange}
          >
            <option value="beginner">Beginner</option>
            <option value="intermediate">Intermediate</option>
            <option value="advanced">Advanced</option>
          </select>
        </div>
        
        <button type="submit" disabled={loading}>
          {loading ? 'Getting Recommendations...' : 'Get Career Path'}
        </button>
      </form>
    </div>
  );
};

export default CareerForm;
