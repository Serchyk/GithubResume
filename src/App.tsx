import { useEffect, useState } from "react"
import { experiences, petProjects, profile, projects, skills, education } from "./data"

const ALLOWED_DOMAINS = (import.meta.env.VITE_ALLOWED_DOMAINS || "").split(",").filter(Boolean)

function DomainGuard({ children }: { children: React.ReactNode }) {
  if (ALLOWED_DOMAINS.length > 0 && !ALLOWED_DOMAINS.includes(location.hostname)) {
    return (
      <div className="min-h-screen bg-[#08080a] flex items-center justify-center p-6">
        <div className="text-center max-w-md">
          <div className="text-6xl mb-4">🚫</div>
          <h1 className="text-2xl font-bold text-white mb-2">Доступ запрещён</h1>
          <p className="text-zinc-400 text-sm">Этот сайт привязан к конкретному домену и не может быть размещён на другом ресурсе.</p>
          <p className="text-zinc-600 text-xs mt-4">Licensed to: {ALLOWED_DOMAINS[0]}</p>
        </div>
      </div>
    )
  }
  return <>{children}</>
}

function ContactModal({ open, onClose }: { open: boolean; onClose: () => void }) {
  useEffect(() => {
    if (!open) return
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose()
    document.addEventListener("keydown", onKey)
    document.body.style.overflow = "hidden"
    return () => { document.removeEventListener("keydown", onKey); document.body.style.overflow = "" }
  }, [open, onClose])
  if (!open) return null
  return (
    <div onClick={onClose} className="fixed inset-0 z-[100] grid place-items-center p-4 bg-black/60 backdrop-blur-sm">
      <div onClick={e=>e.stopPropagation()} className="w-full max-w-[420px] rounded-[24px] bg-zinc-900 border border-white/10 p-6 shadow-2xl">
        <div className="flex items-start justify-between gap-4">
          <div>
            <h3 className="text-lg font-bold text-white">Написать</h3>
            <p className="text-sm text-zinc-400 mt-1">Выберите удобный способ связи — отвечу быстро.</p>
          </div>
          <button onClick={onClose} className="w-8 h-8 rounded-full bg-white/10 grid place-items-center text-zinc-300 hover:bg-white/15">✕</button>
        </div>
        <div className="mt-5 grid gap-3">
          <a href={profile.telegram} target="_blank" rel="noreferrer" onClick={onClose}
            className="flex items-center gap-4 rounded-2xl bg-[#229ED9] hover:bg-[#1d8dc2] text-white p-4 transition">
            <div className="w-10 h-10 rounded-xl bg-white/20 grid place-items-center text-xl">✈️</div>
            <div className="text-left">
              <div className="font-semibold leading-none">Telegram</div>
              <div className="text-xs opacity-80 mt-1">@serchy_k — предпочитаемый для быстрой связи</div>
            </div>
            <span className="ml-auto text-xl">↗</span>
          </a>
          <a href={`mailto:${profile.email}`} onClick={onClose}
            className="flex items-center gap-4 rounded-2xl bg-white text-black p-4 hover:bg-zinc-100 transition">
            <div className="w-10 h-10 rounded-xl bg-zinc-900 text-white grid place-items-center">✉️</div>
            <div className="text-left">
              <div className="font-semibold leading-none">{profile.email}</div>
              <div className="text-xs text-zinc-600 mt-1">Почта — предпочитаемый способ • ответ в течение дня</div>
            </div>
            <span className="ml-auto text-xl">↗</span>
          </a>
          <a href={`tel:${profile.phone.replace(/[^+0-9]/g,"")}`} onClick={onClose}
            className="flex items-center gap-3 rounded-2xl bg-white/5 border border-white/10 p-3.5 hover:bg-white/10 transition text-zinc-300 text-sm">
            <span>📞 {profile.phone}</span><span className="ml-auto text-xs text-zinc-500">позвонить</span>
          </a>
        </div>
        <div className="mt-4 text-center">
          <button onClick={onClose} className="text-xs text-zinc-500 hover:text-zinc-300">Закрыть</button>
        </div>
      </div>
    </div>
  )
}

