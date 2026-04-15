const RESPONSES: Record<string, string[]> = {
  education: [
    "Great question about education! Here are some steps:\n\n1. **Identify your goals** — What skills do you want to gain?\n2. **Explore free resources** — Khan Academy, Coursera, edX\n3. **Check local programs** — Community colleges and libraries\n\nWould you like specific resources in your area?",
    "I'd love to help with your learning journey! 📚\n\nTop free platforms:\n- **Khan Academy** — Math, science, computing\n- **MIT OpenCourseWare** — University courses\n- **freeCodeCamp** — Web development\n- **Duolingo** — Languages\n\nWhat subject interests you?",
  ],
  career: [
    "Let me help with your career goals! 💼\n\n1. **Skills Assessment** — Identify strengths and gaps\n2. **Resume Building** — Structure an effective resume\n3. **Job Search** — Target the right opportunities\n4. **Interview Prep** — Practice common questions\n\nWhich area should we start with?",
  ],
  health: [
    "I understand you need health guidance. 🏥\n\n**Important:** Please consult a healthcare professional for medical advice.\n\nFree health resources:\n- **Community Health Centers** — findahealthcenter.hrsa.gov\n- **Mental Health** — 988 Suicide & Crisis Lifeline\n- **211.org** — Local health services\n\nWhat specific area can I help explore?",
  ],
  default: [
    "Thank you for reaching out! I'm here to help. 🌟\n\nI can assist with:\n- 📚 **Education** — Courses, scholarships, learning paths\n- 💼 **Career** — Resume, job search, interviews\n- 🏥 **Health** — Health resources and information\n- ⚖️ **Legal** — Legal aid and rights\n- 💰 **Financial** — Budgeting and assistance programs\n\nWhat would you like to explore?",
    "I'm glad you're here! 🤝\n\nCould you tell me more about what you need?\n- Looking for educational opportunities?\n- Need career development help?\n- Seeking community resources?\n\nThe more details you share, the better I can help!",
  ],
};

export async function getMockAIResponse(message: string): Promise<string> {
  const delay = Math.random() * 1200 + 800;
  await new Promise((r) => setTimeout(r, delay));

  const lower = message.toLowerCase();
  let category = 'default';

  if (lower.match(/school|learn|course|study|education|scholarship/)) category = 'education';
  else if (lower.match(/job|career|resume|work|interview|hire/)) category = 'career';
  else if (lower.match(/health|doctor|medical|mental|clinic/)) category = 'health';

  const list = RESPONSES[category];
  return list[Math.floor(Math.random() * list.length)];
}
