import { NextRequest, NextResponse } from "next/server";
import { ChatRequest } from "@/lib/types";

// Add this line to force dynamic rendering
export const dynamic = "force-dynamic";

export async function POST(request: NextRequest) {
  try {
    const body: ChatRequest = await request.json();

    console.log("Chat request body:", body);

    if (!body.model || !body.messages) {
      return NextResponse.json(
        { error: "Model and messages are required" },
        { status: 400 }
      );
    }

    // Forward the request to Ollama
    const ollamaResponse = await fetch("http://localhost:11434/api/chat", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: body.model,
        messages: body.messages.map((msg) => ({
          role: msg.role,
          content: msg.content,
        })),
        stream: true,
      }),
    });

    if (!ollamaResponse.ok) {
      throw new Error(`Ollama API error: ${ollamaResponse.status}`);
    }

    // Don't await .text() here since you want to stream the response
    // console.log('Ollama response:', await ollamaResponse.text());

    // Return the streaming response
    return new NextResponse(ollamaResponse.body, {
      headers: {
        "Content-Type": "application/json",
        "Transfer-Encoding": "chunked",
      },
    });
  } catch (error) {
    console.error("Error in chat API route:", error);

    return NextResponse.json(
      {
        error: error instanceof Error ? error.message : "Internal server error",
      },
      { status: 500 }
    );
  }
}
