import React, { useState } from 'react';
import CareerForm from './components/CareerForm';
import CareerCard from './components/CareerCard';

function App() {
  const [recommendation, setRecommendation] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleRecommendation = (data) => {
    setRecommendation(data);
    setError('');
  };

  return (
    <div className="app">
      <header className="app-header">
        <h1>AI Career Path Advisor</h1>
        <p>Discover your ideal career path based on your skills and interests</p>
      </header>
      
      <main className="app-content">
        <div className="form-container">
          <CareerForm 
            onRecommendation={handleRecommendation} 
            setLoading={setLoading}
            setError={setError}
          />
        </div>
        
        {loading && <div className="loading">Loading...</div>}
        
        {error && (
          <div className="error-message">
            {error}
          </div>
        )}
        
        {recommendation && (
          <div className="recommendation-container">
            <h2>Your Career Recommendation</h2>
            <CareerCard careerPath={recommendation} />
          </div>
        )}
      </main>
      
      <footer className="app-footer">
        <p>© {new Date().getFullYear()} AI Career Path Advisor. All rights reserved.</p>
      </footer>

      <style jsx>{`
        .app {
          font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
          max-width: 1200px;
          margin: 0 auto;
          padding: 20px;
          color: #333;
        }
        
        .app-header {
          text-align: center;
          margin-bottom: 40px;
          padding: 20px;
          background: linear-gradient(135deg, #6e8efb, #a777e3);
          color: white;
          border-radius: 10px;
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        }
        
        .app-header h1 {
          margin: 0;
          font-size: 2.5em;
        }
        
        .app-header p {
          margin: 10px 0 0;
          font-size: 1.1em;
          opacity: 0.9;
        }
        
        .form-container {
          background: white;
          padding: 30px;
          border-radius: 10px;
          box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
          margin-bottom: 30px;
        }
        
        .recommendation-container {
          margin-top: 40px;
          animation: fadeIn 0.5s ease-in-out;
        }
        
        .recommendation-card {
          background: white;
          padding: 25px;
          border-radius: 10px;
          box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
          margin-top: 20px;
        }
        
        .recommendation-card h3 {
          color: #6e8efb;
          margin-top: 0;
          font-size: 1.8em;
        }
        
        .skills ul {
          list-style: none;
          padding: 0;
          display: flex;
          flex-wrap: wrap;
          gap: 10px;
          margin-top: 10px;
        }
        
        .skills li {
          background: #f0f4ff;
          padding: 5px 15px;
          border-radius: 20px;
          font-size: 0.9em;
          color: #4a6cf7;
        }
        
        .salary {
          margin-top: 20px;
          padding-top: 15px;
          border-top: 1px solid #eee;
        }
        
        .salary h4 {
          margin: 0 0 10px 0;
          color: #666;
        }
        
        .salary p {
          font-size: 1.3em;
          color: #2ecc71;
          font-weight: bold;
          margin: 0;
        }
        
        .loading {
          text-align: center;
          padding: 20px;
          font-size: 1.2em;
          color: #666;
        }
        
        .error-message {
          background: #ffebee;
          color: #c62828;
          padding: 15px;
          border-radius: 5px;
          margin: 20px 0;
          text-align: center;
        }
        
        .app-footer {
          text-align: center;
          margin-top: 50px;
          padding: 20px;
          color: #666;
          font-size: 0.9em;
          border-top: 1px solid #eee;
        }
        
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        @media (max-width: 768px) {
          .app-header h1 {
            font-size: 2em;
          }
          
          .form-container {
            padding: 20px;
          }
        }
      `}</style>
    </div>
  );
}

export default App;
