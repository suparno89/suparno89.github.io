import type { Express } from "express";
import { createServer, type Server } from "http";

export async function registerRoutes(app: Express): Promise<Server> {
  // Health check endpoint for static website
  app.get("/api/health", (req, res) => {
    res.json({ 
      status: "ok", 
      message: "Portfolio website is running",
      timestamp: new Date().toISOString()
    });
  });

  // Portfolio data endpoint (if needed for dynamic loading)
  app.get("/api/portfolio", (req, res) => {
    res.json({ 
      message: "Static portfolio website - no dynamic data needed",
      contact: "Use mailto link for direct email contact"
    });
  });

  const httpServer = createServer(app);
  return httpServer;
}
