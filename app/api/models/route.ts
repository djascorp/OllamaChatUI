import { NextResponse } from 'next/server';
import { OllamaModelsResponse } from '@/lib/types';

export async function GET() {
  try {
    const ollamaApiBaseUrl = process.env.OLLAMA_API_BASE_URL || "http://localhost:11434";
    const response = await fetch(`${ollamaApiBaseUrl}/api/tags`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data: OllamaModelsResponse = await response.json();
    
    console.log("DATA MODELS",data);

    return NextResponse.json({
      models: data.models || [],
    });
  } catch (error) {
    console.error('Error fetching models from Ollama:', error);
    
    return NextResponse.json(
      { 
        error: 'Unable to connect to Ollama server. Please ensure Ollama is running on localhost:11434',
        models: [] 
      },
      { status: 500 }
    );
  }
}