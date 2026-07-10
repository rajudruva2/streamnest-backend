"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = __importDefault(require("./app"));
const PORT = Number(process.env.PORT) || 3000;
app_1.default.listen(PORT, "0.0.0.0", () => {
    console.log("====================================");
    console.log("🚀 StreamNest Backend Started");
    console.log(`Listening on http://0.0.0.0:${PORT}`);
    console.log(`Health API: http://localhost:${PORT}/api/v1/health`);
    console.log("====================================");
});
