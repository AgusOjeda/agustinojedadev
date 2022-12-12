import '../styles/globals.css'
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html>
      <head />
      <body className='bg-[##f8f9f8] min-h-screen w-full grid place-content-center'>
        {children}
      </body>
    </html>
  )
}
