# Deployment Control Panel 🚀

A production-style full-stack deployment automation platform inspired by modern cloud hosting providers.

This project allows users to:

* Create deployment jobs
* Deploy Docker containers asynchronously
* Track deployment lifecycle in real time
* Process deployments using BullMQ workers
* Trigger AWS Lambda functions
* Persist deployment state in MongoDB
* Use Redis queues for scalable background processing

The platform simulates how modern PaaS systems like Render, Railway, Heroku, or AWS Elastic Beanstalk internally manage deployments.

---

# Live Architecture

```text
React Frontend
      ↓
Express API Server
      ↓
MongoDB Persistence
      ↓
BullMQ Queue (Redis)
      ↓
Worker Process
      ↓
Docker Deployment Engine
      ↓
AWS Lambda Invocation
      ↓
Deployment Status Updates
```

---

# Tech Stack

## Frontend

* React.js
* Vite
* Tailwind CSS
* Axios

## Backend

* Node.js
* Express.js
* MongoDB
* Mongoose
* BullMQ
* Redis / Redis Cloud
* Docker
* AWS SDK v3
* UUID

## Cloud & DevOps

* AWS Lambda
* Render
* Redis Cloud
* MongoDB Atlas
* Docker Desktop
* GitHub

---

# Core Features

## Deployment Automation

* Pull Docker images dynamically
* Run containers automatically
* Allocate random deployment ports
* Generate unique container names

## Queue-Based Architecture

* BullMQ job queues
* Redis-backed worker processing
* Async deployment execution
* Background task scalability

## Deployment Tracking

* Real-time deployment status
* Persistent deployment logs
* Polling-based live updates

## AWS Lambda Integration

* Lambda invocation using AWS SDK v3
* Deployment event simulation
* Serverless architecture support

## Production Ready Concepts

* Environment-based configuration
* Secure secret management
* Background workers
* Scalable deployment flow

---

# Complete Project Structure

```bash
assignment/
│
├── client/
│   ├── public/
│   ├── src/
│   ├── package.json
│   └── vite.config.js
│
├── server/
│   ├── src/
│   │   ├── config/
│   │   ├── controllers/
│   │   ├── models/
│   │   │   └── Deployment.js
│   │   ├── queue/
│   │   │   └── deploymentQueue.js
│   │   ├── routes/
│   │   │   └── deploymentRoutes.js
│   │   ├── workers/
│   │   │   └── deploymentWorker.js
│   │   └── server.js
│   │
│   ├── package.json
│   └── .env
│
└── README.md
```

---

# Frontend Dependencies

```json
{
  "axios": "^1.x",
  "react": "^18.x",
  "react-dom": "^18.x",
  "vite": "^5.x",
  "tailwindcss": "^3.x"
}
```

---

# Backend Dependencies

```json
{
  "@aws-sdk/client-lambda": "^3.x",
  "bcryptjs": "^2.x",
  "bullmq": "^5.x",
  "cors": "^2.x",
  "dotenv": "^16.x",
  "express": "^4.x",
  "ioredis": "^5.x",
  "mongoose": "^8.x",
  "nodemon": "^3.x",
  "uuid": "^11.x"
}
```

---

# Environment Variables

## Backend `.env`

```env
PORT=8000

MONGO_URI=YOUR_MONGODB_URI

REDIS_URL=YOUR_REDIS_CLOUD_URL

AWS_REGION=YOUR_AWS_REGION

AWS_ACCESS_KEY=YOUR_AWS_ACCESS_KEY

AWS_SECRET_KEY=YOUR_AWS_SECRET_KEY

LAMBDA_NAME=deploymentNotifier
```

---

# Local Development Setup

# 1. Clone Repository

```bash
git clone https://github.com/Prashant9155/deployment-control-panel.git
```

---

# 2. Install Frontend Dependencies

```bash
cd client

npm install
```

---

# 3. Install Backend Dependencies

```bash
cd ../server

npm install
```

---

# 4. Start Backend Server

```bash
npm run dev
```

Backend runs on:

```bash
http://localhost:8000
```

---

# 5. Start Worker Process

```bash
node src/workers/deploymentWorker.js
```

This worker:

* Consumes BullMQ jobs
* Pulls Docker images
* Starts containers
* Updates deployment status
* Invokes AWS Lambda

---

# 6. Start Frontend

```bash
cd ../client

npm run dev
```

Frontend runs on:

```bash
http://localhost:5173
```

---

# Docker Setup

## Install Docker Desktop

[Docker Desktop](https://www.docker.com/products/docker-desktop/?utm_source=chatgpt.com)

---

## Verify Docker

```bash
docker --version
```

---

## Verify Docker Engine

```bash
docker ps
```

---

# Redis Setup

This project uses Redis Cloud for queue management.

## Create Free Redis Database

[Redis Cloud](https://redis.io/try-free/?utm_source=chatgpt.com)

---

## Example Redis URL

```env
REDIS_URL=redis://default:password@host:port
```

---

# MongoDB Setup

## Create MongoDB Atlas Cluster

[MongoDB Atlas](https://www.mongodb.com/cloud/atlas?utm_source=chatgpt.com)

---

# AWS Lambda Setup

## Create Lambda Function

Function Name:

```text
deploymentNotifier
```

## Lambda Purpose

* Simulate deployment completion
* Trigger deployment notifications
* Test AWS SDK integration

---

# API Endpoints

# Create Deployment

## POST `/api/deploy`

### Request Body

```json
{
  "clientName": "Netflix",
  "domain": "netflix.platform.com",
  "image": "nginx:latest"
}
```

---

# Get Deployment Status

## GET `/api/status/:id`

Returns:

* Current deployment state
* Deployment logs
* Container status

---

# Deployment Lifecycle

```text
Pending
   ↓
Running
   ↓
Completed / Failed
```

---

# BullMQ Queue Flow

```text
API Request
    ↓
Create MongoDB Record
    ↓
Push Job to Redis Queue
    ↓
Worker Picks Job
    ↓
Docker Deployment Starts
    ↓
Lambda Triggered
    ↓
Deployment Status Updated
```

---

# Production Deployment

# Backend Deployment

* Platform: Render
* Runtime: Node.js

## Backend Render Config

```text
Root Directory:
server

Build Command:
npm install

Start Command:
node src/server.js
```

---

# Frontend Deployment

* Platform: Render Static Site

## Frontend Render Config

```text
Root Directory:
client

Build Command:
npm run build

Publish Directory:
dist
```

---

# Security Improvements

* Environment variable protection
* AWS secret isolation
* `.env` ignored from Git
* Queue-based async architecture
* External Redis authentication

---

# Future Improvements

* Kubernetes support
* WebSocket real-time updates
* Reverse proxy automation
* Multi-container deployments
* Deployment rollback support
* CI/CD integration
* Domain mapping automation
* SSL certificate automation
* Container monitoring dashboard

---

# Learning Outcomes

This project demonstrates:

* Real-world async architecture
* Queue systems with BullMQ
* Docker automation
* Cloud deployment workflows
* Worker-based background processing
* AWS Lambda integrations
* Full-stack production deployment

---

# Author

## Prashant Kumar

Frontend Developer | React.js | Full Stack Enthusiast

* LinkedIn: [Prashant Kumar LinkedIn](https://www.linkedin.com/in/prashantkumar-sde)
* GitHub: [Prashant9155 GitHub](https://github.com/Prashant9155)
