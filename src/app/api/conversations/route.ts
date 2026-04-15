import { NextResponse } from 'next/server';
import { mockConversations } from '@/data/mock-conversations';

export async function GET() {
  return NextResponse.json({ data: mockConversations });
}
