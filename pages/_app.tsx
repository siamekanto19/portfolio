import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { Inter, Poppins } from '@next/font/google'
import { Fragment } from 'react'
import clsx from 'clsx'
import BlobFollower from '@/components/core/BlobFollower'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
})

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  variable: '--font-poppins',
})

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Fragment>
      <BlobFollower />
      <main
        className={clsx(
          inter.variable,
          poppins.variable,
          'absolute inset-0 min-h-screen w-screen z-30'
        )}
      >
        <Component {...pageProps} />
      </main>
    </Fragment>
  )
}
