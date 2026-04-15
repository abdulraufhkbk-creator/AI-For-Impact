import type { Metadata } from 'next';
import { ThemeProvider } from '@/providers/ThemeProvider';
import { ChatProvider } from '@/providers/ChatProvider';
import './globals.css';

export const metadata: Metadata = {
  title: 'AI for Impact',
  description: 'Privacy-first AI chatbot for education, career, and resource guidance.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider>
          <ChatProvider>{children}</ChatProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
