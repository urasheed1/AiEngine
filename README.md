# AI Answer Engine
## Overview

The **AI Answer Engine** is a sophisticated application that leverages AI and web scraping technologies to provide intelligent responses based on user queries and real-time web content. It integrates:

- **Next.js** for the frontend and server-side functionalities.
- **Groq SDK** for interacting with a Language Learning Model (LLM).
- **Cheerio** and **Axios** for efficient web scraping.
- **Puppeteer** for advanced web scraping scenarios requiring headless browser automation.

## Features

- **Dynamic Chat API:** Processes user messages, extracts URLs, scrapes relevant content, and generates informed responses using an LLM.
- **Web Scraping:** Efficiently extracts and cleans data from provided URLs using Cheerio and Puppeteer.
- **Rate Limiting:** Ensures API stability and prevents abuse using Redis-based middleware.
- **Enhanced UI:** User-friendly interface for seamless interaction with the AI engine.
- **Robust Error Handling & Logging:** Provides meaningful feedback and facilitates easier debugging.
- **Comprehensive Testing:** Ensures reliability through unit and integration tests using Jest and React Testing Library.

## Getting Started

### Prerequisites

Ensure you have the following installed on your machine:

- [Node.js](https://nodejs.org/) (v14 or later)
- [npm](https://www.npmjs.com/) or [Yarn](https://yarnpkg.com/)
- [Redis](https://redis.io/) (for rate limiting)

### Installation

1. **Clone the Repository:**

   ```bash
   git clone https://github.com/urasheed1/ai-answer-engine.git
   ```

2. **Navigate to the Project Directory:**

   ```bash
   cd ai-answer-engine
   ```

3. **Install Dependencies:**

   Using npm:

   ```bash
   npm install
   ```

   Or using Yarn:

   ```bash
   yarn install
   ```

### Environment Variables

Create a `.env` file in the root directory and add the following environment variables:

```env
GROQ_API_KEY=your_groq_api_key
REDIS_URL=your_redis_url
UPSTASH_REDIS_REST_TOKEN= your_redis_token
PORT=3000 # Optional: Customize the port
```

- **GROQ_API_KEY:** Your API key for Groq SDK.
- **REDIS_URL:** Connection string for your Redis instance.
- **PORT:** Port number on which the development server will run (default is 3000).

### Running the Development Server

Start the development server with:

Using npm:

```bash
npm run dev
```

Or using Yarn:

```bash
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to view the application.

## Project Structure

```
ai-answer-engine/
├── src/
│   ├── app/
│   │   ├── api/
│   │   │   └── chat/
│   │   │       └── route.ts
│   │   └── page.tsx
│   ├── utils/
│   │   ├── groqClient.ts
│   │   └── scraper.ts
│   └── middleware.ts
├── public/
├── styles/
├── .env
├── README.md
├── package.json
└── tsconfig.json
```

- **app/api/chat/route.ts:** Handles the chat API requests, integrates Groq for AI responses, and utilizes scraping utilities.
- **utils/groqClient.ts:** Configures and interacts with the Groq SDK.
- **utils/scraper.ts:** Contains functions for scraping web content using Axios and Cheerio.
- **middleware.ts:** Implements rate limiting using Redis.
- **app/page.tsx:** Frontend interface for user interaction.

## Implemented Features

The project has successfully implemented the following features:

1. **Chat API Integration:**
   
   - **File:** `src/app/api/chat/route.ts`
   - **Description:**
     - Integrated Groq SDK to handle AI-driven responses.
     - Implemented web scraping using Cheerio and Puppeteer to fetch and process content from user-provided URLs.
     - Ensured the API can parse and handle the request body correctly.
   - **References:**
     - [Next.js Route Handlers](https://nextjs.org/docs/app/building-your-application/routing/route-handlers)
     - [Groq SDK Documentation](https://www.npmjs.com/package/groq-sdk)
     - [Cheerio Documentation](https://cheerio.js.org/docs/basics/loading)
     - [Puppeteer Documentation](https://pptr.dev/guides/what-is-puppeteer)

2. **User Interface Enhancements:**
   
   - **File:** `src/app/page.tsx`
   - **Description:**
     - Enhanced the UI to better display AI responses.
     - Handled API responses and displayed errors or success messages appropriately.
     - Improved user experience with better styling and interactivity.

3. **Rate Limiting Implementation:**
   
   - **File:** `src/middleware.ts`
   - **Description:**
     - Added rate limiting using Redis to prevent abuse and ensure API stability.
     - Configured rate limits based on application needs.
   - **Reference:**
     - [Redis Rate Limiting Strategies](https://redis.io/topics/rate-limiting)

4. **Advanced Web Scraping Capabilities:**
   
   - **File:** `src/utils/scraper.ts`
   - **Description:**
     - Implemented Puppeteer for scraping dynamic content that requires JavaScript execution.
     - Optimized scraping functions for performance and reliability.

5. **Error Handling and Logging:**
   
   - **Description:**
     - Improved error handling across the application to provide meaningful feedback.
     - Implemented logging mechanisms for better monitoring and debugging.

6. **Comprehensive Testing:**
   
   - **Description:**
     - Wrote unit and integration tests to ensure the reliability of the application.
     - Utilized testing frameworks like Jest and React Testing Library.

## Technologies Used

- **Frontend:**
  - [Next.js](https://nextjs.org/) - React framework for building server-side rendered applications.
  - [React](https://reactjs.org/) - JavaScript library for building user interfaces.

- **Backend:**
  - [Groq SDK](https://www.npmjs.com/package/groq-sdk) - Interact with Language Learning Models.
  - [Cheerio](https://cheerio.js.org/) - Fast, flexible, and lean implementation of core jQuery designed for the server.
  - [Axios](https://axios-http.com/) - Promise-based HTTP client for the browser and Node.js.
  - [Puppeteer](https://pptr.dev/) - Node library which provides a high-level API to control Chrome or Chromium over the DevTools Protocol.
  - [Redis](https://redis.io/) - In-memory data structure store, used for rate limiting.

- **Others:**
  - [TypeScript](https://www.typescriptlang.org/) - Typed superset of JavaScript.
  - [ESLint](https://eslint.org/) - Tool for identifying and reporting on patterns found in ECMAScript/JavaScript code.
  - [Prettier](https://prettier.io/) - Opinionated code formatter.
  - [Jest](https://jestjs.io/) - JavaScript Testing Framework.
  - [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/) - Simple and complete React DOM testing utilities.

