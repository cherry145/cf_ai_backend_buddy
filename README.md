Backend Buddy – Cloudflare Workers AI Project

Backend Buddy is a small study-assistant backend built using Cloudflare Workers and Workers AI. The Worker receives a message through the URL (for example, ?q=hello) and returns an AI-generated response using the Llama 3.1 model running on Cloudflare’s platform.

This project was created as part of my application for the Cloudflare Software Engineer Intern (Summer 2026) role.

What it does:

Reads the q parameter from the request

Sends the message to Workers AI using env.AI.run

Uses the model @cf/meta/llama-3.1-8b-instruct

Returns the model’s reply as plain text in the browser

Example request:
http://localhost:8787/?q=hi

Tech stack:

Cloudflare Workers

Cloudflare Workers AI

JavaScript

Wrangler

How to run it locally:
npm install

Deploying:
npm run deploy

Possible future improvements:

Add a small frontend UI

Support multi-turn conversations

Add storage (KV or Durable Objects) for message history