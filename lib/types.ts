export interface Message {
  role: 'user' | 'assistant';
  content: string;
  timestamp?: Date;
}

export interface OllamaModel {
  name: string;
  model: string;
  modified_at: string;
  size: number;
  digest: string;
  details?: {
    format: string;
    family: string;
    families: string[];
    parameter_size: string;
    quantization_level: string;
  };
}

export interface OllamaModelsResponse {
  models: OllamaModel[];
}

export interface ChatRequest {
  model: string;
  messages: Message[];
  stream: boolean;
}

export interface StreamingResponse {
  model: string;
  created_at: string;
  message: {
    role: string;
    content: string;
  };
  done: boolean;
}