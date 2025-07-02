import { NextRequest } from "next/server";
import { ChatRequest } from "@/lib/types";

// Active le streaming dans Next.js App Router
export const dynamic = "force-dynamic";

export async function POST(request: NextRequest) {
  try {
    const body: ChatRequest = await request.json();

    if (!body.model || !body.messages) {
      return new Response(JSON.stringify({ error: "Model and messages are required" }), {
        status: 400,
        headers: { "Content-Type": "application/json" },
      });
    }

    const ollamaApiBaseUrl = process.env.OLLAMA_API_BASE_URL || "http://localhost:11434";
    const ollamaResponse = await fetch(`${ollamaApiBaseUrl}/api/chat`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        model: body.model,
        messages: body.messages,
        stream: true,
      }),
    });

    if (!ollamaResponse.ok || !ollamaResponse.body) {
      throw new Error(`Ollama error: ${ollamaResponse.status}`);
    }

    // Re-stream Ollama response
    const stream = new ReadableStream({
      async start(controller) {
        const reader = ollamaResponse.body!.getReader();
        const decoder = new TextDecoder();

        while (true) {
          const { done, value } = await reader.read();
          if (done) break;
          controller.enqueue(value);
        }

        controller.close();
      },
    });

    return new Response(stream, {
      headers: {
        "Content-Type": "text/event-stream",
        "Cache-Control": "no-cache",
        Connection: "keep-alive",
      },
    });

  } catch (error) {
    console.error("Chat stream error:", error);
    return new Response(JSON.stringify({
      error: error instanceof Error ? error.message : "Internal server error",
    }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}
