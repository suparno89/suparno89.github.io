import { z } from "zod";

// Simple contact schema without database dependencies
export const insertContactSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Valid email is required"),
  message: z.string().min(1, "Message is required"),
});

export interface Contact {
  id: string;
  name: string;
  email: string;
  message: string;
  createdAt: Date;
}

export type InsertContact = z.infer<typeof insertContactSchema>;
