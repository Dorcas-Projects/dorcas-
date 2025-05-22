import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import * as fs from "fs";
import * as path from "path";
import * as nodemailer from "nodemailer";
import { z } from "zod";

const contactFormSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters."),
  email: z.string().email("Please enter a valid email address."),
  subject: z.string().min(5, "Subject must be at least 5 characters."),
  message: z.string().min(10, "Message must be at least 10 characters.")
});

export async function registerRoutes(app: Express): Promise<Server> {
  // Resume download endpoint
  app.get("/api/resume/download", (req, res) => {
    const resumePath = path.resolve(process.cwd(), "attached_assets/Dorcas Ajayi  Resume April 2025.pdf");
    
    if (fs.existsSync(resumePath)) {
      res.setHeader("Content-Type", "application/pdf");
      res.setHeader("Content-Disposition", "attachment; filename=Dorcas_Ajayi_Resume.pdf");
      
      const fileStream = fs.createReadStream(resumePath);
      fileStream.pipe(res);
    } else {
      res.status(404).json({ message: "Resume file not found" });
    }
  });
  
  // Contact form endpoint
  app.post("/api/contact", async (req, res) => {
    try {
      // Validate the form data
      const formData = contactFormSchema.parse(req.body);
      
      // In a real application, you would send an email here
      // For this example, we'll just log the data and return a success response
      console.log("Contact form submission:", formData);
      
      // Mock email sending
      // In a real application, configure nodemailer with actual credentials
      const mockSending = new Promise<void>((resolve) => {
        setTimeout(() => {
          console.log(`Email would be sent to Dorcas with the following data:
            From: ${formData.name} <${formData.email}>
            Subject: ${formData.subject}
            Message: ${formData.message}
          `);
          resolve();
        }, 1000);
      });
      
      await mockSending;
      
      res.status(200).json({ message: "Contact form submitted successfully" });
    } catch (error) {
      if (error instanceof z.ZodError) {
        res.status(400).json({ message: "Invalid form data", errors: error.errors });
      } else {
        console.error("Error processing contact form:", error);
        res.status(500).json({ message: "An error occurred while processing your request" });
      }
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
