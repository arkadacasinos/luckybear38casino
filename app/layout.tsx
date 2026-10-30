import type { ReactNode } from 'react'
import '@fontsource-variable/inter'
import './globals.css'

export default function RootLayout({
  children,
}: {
  children: ReactNode
}) {
  return (
    <html lang="ru" className="dark bg-[#0b0e14]">
      <head>
        <meta name="yandex-verification" content="f2618a58a89d1970" />
        <title>Lucky Bear Casino Официальный Сайт — Лаки Бир Казино Вход, Зеркало</title>
        <meta
          name="description"
          content="Lucky Bear Casino официальный сайт и рабочее зеркало онлайн казино Лаки Бир. Быстрый вход, регистрация за минуту, моментальные выплаты и 100% бонус на первый депозит."
        />
        <meta name="keywords" content="lucky bear casino, luckybear casino, luckybear casino зеркало, luckybear casino официальный сайт, lucky bear казино, лаки бир казино, лакибир казино, лаки бир казино зеркало, лаки бир казино онлайн, лаки бир казино официальный сайт, лакибир казино официальный сайт, лаки бир казино сайт" />
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
        <meta name="theme-color" content="#0b0e14" />
        <meta name="format-detection" content="telephone=no" />
        <link rel="canonical" href="https://luckybear38casino.vercel.app/" />
        <link rel="icon" href="/icon.png" type="image/png" />
        <link rel="apple-touch-icon" href="/icon.png" />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="ru_RU" />
        <meta property="og:site_name" content="Lucky Bear Casino" />
        <meta property="og:title" content="Lucky Bear Casino Официальный Сайт — Лаки Бир Казино Онлайн" />
        <meta
          property="og:description"
          content="Официальный сайт Lucky Bear Casino: слоты, живые дилеры, бонусы до 12% кэшбэка и турниры. Рабочее зеркало онлайн казино Лаки Бир."
        />
        <meta property="og:url" content="https://luckybear38casino.vercel.app/" />
        <meta property="og:image" content="https://luckybear38casino.vercel.app/images/hero-cash-gun.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Lucky Bear Casino Официальный Сайт — Лаки Бир Казино Онлайн" />
        <meta
          name="twitter:description"
          content="Официальный сайт Lucky Bear Casino: слоты, живые дилеры, бонусы до 12% кэшбэка и турниры. Рабочее зеркало онлайн казино Лаки Бир."
        />
        <meta name="twitter:image" content="https://luckybear38casino.vercel.app/images/hero-cash-gun.png" />
      </head>
      <body className="antialiased bg-[#0b0e14] text-[#d6e0ea] font-sans selection:bg-[#2086fe] selection:text-white">
        {children}
      </body>
    </html>
  )
}
