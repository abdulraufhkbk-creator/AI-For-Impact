export interface Conversation {
  id: string;
  title: string;
  category: string;
  is_pinned: boolean;
  is_archived: boolean;
  message_count: number;
  updated_at: string;
}

export const mockConversations: Conversation[] = [
  {
    id: 'conv-001',
    title: 'Finding scholarship opportunities',
    category: 'education',
    is_pinned: true,
    is_archived: false,
    message_count: 12,
    updated_at: new Date(Date.now() - 1000 * 60 * 30).toISOString(),
  },
  {
    id: 'conv-002',
    title: 'Resume review for tech jobs',
    category: 'career',
    is_pinned: false,
    is_archived: false,
    message_count: 8,
    updated_at: new Date(Date.now() - 1000 * 60 * 60 * 3).toISOString(),
  },
  {
    id: 'conv-003',
    title: 'Community health centers nearby',
    category: 'health',
    is_pinned: false,
    is_archived: false,
    message_count: 5,
    updated_at: new Date(Date.now() - 1000 * 60 * 60 * 24).toISOString(),
  },
  {
    id: 'conv-004',
    title: 'Understanding tenant rights',
    category: 'legal',
    is_pinned: false,
    is_archived: true,
    message_count: 15,
    updated_at: new Date(Date.now() - 1000 * 60 * 60 * 24 * 7).toISOString(),
  },
];
