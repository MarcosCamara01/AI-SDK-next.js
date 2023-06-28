import { Configuration, OpenAIApi } from "openai-edge";
import { OpenAIStream, StreamingTextResponse } from "ai";

export const runtime = "edge";

const config = new Configuration({
    apiKey: "OpenAI-API_Key"
})

const openai = new OpenAIApi(config)

export async function POST(request) {
    const response = await openai.createChatCompletion({
        model: "gpt-3.5-turbo",
        stream: true,
        messages: [
            {
                role: "system",
                content: "Compórtate como si fueses mi abuela y me estuvieras regañando porque no quiero ir a la universidad"
            },
            {
                role: "user",
                content: "Abuela, no me encuentro  bien"
            }
        ],
        max_tokens: 500,
        temperature: 0.7,
        top_p: 1,
        frequency_penalty: 1,
        presence_penalty: 1
    })

    const stream = OpenAIStream(response);

    return new StreamingTextResponse(stream);
}
