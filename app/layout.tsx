import './globals.css'
import { ReactNode } from 'react'

export const metadata = {
  title: '고양hub',
  description: '팀 소개 페이지',
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="ko">
      <body className="bg-customBackground">{children}</body>
    </html>
  )
}
