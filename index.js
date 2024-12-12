import ollama from 'ollama';

async function main() {
  const response = await ollama.chat({
    model: 'llama3.2:latest',
    messages: [
      {
        role: 'user',
        content: 'Tell me the future of LLM in data analytics.',
      },
    ],
  });
  console.log(response.message.content);
}

main();
