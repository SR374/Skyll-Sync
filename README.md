# Skyll-Sync

A comprehensive full-stack application designed to help users track and develop their career paths and skills through an intuitive interface powered by AI-driven recommendations.

## 🌟 Features

- **Career Path Management**: Explore and manage different career paths
- **Skill Tracking**: Monitor your skill development progress
- **AI-Powered Recommendations**: Get personalized career suggestions
- **Interactive UI**: Modern, responsive design for all devices
- **RESTful API**: Robust backend with comprehensive endpoints

## 🚀 Getting Started

### Prerequisites

#### Backend
- Java 17+
- Maven 3.6.3+
- MySQL 8.0+

#### Frontend
- Node.js 16.x+
- npm 8.x+

### 🛠 Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/SR374/Skyll-Sync.git
   ```

2. **Backend Setup**
   ```bash
   cd Skyll-Sync
   
   # Install dependencies
   mvn install
   
   # Configure database in:
   # src/main/resources/application.properties
   
   # Run the application
   mvn spring-boot:run
   ```
   The backend will be available at `http://localhost:8080`

3. **Frontend Setup**
   ```bash
   # In a new terminal
   cd /path/to/Skyll-Sync/frontend
   
   # Install dependencies
   npm install
   
   # Start the development server
   npm start
   ```
   The frontend will be available at `http://localhost:3000`

## 📚 Project Structure

```
Skyll-Sync/
├── backend/           # Spring Boot application
│   ├── src/
│   ├── pom.xml
│   └── ...
├── frontend/          # React application
│   ├── src/
│   ├── public/
│   ├── package.json
│   └── ...
└── README.md          # This file
```

## 🔧 API Documentation

### Career Paths
- `GET /api/career-paths` - List all career paths
- `GET /api/career-paths/{id}` - Get a specific career path
- `POST /api/career-paths` - Create a new career path
- `PUT /api/career-paths/{id}` - Update a career path
- `DELETE /api/career-paths/{id}` - Delete a career path

### Skills
- `GET /api/skills` - List all skills
- `POST /api/skills` - Add a new skill
- `GET /api/skills/{id}` - Get a specific skill

## 🛠 Built With

### Backend
- **Spring Boot** - Application framework
- **Spring Data JPA** - Database access
- **Spring Security** - Authentication & Authorization
- **MySQL** - Database
- **Maven** - Dependency Management

### Frontend
- **React** - Frontend library
- **React Router** - Navigation
- **Axios** - HTTP client
- **Material-UI** - UI components
- **Redux** - State management (if applicable)

## 🤝 Contributing

Contributions are what make the open-source community an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

Distributed under the MIT License. See `LICENSE` for more information.

## 📫 Contact

[Your Name] - [@your_twitter](https://twitter.com/your_twitter)

Project Link: [https://github.com/SR374/Skyll-Sync](https://github.com/SR374/Skyll-Sync)

## 🙏 Acknowledgments

- [Awesome Readme Templates](https://github.com/othneildrew/Best-README-Template)
- [Choose an Open Source License](https://choosealicense.com)
- [GitHub Emoji Cheat Sheet](https://www.webpagefx.com/tools/emoji-cheat-sheet/)
