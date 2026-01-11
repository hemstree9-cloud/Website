
import { GoogleGenAI } from "@google/genai";

const API_KEY = process.env.API_KEY || "";

export const getGeminiResponse = async (userMessage: string, history: { role: 'user' | 'assistant', content: string }[]) => {
  if (!API_KEY) {
    return "I'm sorry, I'm currently in offline mode. Please contact us via the form below!";
  }

  const ai = new GoogleGenAI({ apiKey: API_KEY });
  
  const systemInstruction = `
    You are the "Grace Logistics AI Assistant". 
    Grace Logistics is a premier logistics and warehousing company with 20+ years of experience.
    Key Facts:
    - Located near Nagpur City, the logistics hub of India (Zero Mile).
    - Capacity: Over 500,000 sqft of Grade A warehousing.
    - Services: 3PL (Third Party Logistics), Warehousing, Inventory Management, Distribution, Custom Solutions, Cold Storage.
    - Industries: E-commerce, Pharma, FMCG, Manufacturing, Automotive.
    - Philosophy: Safety first, tech-driven operations, and extreme reliability.

    Your goal is to help visitors understand our services, explain our Nagpur strategic advantage, and guide them toward submitting an inquiry. 
    Keep responses professional, concise, and helpful. If asked for pricing, explain that it depends on volume and duration, and suggest using the inquiry form.
  `;

  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: [
        { role: 'user', parts: [{ text: systemInstruction }] },
        ...history.map(h => ({
          role: h.role === 'assistant' ? 'model' : 'user',
          parts: [{ text: h.content }]
        })),
        { role: 'user', parts: [{ text: userMessage }] }
      ],
      config: {
        temperature: 0.7,
        topP: 0.9,
        maxOutputTokens: 500,
      }
    });

    return response.text || "I'm having trouble processing that right now. Could you try rephrasing?";
  } catch (error) {
    console.error("Gemini Error:", error);
    return "I apologize, but I encountered an error. Please reach out to our team directly at contact@gracelogistics.com";
  }
};
