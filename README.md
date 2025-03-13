# 🤖 AI Web Scraper  <a href="https://aiwebscraper.abhinavraj.tech/" target="_blank"><img src="https://img.shields.io/badge/Live_Demo-000000?style=for-the-badge&logo=vercel&logoColor=white" alt="Live Demo" /></a> 

<div align="center">
  <img src="https://i.imgur.com/qRDDitc.png" alt="AI Web Scraper Banner" />
  
  <p align="center">
    <b>A powerful GUI web scraper with AI-powered customization capabilities</b>
  </p>
<br/>



  <br/>
  <p align="center">
    <img src="https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white" alt="TypeScript" />
    <img src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" alt="React" />
    <img src="https://img.shields.io/badge/Express-000000?style=for-the-badge&logo=express&logoColor=white" alt="Express" />
    <img src="https://img.shields.io/badge/Puppeteer-40B5A4?style=for-the-badge&logo=puppeteer&logoColor=white" alt="Puppeteer" />
    <img src="https://img.shields.io/badge/AI_Powered-FF6F00?style=for-the-badge&logo=ai&logoColor=white" alt="AI Powered" />
  </p>
</div>

<div align="center">
  <a href="#-features">Features</a> •
  <a href="#-demo">Demo</a> •
  <a href="#-video-walkthrough">Video Walkthrough</a> •
  <a href="#-installation">Installation</a> •
  <a href="#-usage">Usage</a> •
  <a href="#-architecture">Architecture</a> •
  <a href="#-contributing">Contributing</a> •
  <a href="#-license">License</a>
</div>

<br/>

## 📹 The making video

<div align="center">
  <p><i>Watch the complete development process of the AI Web Scraper</i></p>
  
  [![AI Web Scraper Development Process](https://img.shields.io/badge/YouTube-FF0000?style=for-the-badge&logo=youtube&logoColor=white)](https://youtu.be/your-video-id-here)
  
  <p>
    <a href="[https://youtu.be/your-video-id-here](https://youtu.be/WqJ31zFBTBU)">
      <img src="https://i.imgur.com/OismJvl.png" alt="YouTube Video Thumbnail" width="600px" style="border-radius: 10px; box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);" />
    </a>
  </p>
  
  <p>
    <b>✨ Watch as we build this powerful tool from scratch ✨</b><br>
    Learn about the implementation details, challenges faced, and see the scraper in action!
  </p>
  
  <details>
    <summary><b>What's covered in the video</b></summary>
    <ul>
      <li>🔧 Setting up the development environment</li>
      <li>⚙️ Configuring Puppeteer for web scraping</li>
      <li>🧠 Integrating AI models for smart content extraction</li>
      <li>🎨 Building the responsive React UI</li>
      <li>🔄 Handling data processing and transformation</li>
      <li>🚀 Performance optimization techniques</li>
    </ul>
  </details>
</div>

<br/>

## ✨ Features

- 🌐 **GUI Web Scraping**: User-friendly interface for scraping any website
- 🤖 **Custom AI Prompts**: Customize output with tailored AI prompts
- 🔄 **Multiple Output Formats**: Choose between JSON or Plain Text modes
- 🧩 **Chunking Support**: Handle large websites by breaking content into manageable chunks
- 🚀 **Model Selection**: Choose from various LLM models for different scraping needs
- 📊 **Structured Data Extraction**: Extract precisely what you need in the format you want
- 🔌 **Easy Integration**: Seamlessly integrate scraped data into blogs or news websites

<br/>

## 🎬 Demo

<div align="center">
  <p><i>The AI Web Scraper in action</i></p>
  <img src="https://i.imgur.com/cRac0Sr.gif" alt="Demo GIF" />
</div>

<br/>

## 🚀 Installation

### Prerequisites

- Node.js (v14+)
- npm or yarn

### Clone the Repository

```bash
git clone https://github.com/abhinavrajdevx/ai-web-scrapper-json-and-structured-mern.git
cd ai-web-scrapper-json-and-structured-mern
```

### Backend Setup

```bash
cd backend

# Install dependencies
npm install

# Create a .env file
echo "PORT=5000" > .env

# Start the development server
npm run dev
```

### Frontend Setup

```bash
cd frontend

# Install dependencies
npm install

# Start the development server
npm run dev
```

Once both servers are running, navigate to `http://localhost:3000` (or the port specified in your frontend configuration) to start using the AI Web Scraper.

<br/>

## 📖 Usage

1. **Enter the URL** of the website you want to scrape
2. **Select the output mode** (JSON or Plain Text)
3. **Customize your AI prompt** for specific data extraction needs
4. **Choose the LLM model** that best suits your requirements
5. **Configure chunking options** for large websites
6. **Click "Scrape"** and watch the AI extract structured data for you
7. **Copy or download** your results for use in your applications

### Example Prompts

```
Extract all product information including name, price, and description
```

```
Summarize the main points of this article in bullet points
```

```
Extract contact information including email addresses and phone numbers
```

<br/>

## 🏗️ Architecture

<div align="center">
  <img src="https://i.imgur.com/ydtw0pL.png" alt="Architecture Diagram" />
</div>

<br/>

### Tech Stack

- **Frontend**: React.js with TypeScript
- **Backend**: Express.js with TypeScript
- **Web Scraping**: Puppeteer
- **AI Processing**: Groq LLM models

<br/>

### System Flow

1. User inputs a URL and customization options via the React frontend
2. The Express backend receives the request
3. Puppeteer navigates to the target website and extracts the raw HTML
4. The content is processed and optionally chunked for large websites
5. The specified LLM model processes the content according to the custom prompt
6. Structured data is returned to the frontend in the chosen format (JSON/Plain Text)
7. User can then utilize the data for their specific needs

<br/>

## 👥 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

<br/>

---

<div align="center">
  <p>Built with ❤️ by <a href="https://github.com/abhinavrajdevx">Abhinav Raj</a></p>
  <p>
    <a href="https://github.com/abhinavrajdevx/ai-web-scrapper-json-and-structured-mern/issues">Report Bug</a> •
    <a href="https://github.com/abhinavrajdevx/ai-web-scrapper-json-and-structured-mern/issues">Request Feature</a>
  </p>
</div>
