import Image from 'next/image'

const REF_URL = 'https://comboyolo.site/aeaofj2k27'

export default function Page() {
  return (
    <div className="lb9a-wrapper min-h-screen bg-[#0b0e14] text-[#d6e0ea] flex flex-col">
      {/* Top Header Bar */}
      <header className="lb9a-header sticky top-0 z-40 bg-[#0f131c] border-b border-[#1b2230] h-14 md:h-16 flex items-center justify-between px-3 md:px-5">
        <div className="flex items-center gap-2 md:gap-4">
          {/* Mobile hamburger opens target-based drawer */}
          <a
            href="#lb-mobile-nav"
            className="lg:hidden p-2 text-[#8b9bb0] hover:text-white rounded-lg focus:outline-none"
            aria-label="Открыть меню"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </a>

          {/* Logo */}
          <a href={REF_URL} className="flex items-center gap-2.5 group">
            <div className="w-8 h-8 md:w-9 md:h-9 relative rounded-lg overflow-hidden bg-[#162030] flex items-center justify-center border border-[#2086fe]/30">
              <Image
                src="/images/logo-bear.png"
                alt="Lucky Bear Casino Logo"
                width={36}
                height={36}
                className="object-contain"
                priority
              />
            </div>
            <div className="flex flex-col">
              <span className="font-extrabold text-base md:text-lg tracking-wider text-white leading-tight uppercase flex items-center gap-1">
                LUCKY<span className="text-[#2086fe]">BEAR</span>
              </span>
            </div>
          </a>
        </div>

        {/* Header navigation pills (desktop) */}
        <nav className="hidden md:flex items-center gap-1.5 lg:gap-2">
          <a
            href={REF_URL}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs lg:text-sm font-medium text-[#93a4b8] hover:text-white hover:bg-[#161c28] transition-colors"
          >
            <svg className="w-4 h-4 text-[#2086fe]" fill="currentColor" viewBox="0 0 20 20">
              <path d="M4 4a2 2 0 00-2 2v1h16V6a2 2 0 00-2-2H4z" />
              <path fillRule="evenodd" d="M18 9H2v5a2 2 0 002 2h12a2 2 0 002-2V9zM4 13a1 1 0 011-1h1a1 1 0 110 2H5a1 1 0 01-1-1zm5-1a1 1 0 100 2h1a1 1 0 100-2H9z" clipRule="evenodd" />
            </svg>
            <span>Призовой пул</span>
          </a>
          <a
            href={REF_URL}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs lg:text-sm font-medium text-[#93a4b8] hover:text-white hover:bg-[#161c28] transition-colors"
          >
            <svg className="w-4 h-4 text-[#8b9bb0]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span>История</span>
          </a>
          <a
            href={REF_URL}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs lg:text-sm font-medium text-[#93a4b8] hover:text-white hover:bg-[#161c28] transition-colors"
          >
            <svg className="w-4 h-4 text-[#e04868]" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
            </svg>
            <span>Избранное</span>
          </a>
          <a
            href={REF_URL}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs lg:text-sm font-medium text-[#93a4b8] hover:text-white hover:bg-[#161c28] transition-colors"
          >
            <svg className="w-4 h-4 text-[#f5a623]" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M5 5a3 3 0 015-2.236A3 3 0 0115 5v1h1a2 2 0 012 2v10a2 2 0 01-2 2H4a2 2 0 01-2-2V8a2 2 0 012-2h1V5zm6 1V5a1 1 0 00-1-1H9a1 1 0 00-1 1v1h4zM4 9v9h12V9H4z" clipRule="evenodd" />
            </svg>
            <span>Промокод</span>
          </a>
        </nav>

        {/* Right CTA */}
        <div className="flex items-center gap-2">
          <a
            href={REF_URL}
            className="lb9a-btn-primary px-3 md:px-5 py-1.5 md:py-2 rounded-lg text-[11px] md:text-sm font-semibold text-white tracking-wide uppercase inline-flex items-center gap-1.5 whitespace-nowrap"
          >
            <span>Зарегистрировать / Войти</span>
          </a>
        </div>
      </header>

      {/* Main Container with Sidebar + Content */}
      <div className="flex flex-1 relative">
        {/* Sidebar Navigation (Desktop sticky + Mobile Drawer via :target) */}
        <aside
          id="lb-mobile-nav"
          className="fixed lg:sticky top-0 lg:top-14 h-screen lg:h-[calc(100vh-3.5rem)] w-64 bg-[#0d1119] border-r border-[#1a212e] z-50 lg:z-10 flex flex-col justify-between py-4 px-3 overflow-y-auto"
        >
          <div className="flex flex-col gap-4">
            {/* Mobile close button */}
            <div className="lg:hidden flex items-center justify-between pb-3 border-b border-[#1b2230]">
              <span className="font-bold text-white text-sm">Меню навигации</span>
              <a href="#!" className="p-1.5 text-[#8b9bb0] hover:text-white" aria-label="Закрыть">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </a>
            </div>

            {/* Casino / Sport Switch */}
            <div className="grid grid-cols-2 p-1 bg-[#131924] rounded-lg border border-[#1d2636]">
              <a
                href={REF_URL}
                className="py-1.5 text-center text-xs font-semibold rounded-md bg-[#2086fe] text-white shadow"
              >
                Казино
              </a>
              <a
                href={REF_URL}
                className="py-1.5 text-center text-xs font-medium rounded-md text-[#8899ac] hover:text-white transition-colors"
              >
                Спорт
              </a>
            </div>

            {/* Main navigation links */}
            <nav className="flex flex-col gap-1">
              <a
                href={REF_URL}
                className="lb9a-nav-link lb9a-nav-link-active flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium"
              >
                <svg className="w-4 h-4 text-[#2086fe]" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
                </svg>
                <span>Главная</span>
              </a>
              <a
                href={REF_URL}
                className="lb9a-nav-link flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium text-[#8899ac]"
              >
                <span className="text-[#8899ac]">🎰</span>
                <span>Слоты</span>
              </a>
              <a
                href={REF_URL}
                className="lb9a-nav-link flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium text-[#8899ac]"
              >
                <span className="text-[#2086fe]">✦</span>
                <span>Быстрые игры</span>
              </a>
              <a
                href={REF_URL}
                className="lb9a-nav-link flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium text-[#8899ac]"
              >
                <span className="text-[#ff603e]">🔥</span>
                <span>Популярные</span>
              </a>
              <a
                href={REF_URL}
                className="lb9a-nav-link flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium text-[#8899ac]"
              >
                <span className="text-[#f5a623]">🎁</span>
                <span>Покупка Бонуса</span>
              </a>
              <a
                href={REF_URL}
                className="lb9a-nav-link flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium text-[#8899ac]"
              >
                <span className="text-[#22c55e]">✨</span>
                <span>Новинки</span>
              </a>
              <a
                href={REF_URL}
                className="lb9a-nav-link flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium text-[#8899ac]"
              >
                <span className="text-[#e04868]">▶</span>
                <span>Live-игры</span>
              </a>
            </nav>

            {/* Secondary navigation */}
            <div className="pt-3 border-t border-[#1b2230] flex flex-col gap-1">
              <a
                href={REF_URL}
                className="lb9a-nav-link flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium text-[#8899ac]"
              >
                <span>👥</span>
                <span>Пригласить</span>
              </a>
              <a
                href={REF_URL}
                className="lb9a-nav-link flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium text-[#8899ac]"
              >
                <span>⭐</span>
                <span>Бонусы</span>
              </a>
              <a
                href={REF_URL}
                className="lb9a-nav-link flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium text-[#8899ac]"
              >
                <span>💳</span>
                <span>Пополнить</span>
              </a>
              <a
                href={REF_URL}
                className="lb9a-nav-link flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium text-[#8899ac]"
              >
                <span>👤</span>
                <span>Профиль</span>
              </a>
            </div>
          </div>

          {/* Rail footer */}
          <div className="pt-4 border-t border-[#1b2230] flex items-center justify-between text-xs text-[#627387]">
            <div className="flex items-center gap-2">
              <a href={REF_URL} className="hover:text-white" aria-label="VK">VK</a>
              <a href={REF_URL} className="hover:text-white" aria-label="X">𝕏</a>
              <a href={REF_URL} className="hover:text-white" aria-label="Inst">IG</a>
            </div>
            <div className="flex items-center gap-1.5">
              <span className="w-4 h-3 inline-block rounded-xs overflow-hidden bg-[#1f2937] border border-[#374151]">🇷🇺</span>
              <span className="font-semibold text-white">RU</span>
            </div>
          </div>
        </aside>

        {/* Mobile Scrim Backdrop for target drawer (must be following sibling of #lb-mobile-nav) */}
        <a
          href="#!"
          className="lb9a-scrim fixed inset-0 bg-black/75 z-40 lg:hidden"
          aria-label="Закрыть меню"
        />

        {/* Main Content Area */}
        <main className="flex-1 flex flex-col min-w-0 p-3 md:p-5 lg:p-6 space-y-6">
          {/* SCREEN 1: Hero Banner Grid */}
          <section className="grid grid-cols-1 lg:grid-cols-12 gap-3 md:gap-4">
            {/* Big Main Banner (Cash Gun / Cashback up to 12%) */}
            <div className="lg:col-span-8 lb9a-card rounded-2xl relative overflow-hidden min-h-[220px] md:min-h-[280px] p-5 md:p-8 flex flex-col justify-between group">
              {/* Background art */}
              <div className="absolute inset-0 z-0">
                <Image
                  src="/images/hero-cash-gun.png"
                  alt="Lucky Bear Casino Cash Gun Bonus"
                  fill
                  className="object-cover object-right opacity-90 group-hover:scale-105 transition-transform duration-500"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-r from-[#0b101b] via-[#0b101b]/80 to-transparent" />
              </div>

              {/* Foreground content */}
              <div className="relative z-10 max-w-md space-y-3">
                <div className="inline-block px-2.5 py-1 rounded bg-[#2086fe]/20 text-[#2086fe] text-xs font-semibold tracking-wider uppercase border border-[#2086fe]/40">
                  Акция Lucky Bear
                </div>
                <h1 className="text-2xl md:text-3xl lg:text-4xl font-extrabold text-white leading-tight">
                  Еженедельный кэшбэк — до 12%
                </h1>
                <p className="text-xs md:text-sm text-[#9bb0c7] line-clamp-2">
                  Возвращайте часть ставок каждую неделю в Lucky Bear Casino без скрытых условий и вейджеров.
                </p>
                <div className="pt-2">
                  <a
                    href={REF_URL}
                    className="lb9a-btn-primary px-6 py-2.5 rounded-lg text-sm font-semibold text-white tracking-wide uppercase inline-flex items-center gap-2"
                  >
                    <span>Участвовать</span>
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </a>
                </div>
              </div>

              {/* Watermark badge on right */}
              <div className="relative z-10 self-end text-xs text-[#8ca0b8] pt-2">
                * Правила и условия на официальном сайте Lucky Bear
              </div>
            </div>

            {/* Right Banner Stack (2 Cards) */}
            <div className="lg:col-span-4 flex flex-col gap-3 md:gap-4">
              {/* Top Mini Banner: 5,000,000 P Lucky Bonus */}
              <div className="lb9a-card rounded-2xl p-4 md:p-5 relative overflow-hidden flex flex-col justify-between min-h-[135px] group">
                <div className="absolute inset-0 z-0">
                  <Image
                    src="/images/banner-wheel.png"
                    alt="Lucky Bonus Wheel"
                    fill
                    className="object-cover object-right opacity-80 group-hover:scale-105 transition-transform duration-500"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-[#0d121c] via-[#0d121c]/80 to-transparent" />
                </div>
                <div className="relative z-10 space-y-1">
                  <span className="text-[10px] uppercase font-bold tracking-wider text-[#93a4b8] bg-[#161d2b] px-2 py-0.5 rounded">
                    Ежедневно разыгрывается более
                  </span>
                  <div className="text-xl md:text-2xl font-black text-[#f5a623] tracking-wide">
                    5,000,000 ₽
                  </div>
                  <span className="text-xs font-semibold text-white">Акция Lucky Bonus</span>
                </div>
                <div className="relative z-10 pt-2">
                  <a
                    href={REF_URL}
                    className="text-xs font-semibold text-[#2086fe] hover:text-[#52a4ff] inline-flex items-center gap-1"
                  >
                    Подробнее →
                  </a>
                </div>
              </div>

              {/* Bottom Mini Banner: Free Spins */}
              <div className="lb9a-card rounded-2xl p-4 md:p-5 relative overflow-hidden flex flex-col justify-between min-h-[135px] group">
                <div className="absolute inset-0 z-0">
                  <Image
                    src="/images/banner-girl.png"
                    alt="Free Spins Casino Girl"
                    fill
                    className="object-cover object-right opacity-80 group-hover:scale-105 transition-transform duration-500"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-[#0d121c] via-[#0d121c]/80 to-transparent" />
                </div>
                <div className="relative z-10 space-y-1 max-w-[65%]">
                  <div className="text-base md:text-lg font-extrabold text-white">
                    Твои FS уже ждут
                  </div>
                  <p className="text-[11px] text-[#93a4b8] leading-snug">
                    Просто пополни счёт — и получи бесплатные FS
                  </p>
                </div>
                <div className="relative z-10 pt-2">
                  <a
                    href={REF_URL}
                    className="lb9a-btn-primary px-4 py-1.5 rounded-lg text-xs font-semibold text-white inline-block text-center"
                  >
                    Получить FS
                  </a>
                </div>
              </div>
            </div>
          </section>

          {/* Category Filter Chips Bar */}
          <section className="flex items-center justify-between gap-2 overflow-x-auto pb-1 no-scrollbar">
            <div className="flex items-center gap-1.5 md:gap-2">
              <a
                href={REF_URL}
                className="lb9a-chip lb9a-chip-active px-3 py-1.5 rounded-lg text-xs md:text-sm font-semibold flex items-center gap-1.5 whitespace-nowrap"
              >
                <span>▦</span>
                <span>Все</span>
              </a>
              <a
                href={REF_URL}
                className="lb9a-chip bg-[#131924] border border-[#1b2230] px-3 py-1.5 rounded-lg text-xs md:text-sm font-medium text-[#8899ac] flex items-center gap-1.5 whitespace-nowrap"
              >
                <span>🍒</span>
                <span>Слоты</span>
              </a>
              <a
                href={REF_URL}
                className="lb9a-chip bg-[#131924] border border-[#1b2230] px-3 py-1.5 rounded-lg text-xs md:text-sm font-medium text-[#8899ac] flex items-center gap-1.5 whitespace-nowrap"
              >
                <span>✦</span>
                <span>Быстрые игры</span>
              </a>
              <a
                href={REF_URL}
                className="lb9a-chip bg-[#131924] border border-[#1b2230] px-3 py-1.5 rounded-lg text-xs md:text-sm font-medium text-[#8899ac] flex items-center gap-1.5 whitespace-nowrap"
              >
                <span>🔥</span>
                <span>Популярные</span>
              </a>
              <a
                href={REF_URL}
                className="lb9a-chip bg-[#131924] border border-[#1b2230] px-3 py-1.5 rounded-lg text-xs md:text-sm font-medium text-[#8899ac] flex items-center gap-1.5 whitespace-nowrap"
              >
                <span>🎁</span>
                <span>Покупка Бонуса</span>
              </a>
              <a
                href={REF_URL}
                className="lb9a-chip bg-[#131924] border border-[#1b2230] px-3 py-1.5 rounded-lg text-xs md:text-sm font-medium text-[#8899ac] flex items-center gap-1.5 whitespace-nowrap"
              >
                <span>✨</span>
                <span>Новинки</span>
              </a>
            </div>

            {/* Search and Providers Dropdown */}
            <div className="flex items-center gap-2">
              <a
                href={REF_URL}
                className="p-2 rounded-lg bg-[#131924] border border-[#1b2230] text-[#8899ac] hover:text-white"
                aria-label="Поиск игр"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </a>
              <a
                href={REF_URL}
                className="hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-lg bg-[#131924] border border-[#1b2230] text-xs md:text-sm font-medium text-[#8899ac] hover:text-white"
              >
                <span>▦ Провайдеры</span>
                <span className="text-[10px]">▼</span>
              </a>
            </div>
          </section>

          {/* Slot Showcase Carousel / Grid Row (7 Games from Screen 2) */}
          <section className="space-y-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="text-[#2086fe]">🎰</span>
                <h3 className="text-base md:text-lg font-bold text-white tracking-wide">Слоты</h3>
              </div>
              <div className="flex items-center gap-2">
                <a href={REF_URL} className="text-xs font-semibold text-[#8899ac] hover:text-white">
                  Все
                </a>
                <div className="flex items-center gap-1 text-[#627387]">
                  <a href={REF_URL} className="p-1 rounded bg-[#131924] hover:text-white">‹</a>
                  <a href={REF_URL} className="p-1 rounded bg-[#131924] hover:text-white">›</a>
                </div>
              </div>
            </div>

            {/* Slots Cards Row */}
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-3">
              {/* Game 1 */}
              <a href={REF_URL} className="lb9a-slot-card group rounded-xl overflow-hidden bg-[#121722] border border-[#1c2433] flex flex-col">
                <div className="relative aspect-[3/4] w-full overflow-hidden">
                  <Image
                    src="/images/slot-bounty.png"
                    alt="Wild Bounty Showdown Slot"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent opacity-80" />
                  <div className="absolute bottom-2 inset-x-2 text-center">
                    <div className="text-[11px] font-black uppercase text-white leading-tight">WILD BOUNTY</div>
                    <div className="text-[9px] font-semibold text-[#f5a623]">PG SOFT</div>
                  </div>
                </div>
              </a>

              {/* Game 2 */}
              <a href={REF_URL} className="lb9a-slot-card group rounded-xl overflow-hidden bg-[#121722] border border-[#1c2433] flex flex-col">
                <div className="relative aspect-[3/4] w-full overflow-hidden">
                  <Image
                    src="/images/slot-peacock.png"
                    alt="3 Coin Peacock Slot"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent opacity-80" />
                  <div className="absolute bottom-2 inset-x-2 text-center">
                    <div className="text-[11px] font-black uppercase text-white leading-tight">3 COIN PEACOCK</div>
                    <div className="text-[9px] font-semibold text-[#f5a623]">PG SOFT</div>
                  </div>
                </div>
              </a>

              {/* Game 3 */}
              <a href={REF_URL} className="lb9a-slot-card group rounded-xl overflow-hidden bg-[#121722] border border-[#1c2433] flex flex-col">
                <div className="relative aspect-[3/4] w-full overflow-hidden">
                  <Image
                    src="/images/slot-gemstones.png"
                    alt="Gemstones Gold Slot"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent opacity-80" />
                  <div className="absolute bottom-2 inset-x-2 text-center">
                    <div className="text-[11px] font-black uppercase text-white leading-tight">GEMSTONES GOLD</div>
                    <div className="text-[9px] font-semibold text-[#f5a623]">PG SOFT</div>
                  </div>
                </div>
              </a>

              {/* Game 4 */}
              <a href={REF_URL} className="lb9a-slot-card group rounded-xl overflow-hidden bg-[#121722] border border-[#1c2433] flex flex-col">
                <div className="relative aspect-[3/4] w-full overflow-hidden">
                  <Image
                    src="/images/slot-crown.png"
                    alt="Crown Coins Slot"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent opacity-80" />
                  <div className="absolute bottom-2 inset-x-2 text-center">
                    <div className="text-[11px] font-black uppercase text-white leading-tight">CROWN COINS</div>
                    <div className="text-[9px] font-semibold text-[#2086fe]">ENDORPHINA</div>
                  </div>
                </div>
              </a>

              {/* Game 5 */}
              <a href={REF_URL} className="lb9a-slot-card group rounded-xl overflow-hidden bg-[#121722] border border-[#1c2433] flex flex-col">
                <div className="relative aspect-[3/4] w-full overflow-hidden">
                  <Image
                    src="/images/slot-speed.png"
                    alt="Speed Winner Slot"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent opacity-80" />
                  <div className="absolute bottom-2 inset-x-2 text-center">
                    <div className="text-[11px] font-black uppercase text-white leading-tight">SPEED WINNER</div>
                    <div className="text-[9px] font-semibold text-[#f5a623]">PG SOFT</div>
                  </div>
                </div>
              </a>

              {/* Game 6 */}
              <a href={REF_URL} className="lb9a-slot-card group rounded-xl overflow-hidden bg-[#121722] border border-[#1c2433] flex flex-col">
                <div className="relative aspect-[3/4] w-full overflow-hidden">
                  <Image
                    src="/images/slot-bonanza.png"
                    alt="Sweet Bonanza 2500 Slot"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent opacity-80" />
                  <div className="absolute bottom-2 inset-x-2 text-center">
                    <div className="text-[11px] font-black uppercase text-white leading-tight">SWEET BONANZA</div>
                    <div className="text-[9px] font-semibold text-[#2086fe]">PRAGMATIC</div>
                  </div>
                </div>
              </a>

              {/* Game 7 */}
              <a href={REF_URL} className="lb9a-slot-card group rounded-xl overflow-hidden bg-[#121722] border border-[#1c2433] flex flex-col col-span-2 sm:col-span-1">
                <div className="relative aspect-[3/4] w-full overflow-hidden">
                  <Image
                    src="/images/slot-garuda.png"
                    alt="Fortune Garuda 1000 Slot"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent opacity-80" />
                  <div className="absolute bottom-2 inset-x-2 text-center">
                    <div className="text-[11px] font-black uppercase text-white leading-tight">FORTUNE GARUDA</div>
                    <div className="text-[9px] font-semibold text-[#f5a623]">PG SOFT</div>
                  </div>
                </div>
              </a>
            </div>
          </section>

          {/* Quick CTA strip */}
          <section className="lb9a-card rounded-2xl p-4 md:p-6 flex flex-col sm:flex-row items-center justify-between gap-4 border border-[#2086fe]/20 bg-gradient-to-r from-[#10192b] via-[#0d1422] to-[#121c2e]">
            <div className="space-y-1 text-center sm:text-left">
              <div className="text-sm md:text-base font-bold text-white">
                Готовы начать игру в <span className="text-[#2086fe]">Lucky Bear Casino</span> прямо сейчас?
              </div>
              <p className="text-xs text-[#8da2b8]">
                Мгновенная регистрация в Лаки Бир Казино, 100% бонус на первый депозит и еженедельный кэшбэк до 12%.
              </p>
            </div>
            <a
              href={REF_URL}
              className="lb9a-btn-primary px-6 py-3 rounded-xl text-xs md:text-sm font-bold text-white uppercase tracking-wider whitespace-nowrap shadow-lg"
            >
              Перейти к игре
            </a>
          </section>

          {/* SEO TEXT SECTION (300-400 words plain HTML text with all keywords in H2 and paragraphs) */}
          <article className="lb9a-seo-article lb9a-card rounded-2xl p-5 md:p-8 space-y-6 text-[#b3c2d4] leading-relaxed text-sm md:text-base border border-[#1b2333]">
            {/* Section 1 */}
            <section id="official" className="space-y-3">
              <h2 className="text-xl md:text-2xl font-extrabold text-white tracking-wide border-b border-[#1f2838] pb-2">
                Lucky Bear Casino Официальный Сайт — Онлайн Казино Лаки Бир
              </h2>
              <p>
                Современное онлайн заведение <strong>Lucky Bear Casino</strong> представляет собой передовую игровую платформу для ценителей лицензионных азартных развлечений. Посещая <strong>Luckybear Casino официальный сайт</strong>, каждый игрок получает моментальный доступ к огромной коллекции сертифицированных аппаратов, настольных симуляторов и динамичных комнат с живыми крупье. Наш <strong>лаки бир казино официальный сайт</strong> разработан с учетом комфорта как опытных пользователей, так и новичков: быстрая регистрация по номеру телефона или email занимает не более одной минуты, а понятный интерфейс позволяет мгновенно перейти к вращениям. Популярный клуб <strong>lucky bear казино</strong> славится кристально честной игровой отдачей, сертифицированным генератором случайных чисел и поддержкой надежных платежных систем для быстрого депозита и мгновенных выплат.
              </p>
            </section>

            {/* Section 2 */}
            <section id="mirror" className="space-y-3">
              <h2 className="text-xl md:text-2xl font-extrabold text-white tracking-wide border-b border-[#1f2838] pb-2">
                Luckybear Casino Зеркало и Рабочее Лаки Бир Казино Зеркало
              </h2>
              <p>
                В случае временных сетевых ограничений или плановых технических работ провайдеров стабильное подключение обеспечивает актуальное <strong>luckybear casino зеркало</strong>. Надежное <strong>лаки бир казино зеркало</strong> полностью повторяет функционал основного ресурса, сохраняет ваш баланс, историю ставок, активные бонусы и статус в программе лояльности. Чтобы зайти в личный кабинет через альтернативный адрес, достаточно открыть рабочую ссылку — вход происходит по вашим стандартным учетным данным без повторной регистрации. Для постоянного и бесперебойного доступа к <strong>lucky bear casino</strong> мы круглосуточно обновляем защищенные зеркала с шифрованием данных по протоколу SSL, что гарантирует полную безопасность платежей и конфиденциальность каждого игрока.
              </p>
            </section>

            {/* Section 3 */}
            <section id="online" className="space-y-3">
              <h2 className="text-xl md:text-2xl font-extrabold text-white tracking-wide border-b border-[#1f2838] pb-2">
                Лаки Бир Казино Онлайн и Официальный Лакибир Казино Сайт
              </h2>
              <p>
                Запуская любимые слоты в <strong>лаки бир казино онлайн</strong>, пользователи открывают для себя тысячи сертифицированных автоматов от мировых провайдеров, среди которых Pragmatic Play, PG Soft, Endorphina, Spinomenal и Evolution Gaming. Проверенный <strong>лакибир казино официальный сайт</strong> гарантирует высокий теоретический процент отдачи (RTP до 97.8%), захватывающие бонусные раунды с покупкой фриспинов и щедрый еженедельный кэшбэк до 12%. Кроме того, оригинальный <strong>лаки бир казино сайт</strong> и портал <strong>лакибир казино</strong> отлично оптимизированы под мобильные экраны любых смартфонов и планшетов: делать ставки, участвовать в регулярных турнирах с призовыми фондами свыше 5,000,000 рублей и выводить выигрыши на банковские карты или криптовалютные кошельки одинаково удобно из любой точки мира.
              </p>
            </section>

            {/* Mid CTA button inside article */}
            <div className="pt-2 pb-1 flex justify-center">
              <a
                href={REF_URL}
                className="lb9a-btn-primary px-8 py-3.5 rounded-xl text-sm md:text-base font-bold text-white uppercase tracking-wider shadow-xl inline-flex items-center gap-2"
              >
                <span>Войти в Luckybear Casino</span>
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </a>
            </div>
          </article>

          {/* Footer with Hashtags and Info */}
          <footer className="space-y-4 pt-4 border-t border-[#1a2230] text-xs text-[#728396]">
            {/* SEO Hashtags built from keyword phrases */}
            <div className="space-y-2">
              <div className="font-semibold text-[#8ca0b8] uppercase tracking-wider text-[11px]">
                Навигация и ключевые темы:
              </div>
              <div className="flex flex-wrap gap-2">
                <a href="#official" className="hover:text-[#2086fe] bg-[#121824] px-2.5 py-1 rounded border border-[#1b2434] transition-colors">
                  #lucky_bear_casino
                </a>
                <a href="#official" className="hover:text-[#2086fe] bg-[#121824] px-2.5 py-1 rounded border border-[#1b2434] transition-colors">
                  #luckybear_casino
                </a>
                <a href="#mirror" className="hover:text-[#2086fe] bg-[#121824] px-2.5 py-1 rounded border border-[#1b2434] transition-colors">
                  #luckybear_casino_зеркало
                </a>
                <a href="#official" className="hover:text-[#2086fe] bg-[#121824] px-2.5 py-1 rounded border border-[#1b2434] transition-colors">
                  #luckybear_casino_официальный
                </a>
                <a href="#official" className="hover:text-[#2086fe] bg-[#121824] px-2.5 py-1 rounded border border-[#1b2434] transition-colors">
                  #luckybear_casino_официальный_сайт
                </a>
                <a href="#official" className="hover:text-[#2086fe] bg-[#121824] px-2.5 py-1 rounded border border-[#1b2434] transition-colors">
                  #lucky_bear_казино
                </a>
                <a href="#online" className="hover:text-[#2086fe] bg-[#121824] px-2.5 py-1 rounded border border-[#1b2434] transition-colors">
                  #лаки_бир_казино
                </a>
                <a href="#online" className="hover:text-[#2086fe] bg-[#121824] px-2.5 py-1 rounded border border-[#1b2434] transition-colors">
                  #лакибир_казино
                </a>
                <a href="#mirror" className="hover:text-[#2086fe] bg-[#121824] px-2.5 py-1 rounded border border-[#1b2434] transition-colors">
                  #лаки_бир_казино_зеркало
                </a>
                <a href="#online" className="hover:text-[#2086fe] bg-[#121824] px-2.5 py-1 rounded border border-[#1b2434] transition-colors">
                  #лаки_бир_казино_онлайн
                </a>
                <a href="#official" className="hover:text-[#2086fe] bg-[#121824] px-2.5 py-1 rounded border border-[#1b2434] transition-colors">
                  #лаки_бир_казино_официальный
                </a>
                <a href="#official" className="hover:text-[#2086fe] bg-[#121824] px-2.5 py-1 rounded border border-[#1b2434] transition-colors">
                  #лаки_бир_казино_официальный_сайт
                </a>
                <a href="#online" className="hover:text-[#2086fe] bg-[#121824] px-2.5 py-1 rounded border border-[#1b2434] transition-colors">
                  #лакибир_казино_официальный_сайт
                </a>
                <a href="#online" className="hover:text-[#2086fe] bg-[#121824] px-2.5 py-1 rounded border border-[#1b2434] transition-colors">
                  #лаки_бир_казино_сайт
                </a>
              </div>
            </div>

            {/* Copyright and age warning */}
            <div className="pt-3 border-t border-[#171e2b] flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-left">
              <div>
                © 2026 Lucky Bear Casino (Лаки Бир Казино). Все права защищены. 18+ Играйте ответственно.
              </div>
              <div className="flex items-center gap-3">
                <a href={REF_URL} className="hover:text-white transition-colors">Правила и условия</a>
                <span>•</span>
                <a href={REF_URL} className="hover:text-white transition-colors">Ответственная игра</a>
                <span>•</span>
                <a href={REF_URL} className="hover:text-white transition-colors">Поддержка 24/7</a>
              </div>
            </div>
          </footer>
        </main>
      </div>
    </div>
  )
}