function PrintHeader() {
  return (
    <div className="print-only max-w-[1120px] mx-auto px-6 pt-4 pb-3 border-b-2 border-zinc-900">
      <div className="flex justify-between items-start gap-6">
        <div>
          <div className="text-[22px] font-extrabold tracking-tight text-zinc-900 leading-none">{profile.name}</div>
          <div className="text-sm text-zinc-700 mt-1 font-medium">{profile.role} • {profile.specialization} • {profile.city}</div>
          <div className="text-xs text-zinc-600 mt-1">Опыт 9 лет 1 мес • {profile.format} • {profile.salary} {profile.salaryNote} • {profile.age} лет</div>
          <div className="text-xs text-zinc-600 mt-1">Рассматриваю: {profile.relocation.slice(0,8).join(", ")} и др. • {profile.citizenship}</div>
        </div>
        <div className="text-right text-xs leading-relaxed text-zinc-700 shrink-0">
          <div><span className="font-semibold">Тел:</span> {profile.phone}</div>
          <div><span className="font-semibold">Почта:</span> {profile.email} ★</div>
          <div><span className="font-semibold">Telegram:</span> {profile.telegram.replace("https://","")}</div>
          <div><span className="font-semibold">GitHub:</span> github.com/Serchyk</div>
          <div className="text-[10px] text-zinc-500 mt-1">Обновлено 31.08.2026 • weap4@yandex.ru — предпочитаемый</div>
        </div>
      </div>
    </div>
  )
}

function Header({ onContact, onPrint }: { onContact: () => void; onPrint: () => void }) {
  const [open, setOpen] = useState(false)
  return (
    <header className="sticky top-0 z-50 backdrop-blur-xl bg-[#08080a]/70 border-b border-white/[0.06] no-print">
      <div className="max-w-[1120px] mx-auto px-4 sm:px-6 h-[56px] flex items-center justify-between">
        <a href="#" className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-violet-600 to-fuchsia-500 grid place-items-center text-white font-black text-sm">SA</div>
          <span className="font-semibold tracking-tight text-white hidden sm:block">Сергей Андреев</span>
          <span className="text-xs px-2 py-1 rounded-full bg-white/10 text-zinc-300 border border-white/10 hidden md:inline">Fullstack</span>
        </a>
        <nav className="hidden md:flex items-center gap-2.5 text-sm">
          <a href="#experience" className="text-zinc-400 hover:text-white transition px-2">Опыт</a>
          <a href="#projects" className="text-zinc-400 hover:text-white transition px-2">Проекты</a>
          <a href="#skills" className="text-zinc-400 hover:text-white transition px-2">Навыки</a>
          <span className="w-px h-5 bg-white/10 mx-1" />
          <button onClick={onPrint} className="px-3.5 py-2 rounded-full bg-white/10 border border-white/10 text-white hover:bg-white/15 transition text-xs" title="Открыть диалог печати браузера (Ctrl+P)">🖨️ Печать</button>
          <button onClick={onContact} className="px-4 py-2 rounded-full bg-white text-black font-medium hover:bg-zinc-200 transition ml-1">Написать</button>
        </nav>
        <button onClick={() => setOpen(!open)} className="md:hidden w-9 h-9 rounded-xl bg-white/10 grid place-items-center text-white">☰</button>
      </div>
      {open && (
        <div className="md:hidden border-t border-white/10 bg-[#0f0f12] px-4 py-4 flex flex-col gap-3">
          <a onClick={() => setOpen(false)} href="#experience" className="text-zinc-300">Опыт</a>
          <a onClick={() => setOpen(false)} href="#projects" className="text-zinc-300">Проекты</a>
          <a onClick={() => setOpen(false)} href="#skills" className="text-zinc-300">Навыки</a>
          <button onClick={()=>{ onPrint() }} className="px-3 py-2 rounded-full bg-white/10 border border-white/10 text-white text-sm">🖨️ Печать</button>
          <button onClick={()=>{ setOpen(false); onContact() }} className="px-4 py-2 rounded-full bg-white text-black font-medium text-left">Написать</button>
        </div>
      )}
    </header>
  )
}

