# Deployment Control Panel

A full-stack deployment automation platform built with React, Node.js, MongoDB, Redis/BullMQ, and Docker.

This project simulates a hosting platform control panel where an admin can onboard new clients, deploy Docker containers asynchronously, and track deployment status in real time.

---

# Features

- Client onboarding form
- Real-time deployment status tracking
- Background job queue using BullMQ + Redis
- Docker container deployment automation
- MongoDB deployment persistence
- Mock AWS Lambda integration
- Live polling dashboard
- Dynamic deployment logs

---

# Tech Stack

## Frontend
- React.js
- Tailwind CSS
- Axios
- Vite

## Backend
- Node.js
- Express.js
- MongoDB + Mongoose
- Redis
- BullMQ
- Docker

---

# Architecture Flow

```text
Frontend (React)
      ↓
Express API
      ↓
MongoDB Save
      ↓
BullMQ Queue
      ↓
Worker Process
      ↓
Docker Deployment
      ↓
Mock Lambda Trigger
      ↓
Deployment Status Update
```

---

# Project Structure

```bash
assignment/
├── client/
├── server/
└── README.md
```

---

# Backend Setup

## Navigate to Server

```bash
cd server
```

## Install Dependencies

```bash
npm install
```

## Create Environment File

Create:

```bash
.env
```

Add:

```env
PORT=8000
MONGO_URI=YOUR_MONGODB_URI
```

## Start Backend Server

```bash
npm run dev
```

## Start Worker

```bash
node src/workers/deploymentWorker.js
```

---

# Redis Setup

## Install Redis (Mac)

```bash
brew install redis
```

## Start Redis

```bash
brew services start redis
```

## Verify Redis

```bash
redis-cli ping
```

Expected:

```bash
PONG
```

---

# Docker Setup

## Install Docker Desktop

https://www.docker.com/products/docker-desktop/

## Verify Docker

```bash
docker --version
```

## Run Docker

```bash
docker ps
```

---

# Frontend Setup

## Navigate to Client

```bash
cd client
```

## Install Dependencies

```bash
npm install
```

## Start Frontend

```bash
npm run dev
```

---

# API Endpoints

## Deploy Container

### POST `/api/deploy`

Request:

```json
{
  "clientName": "Netflix",
  "domain": "netflix.platform.com",
  "image": "nginx:latest"
}
```

---

## Deployment Status

### GET `/api/status/:id`

Returns current deployment status.

---

# Deployment Status Lifecycle

```text
Pending
   ↓
Running
   ↓
Completed / Failed
```

---

# Mock Lambda Integration

AWS Lambda integration was mocked due to AWS account billing verification issues.

The worker architecture is designed to support real AWS Lambda invocation using AWS SDK v3.

---

# Screenshots

## Deployment Control Panel
(Add screenshot here)

## Docker Deployment
(Add screenshot here)

---

# Future Improvements

- Real AWS Lambda integration
- WebSocket-based real-time updates
- Nginx reverse proxy automation
- Domain mapping support
- Kubernetes deployment support

---

# Author

Prashant Kumar

Frontend Developer | React.js