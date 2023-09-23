import './globals.css';
import type { Metadata } from 'next';


export const metadata: Metadata = {
  title: 'Game N Tech',
  description: 'Les meilleurs produits gaming à un rapport qualité prix imbattable en un seul clic.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr">
      <body>
        {children}
      </body>
    </html>
  )
}
