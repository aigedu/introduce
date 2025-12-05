import { GoogleGenAI } from "@google/genai";

// Initialize the API client
// We create a function to get the instance to ensure we use the latest env var if it were to change (though typically static)
const getAIClient = () => {
  const apiKey = process.env.API_KEY;
  if (!apiKey) {
    console.error("API Key is missing via process.env.API_KEY");
  }
  return new GoogleGenAI({ apiKey: apiKey });
};

export const generateTutorResponse = async (
  prompt: string,
  systemInstruction: string,
  history: string[] = [] // Simplified history for context if needed, currently unused in simple calls
): Promise<string> => {
  try {
    const ai = getAIClient();
    
    // Using the flash model for quick, responsive educational interactions
    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: prompt,
      config: {
        systemInstruction: systemInstruction,
        temperature: 0.7, // Balanced creativity and accuracy
      }
    });

    return response.text || "Xin lỗi, hiện tại tôi không thể trả lời. Vui lòng thử lại sau.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "Đã xảy ra lỗi khi kết nối với gia sư AI. Vui lòng kiểm tra kết nối mạng hoặc thử lại sau.";
  }
};