function Hero({ onContact, onPrint }: { onContact: () => void; onPrint: () => void }) {
  const [showCities, setShowCities] = useState(false)
  return (
    <section className="relative overflow-hidden print:hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-violet-600/20 via-transparent to-transparent pointer-events-none print:hidden" />
      <div className="absolute -top-24 -right-24 w-[600px] h-[600px] bg-fuchsia-500/20 blur-[120px] rounded-full pointer-events-none print:hidden" />
      <div className="absolute -top-10 -left-20 w-[500px] h-[500px] bg-blue-500/15 blur-[120px] rounded-full pointer-events-none print:hidden" />
      <div className="max-w-[1120px] mx-auto px-4 sm:px-6 pt-10 sm:pt-16 pb-8 relative">
        <div className="grid lg:grid-cols-[1.15fr_0.85fr] gap-8 items-start">
          <div>
            <div className="inline-flex items-center gap-2 text-xs">
              <span className="px-2.5 py-1 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">● Открыт к предложениям</span>
              <span className="px-2.5 py-1 rounded-full bg-white/5 text-zinc-400 border border-white/10">{profile.city} • {profile.format}</span>
            </div>
            <h1 className="mt-5 text-[34px] sm:text-[48px] font-extrabold tracking-tight leading-[0.95] text-white">
              {profile.name.split(" ").slice(0,2).join(" ")}<br />
              <span className="bg-gradient-to-r from-violet-400 via-fuchsia-400 to-indigo-400 bg-clip-text text-transparent">{profile.name.split(" ").slice(2).join(" ")}</span>
            </h1>
            <p className="mt-3 text-lg sm:text-xl text-zinc-300 font-medium">{profile.role} <span className="text-zinc-500">• {profile.specialization}</span></p>
            <p className="mt-4 text-[15px] leading-relaxed text-zinc-400 max-w-[60ch]">{profile.about}</p>
            <p className="mt-3 text-[14px] leading-relaxed text-zinc-500 max-w-[60ch] hidden sm:block">{profile.aboutLong}</p>

            <div className="mt-6 flex flex-wrap gap-3 no-print">
              <button onClick={onContact} className="px-5 py-3 rounded-full bg-white text-black font-semibold hover:bg-zinc-200 transition text-sm">Написать</button>
              <button onClick={onPrint} className="px-5 py-3 rounded-full bg-white/10 text-white border border-white/15 hover:bg-white/15 transition text-sm font-medium">🖨️ Печать</button>
              <a href={profile.github} target="_blank" className="px-5 py-3 rounded-full bg-white/10 text-white border border-white/15 hover:bg-white/15 transition text-sm font-medium flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-white/80" /> GitHub
              </a>
            </div>
            <div className="print-only mt-4 text-xs text-zinc-700 border border-zinc-200 rounded-xl p-3 bg-zinc-50">
              <div className="font-semibold text-zinc-900">Контакты для печати:</div>
              <div>Тел {profile.phone} • Почта {profile.email} ★ • Telegram t.me/serchy_k • GitHub github.com/Serchyk</div>
              <div className="text-zinc-500 mt-1">Для связи: Telegram @serchy_k или почта — отвечу в течение дня</div>
            </div>

            <div className="mt-6 flex flex-wrap gap-2 text-xs">
              <span className="px-3 py-1.5 rounded-full bg-white text-black font-bold border border-zinc-200">{profile.salary} <span className="font-normal text-zinc-600">{profile.salaryNote}</span></span>
              <span className="px-3 py-1.5 rounded-full bg-zinc-900 border border-white/10 text-zinc-300">Опыт 9 лет 1 месяц</span>
              <span className="px-3 py-1.5 rounded-full bg-zinc-900 border border-white/10 text-zinc-300">Мужчина, {profile.age} лет</span>
              <button onClick={()=>setShowCities(!showCities)} className="px-3 py-1.5 rounded-full bg-zinc-900 border border-white/10 text-zinc-300 hover:bg-zinc-800 transition no-print">Рассматриваю работу {showCities ? "▲" : "▼"}</button>
            </div>
            {showCities && (
              <div className="mt-3 p-3 rounded-2xl bg-zinc-900 border border-white/10 text-xs leading-relaxed text-zinc-400 no-print">
                Рассматриваю работу в: {profile.relocation.join(" • ")} • готов к командировкам • {profile.citizenship}
              </div>
            )}
            <div className="print-only mt-3 p-2.5 rounded-xl border border-zinc-200 bg-zinc-50 text-xs leading-relaxed text-zinc-600">
              Рассматриваю работу в: {profile.relocation.join(" • ")} • готов к командировкам
            </div>
          </div>

          <div className="relative lg:sticky lg:top-[80px]">
            <div className="rounded-[28px] bg-gradient-to-b from-zinc-900 to-[#0f0f12] border border-white/10 p-5 sm:p-6 shadow-2xl overflow-hidden relative">
              <div className="absolute inset-0 bg-gradient-to-br from-violet-600/10 to-transparent pointer-events-none print:hidden" />
              <div className="relative flex gap-4">
                <div className="w-[84px] h-[84px] rounded-2xl bg-gradient-to-br from-violet-600 to-fuchsia-600 grid place-items-center text-white font-black text-2xl shrink-0">СА</div>
                <div>
                  <div className="text-white font-semibold leading-tight">{profile.shortName}</div>
                  <div className="text-xs text-zinc-400">{profile.birthday} • {profile.city}</div>
                  <div className="mt-2 flex flex-wrap gap-1.5">
                    <span className="text-[11px] px-2 py-1 rounded-full bg-white/10 border border-white/10 text-zinc-300">Flutter Senior</span>
                    <span className="text-[11px] px-2 py-1 rounded-full bg-white/10 border border-white/10 text-zinc-300">Go 2 года</span>
                    <span className="text-[11px] px-2 py-1 rounded-full bg-white/10 border border-white/10 text-zinc-300">React Native</span>
                  </div>
                </div>
              </div>

              <div className="relative mt-5 grid grid-cols-2 gap-3 text-center">
                <div className="rounded-2xl bg-white/[0.06] border border-white/10 p-3">
                  <div className="text-xl font-extrabold text-white">9+</div>
                  <div className="text-[11px] text-zinc-400 leading-tight">лет опыта</div>
                </div>
                <div className="rounded-2xl bg-white/[0.06] border border-white/10 p-3">
                  <div className="text-xl font-extrabold text-white">8</div>
                  <div className="text-[11px] text-zinc-400 leading-tight">крупных проектов</div>
                </div>
              </div>

              <div className="relative mt-5 space-y-2 text-sm">
                <a href={`tel:${profile.phone}`} className="flex items-center justify-between rounded-xl bg-zinc-800 border border-white/10 px-4 py-3 text-zinc-300 hover:bg-zinc-700 transition"><span>📞 {profile.phone}</span><span className="text-xs text-zinc-500">телефон</span></a>
                <a href={`mailto:${profile.email}`} className="flex items-center justify-between rounded-xl bg-white text-black px-4 py-3 font-medium border border-zinc-200"><span>✉️ {profile.email}</span><span className="text-xs bg-black text-white px-2 py-1 rounded-full">предпочитаемый</span></a>
                <div className="flex items-center gap-2 rounded-xl bg-zinc-800 border border-white/10 px-4 py-3 text-zinc-300 text-xs">📍 Тольятти • {profile.employment} • {profile.format}</div>
              </div>

              <div className="relative mt-5 flex gap-2 no-print">
                <button onClick={onContact} className="flex-1 text-center py-2.5 rounded-xl bg-gradient-to-r from-violet-600 to-fuchsia-600 text-white font-semibold text-sm">Написать</button>
                <a href={profile.github} target="_blank" className="flex-1 text-center py-2.5 rounded-xl bg-white/10 border border-white/15 text-white font-medium text-sm">GitHub</a>
              </div>
              <div className="relative mt-3 text-[11px] text-zinc-500 text-center">Резюме обновлено 31 августа 2026 • hh.ru</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function SectionTitle({ kicker, title, desc }: { kicker: string; title: string; desc?: string }) {
  return (
    <div className="mb-6">
      <div className="text-[11px] tracking-[0.18em] text-violet-400 font-semibold print:text-violet-700">{kicker}</div>
      <h2 className="text-[28px] sm:text-[32px] font-bold tracking-tight text-white mt-1">{title}</h2>
      {desc && <p className="text-sm text-zinc-400 mt-2 max-w-[70ch] print:text-zinc-600">{desc}</p>}
    </div>
  )
}

function Skills() {
  return (
    <section id="skills" className="max-w-[1120px] mx-auto px-4 sm:px-6 py-10">
      <SectionTitle kicker="STACK" title="Ключевые компетенции" desc="Flutter-архитектура, нативная интеграция, бекенд Go и полный цикл продукта — от идеи до публикации." />
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
        {skills.groups.map(g => (
          <div key={g.name} className="rounded-2xl bg-zinc-900/60 border border-white/10 p-4 backdrop-blur">
            <div className="text-sm font-semibold text-white">{g.name}</div>
            <div className="mt-3 flex flex-wrap gap-1.5">
              {g.items.map(i => (
                <span key={i} className="text-xs px-2.5 py-1 rounded-full bg-white/[0.06] border border-white/10 text-zinc-300">{i}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

function ExperienceSection() {
  return (
    <section id="experience" className="max-w-[1120px] mx-auto px-4 sm:px-6 py-10">
      <SectionTitle kicker="CAREER" title="Опыт работы — 9 лет 1 месяц" desc="От медицинского симулятора на Unity до высоконагруженных Flutter-приложений и Go-микросервисов." />
      <div className="relative">
        <div className="absolute left-4 top-0 bottom-0 w-px bg-gradient-to-b from-violet-500/50 via-white/10 to-transparent hidden sm:block print:hidden" />
        <div className="space-y-4">
          {experiences.map(e => (
            <div key={e.company + e.period} className="relative sm:pl-10">
              <div className="hidden sm:block absolute left-[11px] top-6 w-2.5 h-2.5 rounded-full bg-violet-500 shadow-[0_0_0_6px_rgba(139,92,246,0.15)] print:hidden" />
              <div className="rounded-2xl bg-zinc-900 border border-white/10 p-5 hover:border-white/15 transition">
                <div className="flex flex-wrap items-start justify-between gap-3">
                  <div>
                    <div className="flex items-center gap-2">
                      <h3 className="text-white font-semibold">{e.company}</h3>
                      {e.url && <a href={e.url} target="_blank" className="text-xs text-violet-400 hover:text-violet-300 underline print:text-violet-700">↗</a>}
                    </div>
                    {e.location && <div className="text-xs text-zinc-500">{e.location}</div>}
                    <div className="text-sm text-violet-300 font-medium mt-1">{e.role}</div>
                    <div className="text-xs text-zinc-500 mt-1">{e.description}</div>
                  </div>
                  <div className="text-right shrink-0">
                    <div className="text-xs px-2.5 py-1 rounded-full bg-white text-black font-medium inline-block border border-zinc-200">{e.period}</div>
                    <div className="text-[11px] text-zinc-500 mt-1 text-right">{e.duration}</div>
                  </div>
                </div>
                {e.bullets.length > 0 && (
                  <ul className="mt-3 grid sm:grid-cols-2 gap-1.5">
                    {e.bullets.map(b => (
                      <li key={b} className="text-xs text-zinc-400 flex gap-2 print:text-zinc-700"><span className="text-violet-400 mt-0.5 print:text-violet-700">•</span><span>{b}</span></li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function ProjectCard({ p }: { p: typeof projects[0] }) {
  return (
    <div className={`rounded-2xl border p-5 flex flex-col ${p.featured ? "bg-gradient-to-br from-violet-600/15 via-zinc-900 to-zinc-900 border-violet-500/20" : "bg-zinc-900 border-white/10"}`}>
      <div className="flex items-start justify-between gap-3">
        <div>
          <h3 className="text-white font-semibold leading-tight">{p.title}</h3>
          <div className="text-xs text-zinc-400 mt-1">{p.subtitle}</div>
          <div className="text-xs text-violet-300 mt-1">{p.role}</div>
          {p.period && <div className="text-[11px] text-zinc-500 mt-1">{p.period}</div>}
        </div>
        {p.featured && <span className="text-[10px] tracking-widest px-2 py-1 rounded-full bg-violet-600 text-white font-bold shrink-0 border border-violet-500">FEATURED</span>}
      </div>
      <ul className="mt-3 space-y-1.5">
        {p.highlights.map(h => (
          <li key={h} className="text-xs text-zinc-300 flex gap-2 print:text-zinc-700"><span className="text-violet-400 print:text-violet-700">—</span><span>{h}</span></li>
        ))}
      </ul>
      {p.result && <div className="mt-3 text-xs px-3 py-2 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-300 print:text-emerald-800 print:bg-emerald-50">✓ {p.result}</div>}
      <div className="mt-3 flex flex-wrap gap-1.5">
        {p.stack.map(s => <span key={s} className="text-[11px] px-2 py-1 rounded-full bg-white/5 border border-white/10 text-zinc-400 print:bg-zinc-50 print:text-zinc-700 print:border-zinc-300">{s}</span>)}
      </div>
      {p.links && (
        <div className="mt-3 flex flex-wrap gap-2">
          {p.links.map(l => (
            <a key={l} href={l} target="_blank" className="text-xs text-violet-400 hover:text-violet-300 underline break-all print:text-violet-700">{l.replace(/^https?:\/\//,"")}</a>
          ))}
        </div>
      )}
    </div>
  )
}

function ProjectsSection({ onPrint }: { onPrint: () => void }) {
  const [tab, setTab] = useState<"main" | "pet">("main")
  const allProjects = [...projects, ...petProjects]
  return (
    <section id="projects" className="max-w-[1120px] mx-auto px-4 sm:px-6 py-10">
      <SectionTitle kicker="PORTFOLIO" title="Проекты и кейсы" desc="8 коммерческих проектов + pet-исследования: офлайн AI, VPN, Jira-агрегатор, маркетплейсы." />
      <div className="flex gap-2 mb-6 no-print print:hidden">
        <button onClick={()=>setTab("main")} className={`px-4 py-2 rounded-full text-sm font-medium border transition ${tab==="main" ? "bg-white text-black border-white" : "bg-white/5 text-zinc-300 border-white/10 hover:bg-white/10"}`}>Коммерческие (8)</button>
        <button onClick={()=>setTab("pet")} className={`px-4 py-2 rounded-full text-sm font-medium border transition ${tab==="pet" ? "bg-white text-black border-white" : "bg-white/5 text-zinc-300 border-white/10 hover:bg-white/10"}`}>Pet-проекты (8)</button>
        <div className="ml-auto hidden sm:flex gap-2">
          <button onClick={onPrint} className="px-4 py-2 rounded-full bg-white/10 border border-white/10 text-zinc-300 text-sm">🖨️ Печать</button>
        </div>
      </div>
      <div className="grid md:grid-cols-2 gap-4 print:hidden">
        {(tab==="main" ? projects : petProjects).map(p => <ProjectCard key={p.title+"-"+tab} p={p as any} />)}
      </div>
      <div className="print-only">
        <div className="text-xs font-bold tracking-widest text-zinc-700 mb-2">ВСЕ ПРОЕКТЫ — ДЛЯ ПЕЧАТИ / PDF (16)</div>
        <div className="grid print-grid-2 gap-3">
          {allProjects.map(p => (
            <div key={"print-"+p.title} className="rounded-xl border border-zinc-300 p-3 print-card break-inside-avoid bg-white">
              <div className="font-semibold text-zinc-900 text-[11pt] leading-tight">{p.title} <span className="font-normal text-zinc-600">— {p.subtitle}</span></div>
              <div className="text-[8pt] text-zinc-600 mt-0.5">{p.role}{p.period ? ` • ${p.period}` : ""} • {p.stack.slice(0,5).join(" • ")}</div>
              <ul className="mt-1.5 space-y-0.5">{p.highlights.slice(0,3).map(h=> <li key={h} className="text-[8pt] text-zinc-700">— {h}</li>)}</ul>
              {p.result && <div className="text-[8pt] text-emerald-700 mt-1 font-medium">✓ {p.result}</div>}
              {p.links?.[0] && <div className="text-[7pt] text-zinc-500 mt-1 break-all">{p.links[0].replace(/^https?:\/\//,"")}</div>}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function EducationSection() {
  return (
    <section className="max-w-[1120px] mx-auto px-4 sm:px-6 py-10">
      <SectionTitle kicker="EDUCATION" title="Образование" />
      <div className="grid sm:grid-cols-2 gap-4">
        {education.map(e => (
          <div key={e.year+e.spec} className="rounded-2xl bg-zinc-900 border border-white/10 p-5">
            <div className="text-xs px-2 py-1 rounded-full bg-white text-black font-bold inline-block border border-zinc-200">{e.year}</div>
            <div className="text-white font-semibold mt-3">{e.place}</div>
            <div className="text-sm text-zinc-400 print:text-zinc-600">{e.spec}</div>
            <div className="text-xs text-zinc-500 mt-1">{e.type}</div>
          </div>
        ))}
        <div className="rounded-2xl bg-gradient-to-br from-violet-600 to-fuchsia-600 p-5 text-white print:bg-white print:border print:border-zinc-300 print:text-zinc-900">
          <div className="text-sm font-bold">Навыки • Языки • Вождение</div>
          <div className="mt-3 flex flex-wrap gap-1.5">
            {["Русский — родной","English B1","Git","CI/CD","Code review","Управление командой","Права B","Свой автомобиль"].map(s=>(
              <span key={s} className="text-xs px-2.5 py-1 rounded-full bg-white/20 border border-white/20 print:bg-zinc-50 print:border-zinc-300 print:text-zinc-700">{s}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

function Footer({ onContact }: { onContact: () => void }) {
  return (
    <footer id="contacts" className="border-t border-white/10 bg-[#0a0a0c]">
      <div className="max-w-[1120px] mx-auto px-4 sm:px-6 py-10">
        <div className="rounded-[24px] bg-gradient-to-br from-violet-600 via-fuchsia-600 to-indigo-600 p-[1px] print-card">
          <div className="rounded-[23px] bg-zinc-950 p-6 sm:p-8 flex flex-col lg:flex-row gap-6 justify-between print-bg-white">
            <div>
              <h3 className="text-2xl font-bold text-white print-text-white">Давайте делать продукт вместе</h3>
              <p className="text-sm text-zinc-400 mt-2 max-w-[60ch] print:text-zinc-600">Ищу команду, где важна архитектура, производительность и продуктовое мышление. Открыт к Fullstack/Mobile/Frontend ролям, удалённо и гибрид.</p>
              <div className="mt-4 flex flex-wrap gap-2 text-sm no-print">
                <button onClick={onContact} className="px-5 py-3 rounded-full bg-white text-black font-semibold hover:bg-zinc-100 transition">Написать</button>
                <a href={`tel:${profile.phone.replace(/[^+0-9]/g,"")}`} className="px-5 py-3 rounded-full bg-white/10 border border-white/15 text-white font-medium">{profile.phone}</a>
                <a href={profile.github} target="_blank" className="px-5 py-3 rounded-full bg-violet-600 text-white font-semibold">GitHub</a>
              </div>
              <div className="print-only text-xs text-zinc-700 mt-3 leading-relaxed">
                <div>✉️ {profile.email} ★ предпочитаемый • 📞 {profile.phone} • ✈️ t.me/serchy_k</div>
                <div>github.com/Serchyk • Тольятти • {profile.salary} на руки</div>
              </div>
            </div>
          </div>
        </div>
        <div className="text-center text-xs text-zinc-600 mt-6 print:text-zinc-500">© {new Date().getFullYear()} Сергей Андреев • React + TypeScript + Tailwind • github.com/Serchyk</div>
      </div>
    </footer>
  )
}

export default function App() {
  const [contactOpen, setContactOpen] = useState(false)

  const handlePrint = () => window.print()

  return (
    <DomainGuard>
      <div id="resume-root" className="min-h-screen bg-[#08080a] print-bg-white">
        <PrintHeader />
        <Header onContact={()=>setContactOpen(true)} onPrint={handlePrint} />
        <Hero onContact={()=>setContactOpen(true)} onPrint={handlePrint} />
        <ExperienceSection />
        <ProjectsSection onPrint={handlePrint} />
        <Skills />
        <EducationSection />
        <Footer onContact={()=>setContactOpen(true)} />
        <ContactModal open={contactOpen} onClose={()=>setContactOpen(false)} />
      </div>
    </DomainGuard>
  )
}
