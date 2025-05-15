# Handle Database connection like a senior developer 😀

A **production-grade MongoDB connection manager** built on Mongoose, designed with **resilience, performance, and observability** in mind. This connection handler handles retry logic, connection pooling, disconnection recovery, connection caching, and graceful shutdown.

---

## 🚀 Features

- ✅ **Connection Caching**: Avoids repeated reconnects (ideal for serverless or hot-reload environments)
- 🔁 **Retry Mechanism**: Retries failed connection attempts with configurable max retries and intervals
- 🧵 **Connection Pooling**: Optimized via `maxPoolSize` for better performance under concurrent loads
- 📉 **Connection State Tracking**: Get real-time connection info for health checks or monitoring
- 📦 **Environment-aware Debugging**: Enables verbose logging in development
- 🧼 **Graceful Shutdown Hooks**: Closes DB connections cleanly on `SIGINT` / `SIGTERM`
- 📊 **Structured Logging**: Logs meaningful events for better observability

---

## 🧾 Environment Setup

Add your MongoDB URI and environment to your `.env` file:

```env
MONGO_URI=mongodb+srv://<username>:<password>@cluster.mongodb.net/<dbname>?retryWrites=true&w=majority
NODE_ENV=development
```
