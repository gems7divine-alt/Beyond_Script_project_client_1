const API_BASE = import.meta.env.VITE_AI_AGENT_URL || "/api/ai";

export async function sendChatMessage(message) {
  const res = await fetch(`${API_BASE}/chat`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ message }),
  });

  if (!res.ok) {
    throw new Error(`AI Agent error: ${res.status}`);
  }

  const data = await res.json();
  return data.reply;
}
