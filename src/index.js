export default {
	async fetch(request, env) {
	  // Read incoming message (from query or JSON)
	  const { searchParams } = new URL(request.url);
	  const userMessage = searchParams.get("q");
  
	  if (!userMessage) {
		return new Response(
		  "Send a message like: /?q=hi",
		  { status: 200 }
		);
	  }
  
	  // Call Cloudflare Workers AI (Llama 3.3)
	  const aiResponse = await env.AI.run(
		"@cf/meta/llama-3.1-8b-instruct",	  
		{
		  messages: [
			{ role: "system", content: "You are a friendly study buddy." },
			{ role: "user", content: userMessage }
		  ]
		}
	  );
  
	  return new Response(aiResponse.response, {
		headers: { "Content-Type": "text/plain" }
	  });
	}
  };
  
