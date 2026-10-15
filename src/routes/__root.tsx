import { HeadContent, Scripts, createRootRoute } from '@tanstack/react-router'
import appCss from '../styles.css?url'

export const Route = createRootRoute({
  head: () => ({
    meta: [
      {
        charSet: 'utf-8',
      },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1, viewport-fit=cover',
      },
      {
        title: 'VNI Export & Import – Indian Fruits, Vegetables, Pulses & Spices',
      },
      {
        name: 'description',
        content: 'VNI Export & Import (Surat, Gujarat, India) supplies fresh fruits, vegetables, nuts, pulses, soyabean, basmati rice, and authentic Indian spices to international buyers worldwide.',
      },
      {
        name: 'keywords',
        content: 'VNI Export Import, Surat Gujarat exporter, Indian agro commodities, pulses exporter, soyabean exporter, basmati rice 1121, pusa 1509, traditional basmati, Indian spices exporter',
      },
      {
        name: 'theme-color',
        content: '#12263f',
      },
    ],
    links: [
      {
        rel: 'preconnect',
        href: 'https://fonts.googleapis.com',
      },
      {
        rel: 'preconnect',
        href: 'https://fonts.gstatic.com',
        crossOrigin: 'anonymous',
      },
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,400..700;1,9..40,400..700&family=Sora:wght@500;600;700;800&display=swap',
      },
      {
        rel: 'stylesheet',
        href: appCss,
      },
    ],
  }),
  shellComponent: RootDocument,
})

function RootDocument({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  )
}
