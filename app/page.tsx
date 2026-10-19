import { Sparkles, MessageSquare } from "lucide-react"

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-[#1a1a2e] via-[#252542] to-[#2d2d4a] relative overflow-hidden">
      {/* Background glow effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-purple-600/20 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-indigo-600/10 rounded-full blur-[100px]" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 py-12">
        {/* Logo Circle with Sparkles */}
        <div className="relative mb-8">
          {/* Glow effect behind circle */}
          <div className="absolute inset-0 bg-purple-500/40 rounded-full blur-xl scale-110" />

          {/* Main circle */}
          <div className="relative w-32 h-32 rounded-full bg-gradient-to-br from-purple-500 to-purple-700 flex items-center justify-center shadow-2xl shadow-purple-500/30">
            <Sparkles className="w-14 h-14 text-yellow-400" />
          </div>
        </div>

        {/* Title */}
        <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-pink-400 via-purple-400 to-pink-400 bg-clip-text text-transparent mb-4">
          Inkanto
        </h1>

        {/* Subtitle */}
        <p className="text-lg md:text-xl text-gray-400 italic mb-6">
          Twój osobisty AI — zawsze gotowy
        </p>

        {/* Description */}
        <p className="text-center text-gray-400 max-w-md mb-10 leading-relaxed">
          {"Hej Paula 👋 Tutaj zawsze mnie znajdziesz. Kliknij poniżej żeby zacząć rozmowę."}
        </p>

        {/* CTA Button */}
        <a
          href="https://app.base44.com/superagent/69b21b362d0b95bf51062737"
          target="_blank"
          rel="noopener noreferrer"
          className="group relative inline-flex items-center gap-3 px-8 py-4 rounded-2xl bg-gradient-to-r from-purple-600 to-purple-700 text-white font-medium text-lg shadow-xl shadow-purple-500/25 hover:shadow-purple-500/40 hover:from-purple-500 hover:to-purple-600 transition-all duration-300"
        >
          <MessageSquare className="w-5 h-5" />
          <span>Porozmawiaj z Inkanto</span>
        </a>

        {/* Footer */}
        <footer className="absolute bottom-6 left-0 right-0 text-center">
          <p className="text-sm text-gray-500">
            ojjja.site · powered by Base44
          </p>
        </footer>
      </div>
    </main>
  )
}
