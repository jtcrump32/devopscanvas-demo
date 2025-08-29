const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.json({
    message: 'DevOpsCanvas Demo Application',
    version: '1.0.0',
    timestamp: new Date().toISOString(),
    environment: process.env.NODE_ENV || 'development'
  });
});

app.get('/health', (req, res) => {
  res.json({
    status: 'healthy',
    uptime: process.uptime(),
    memory: process.memoryUsage()
  });
});

if (require.main === module) {
  app.listen(port, () => {
    console.log(`DevOpsCanvas Demo app listening on port ${port}`);
  });
}

module.exports = app;
