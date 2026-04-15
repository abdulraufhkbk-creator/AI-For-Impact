import { NextRequest, NextResponse } from 'next/server';
import { getMockAIResponse } from '@/lib/ai/mock-service';

export async function POST(req: NextRequest) {
  try {
    const { message } = await req.json();
    if (!message) return NextResponse.json({ error: 'Message required' }, { status: 400 });
    const reply = await getMockAIResponse(message);
    return NextResponse.json({ reply, conversationId: `conv-${Date.now()}`, messageId: `msg-${Date.now()}` });
  } catch {
    return NextResponse.json({ error: 'Server error' }, { status: 500 });
  }
}
