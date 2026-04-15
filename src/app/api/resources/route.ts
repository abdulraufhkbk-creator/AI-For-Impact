import { NextResponse } from 'next/server';
import { mockResources } from '@/data/mock-resources';

export async function GET() {
  return NextResponse.json({ data: mockResources });
}
