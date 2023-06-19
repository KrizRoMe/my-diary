import { Html, Head, Main, NextScript } from 'next/document'
import { MemoryProvider } from '@/context/MemoryContext'

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body>
        <MemoryProvider>
          <Main />
        </MemoryProvider>
        <NextScript />
      </body>
    </Html>
  )
}
