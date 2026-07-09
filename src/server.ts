

import app from "./app";

const PORT = Number(process.env.PORT) || 3000;

app.listen(PORT, "0.0.0.0", () => {
  console.log("====================================");
  console.log("🚀 StreamNest Backend Started");
  console.log(`Listening on http://0.0.0.0:${PORT}`);
  console.log(`Health API: http://localhost:${PORT}/api/v1/health`);
  console.log("====================================");
});
