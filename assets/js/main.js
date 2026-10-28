/* ===== SITE_CONFIG — substitua os campos marcados antes de publicar para um cliente real ===== */
const SITE_CONFIG = {
  name: "Site modelo",                                  // SUBSTITUIR
  tagline: "Apresentação demonstrativa para personalizar com o seu estúdio.", // SUBSTITUIR
  city: "Sua cidade, Brasil",                           // SUBSTITUIR
  address: "Seu endereço aqui — sua cidade, UF",       // SUBSTITUIR
  whatsapp: "5581900000000",                            // SUBSTITUIR (DDI+DDD+número)
  whatsappLabel: "+55 81 90000-0000",                   // SUBSTITUIR
  email: "seuemail@exemplo.com",                        // SUBSTITUIR
  instagram: "https://instagram.com/",                  // SUBSTITUIR
  tiktok: "https://tiktok.com/",                        // SUBSTITUIR
  pinterest: "https://pinterest.com/",                  // SUBSTITUIR
  credit: { label: "TIentrega", url: "https://example.com" }, // SUBSTITUIR
  defaultMessage: "Olá! Conheci o trabalho do estúdio pelo site e gostaria de conversar sobre uma tatuagem personalizada."
};
/* Imagens locais em assets/img — troque os arquivos mantendo os nomes, ou edite os caminhos. */
const WORKS = [
  { cat: "ORNAMENTAL", title: "Anúbis e ankh", src: "./assets/img/portfolio/portfolio-ornamental-anubis.webp", pos: "50% 45%", alt: "Tatuagem ornamental de Anúbis com ankh e luas sendo finalizada no antebraço", cls: "col-span-2 md:col-span-2 md:row-span-4" },
  { cat: "LETTERING", title: "Lettering em curvas", src: "./assets/img/portfolio/portfolio-lettering-forearm.webp", pos: "45% 55%", alt: "Lettering em traço preto sendo tatuado sobre o desenho a caneta no antebraço", cls: "col-span-2 md:col-span-4 md:row-span-2" },
  { cat: "ORNAMENTAL", title: "Estêncil em traço fino", src: "./assets/img/portfolio/portfolio-ornamental-stencil.webp", pos: "70% 40%", alt: "Estêncil de máscara ornamental com caveiras e chamas aplicado sobre a pele", cls: "md:col-span-2 md:row-span-2" },
  { cat: "BLACKWORK", title: "Blackwork em detalhe", src: "./assets/img/portfolio/portfolio-blackwork-closeup.webp", pos: "35% 60%", alt: "Máquina e agulha finalizando uma pequena tatuagem blackwork no braço", cls: "md:col-span-2 md:row-span-2" }
];
const SERVICES = [
  { n: "01", t: "Tatuagem autoral", d: "Desenhos exclusivos a partir de referências, ideias e características individuais. Fine line, blackwork, composição ornamental e realismo.", i: '<path d="M4 20l4-1 11-11-3-3L5 16l-1 4z"/><path d="M14 6l3 3"/>' },
  { n: "02", t: "Cover-up / Recobertura", d: "Estudo de possibilidades para transformar tatuagens antigas em novas composições, respeitando as limitações de cada caso.", i: '<rect x="4" y="4" width="16" height="16"/><path d="M4 12h16M12 4v16"/>' },
  { n: "03", t: "Piercing & Body Art", d: "Perfurações corporais com foco em procedimentos responsáveis, materiais apropriados e cuidados de higiene.", i: '<circle cx="12" cy="12" r="7"/><circle cx="12" cy="12" r="2"/>' }
];
const ARTISTS = [
  { n: "Dante Ruiz", s: "Blackwork & ornamental", d: "Massas sólidas e composição pensadas para cobrir grandes áreas.", src: "./assets/img/artists/artist-01.webp", pos: "40% 30%", alt: "Retrato demonstrativo de Dante Ruiz desenhando à mesa" },
  { n: "Aya Costa", s: "Lettering & detalhes", d: "Traço preciso e leitura cuidadosa de cada referência.", src: "./assets/img/artists/artist-02.webp", pos: "45% 50%", alt: "Retrato demonstrativo de Aya Costa tatuando um ombro" }
];
const FAQ = [
  ["Como solicitar um orçamento?", "Chame o estúdio pelo WhatsApp com sua ideia, o local do corpo e o tamanho aproximado. O orçamento é feito após a avaliação do projeto."],
  ["Posso enviar referências?", "Sim. Referências ajudam o artista a entender seu gosto. O desenho final será autoral, e não uma cópia."],
  ["Como funciona o agendamento?", "Depois de alinhar projeto e condições, a data é combinada diretamente com o estúdio. Confirme prazos e regras no contato."],
  ["Como devo me preparar para a sessão?", "As orientações variam conforme o caso. Pergunte ao estúdio no agendamento o que levar e como se preparar."],
  ["O estúdio faz cobertura de tatuagens antigas?", "Esse é um dos serviços demonstrados. A viabilidade depende de cada tatuagem e é avaliada individualmente."]
];
const C = SITE_CONFIG, $ = (s, r = document) => r.querySelector(s), $$ = (s, r = document) => [...r.querySelectorAll(s)];
const wa = m => `https://wa.me/${C.whatsapp}?text=${encodeURIComponent(m || C.defaultMessage)}`;
const fb = '<span class="absolute inset-0"></span>';

/* Dados de configuração na página */
$$("[data-wa]").forEach(a => a.href = wa(a.dataset.wa));
$$("[data-ig]").forEach(a => a.href = C.instagram);
$$("[data-tt]").forEach(a => a.href = C.tiktok);
$$("[data-pin]").forEach(a => a.href = C.pinterest);
$$("[data-addr]").forEach(e => e.textContent = C.address);
$$("[data-city]").forEach(e => e.textContent = C.city);
$$("[data-name]").forEach(e => e.textContent = C.name);
$$("[data-tag]").forEach(e => e.textContent = C.tagline);
$$("[data-mail]").forEach(a => { a.textContent = C.email; a.href = "mailto:" + C.email; });
$$("[data-phone]").forEach(a => { a.textContent = C.whatsappLabel; a.href = wa(); });
$$("[data-credit]").forEach(a => { a.textContent = C.credit.label; a.href = C.credit.url; });
$("#yr").textContent = new Date().getFullYear();

/* Header: fundo ao rolar + link ativo + menu mobile */
const hdr = $("#hdr"), mnav = $("#mnav"), burger = $("#burger");
const onScroll = () => hdr.classList.toggle("solid", scrollY > 30 || !mnav.classList.contains("hidden"));
addEventListener("scroll", onScroll, { passive: true }); onScroll();
const setMenu = o => { mnav.classList.toggle("hidden", !o); burger.setAttribute("aria-expanded", o); burger.setAttribute("aria-label", o ? "Fechar menu" : "Abrir menu"); onScroll(); };
burger.onclick = () => setMenu(mnav.classList.contains("hidden"));
$$("a", mnav).forEach(a => a.addEventListener("click", () => setMenu(false)));
addEventListener("keydown", e => { if (e.key === "Escape" && !mnav.classList.contains("hidden")) { setMenu(false); burger.focus(); } });
const links = $$(".nav a");
const spy = new IntersectionObserver(es => es.forEach(e => { if (e.isIntersecting) links.forEach(l => l.classList.toggle("on", l.hash === "#" + e.target.id)); }), { rootMargin: "-45% 0px -50% 0px" });
["estudio", "servicos", "trabalhos", "artistas", "contato"].forEach(id => spy.observe($("#" + id)));

/* Serviços */
$("#svc").innerHTML = SERVICES.map(s => `
  <article class="svc p-6 md:p-8 flex flex-col min-h-[320px] rv ${s.n !== "01" ? "md:border-l md:border-white/[.13]" : ""}">
    <div class="flex justify-between items-start"><span class="font-syne text-4xl text-dim">${s.n}</span>
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.2" aria-hidden="true">${s.i}</svg></div>
    <h3 class="font-syne font-bold uppercase text-xl mt-10 mb-4">${s.t}</h3>
    <p class="text-mid text-sm font-light leading-relaxed flex-1">${s.d}</p>
    <a href="${wa(`Olá! Gostaria de saber mais sobre o serviço de ${s.t} e solicitar um orçamento.`)}" target="_blank" rel="noopener noreferrer" class="mt-8 text-xs tracking-[.16em] uppercase min-h-[44px] inline-flex items-center">Conhecer o serviço <span class="arr ml-2" aria-hidden="true">→</span></a>
  </article>`).join("");

/* Galeria + filtros + lightbox */
const cats = ["TODOS", ...new Set(WORKS.map(w => w.cat))];
let cur = "TODOS", shown = [], idx = 0;
const grid = $("#grid");
function renderGrid() {
  shown = WORKS.filter(w => cur === "TODOS" || w.cat === cur);
  const multi = cur === "TODOS";
  grid.innerHTML = shown.map((w, i) => `
    <figure class="${multi ? w.cls : "md:col-span-3 md:row-span-2"} ph ${multi ? "min-h-[200px]" : "min-h-[220px]"}">
      <button class="absolute inset-0 w-full h-full text-left" data-i="${i}" aria-label="Ampliar: ${w.title}">
        <img src="${w.src}" alt="${w.alt}" style="object-position:${w.pos}" loading="lazy" class="absolute inset-0" onerror="this.style.opacity=0">
        <figcaption class="absolute left-3 bottom-3 meta text-bone/80 [text-shadow:0_1px_8px_#000]">${w.cat} — ${w.title}</figcaption>
      </button></figure>`).join("");
}
$("#filters").innerHTML = cats.map(c => `<button class="chip" aria-pressed="${c === cur}" data-c="${c}">${c}</button>`).join("");
$("#filters").onclick = e => { const b = e.target.closest("[data-c]"); if (!b) return; cur = b.dataset.c; $$(".chip").forEach(x => x.setAttribute("aria-pressed", x === b)); renderGrid(); };
renderGrid();
const lb = $("#lb"); let opener;
function showLb(i) { idx = (i + shown.length) % shown.length; const w = shown[idx]; $("#lbi").src = w.src; $("#lbi").alt = w.alt; $("#lbc").textContent = `${w.cat} — ${w.title}  (${idx + 1}/${shown.length})`; }
grid.onclick = e => { const b = e.target.closest("[data-i]"); if (!b) return; opener = b; showLb(+b.dataset.i); lb.classList.add("on"); document.body.style.overflow = "hidden"; $("#lbx").focus(); };
const closeLb = () => { lb.classList.remove("on"); document.body.style.overflow = ""; opener && opener.focus(); };
$("#lbx").onclick = closeLb; $("#lbp").onclick = () => showLb(idx - 1); $("#lbn").onclick = () => showLb(idx + 1);
lb.onclick = e => { if (e.target === lb || e.target.tagName === "FIGURE") closeLb(); };
addEventListener("keydown", e => { if (!lb.classList.contains("on")) return; if (e.key === "Escape") closeLb(); if (e.key === "ArrowLeft") showLb(idx - 1); if (e.key === "ArrowRight") showLb(idx + 1); });

/* Artistas */
$("#artists").innerHTML = ARTISTS.map((a, i) => `
  <article class="rv ${i === 1 ? "md:mt-16" : i === 2 ? "md:mt-8" : ""}">
    <div class="ph aspect-[3/4]"><img src="${a.src}" style="object-position:${a.pos}" alt="${a.alt}" loading="lazy" width="600" height="800" onerror="this.style.opacity=0"></div>
    <h3 class="font-syne font-bold uppercase text-xl mt-6">${a.n}</h3>
    <p class="meta mt-1">${a.s}</p>
    <p class="text-mid text-sm font-light mt-4 leading-relaxed">${a.d}</p>
    <a href="${wa(`Olá! Gostaria de conversar com ${a.n} sobre um projeto de ${a.s}.`)}" target="_blank" rel="noopener noreferrer" class="inline-flex items-center min-h-[44px] mt-3 text-xs tracking-[.16em] uppercase border-b border-white/30 hover:border-bone transition">Iniciar contato</a>
  </article>`).join("");

/* FAQ acessível */
$("#faqlist").innerHTML = FAQ.map((f, i) => `
  <div class="border-b line">
    <h3><button class="faq-toggle w-full flex justify-between items-start gap-4 py-6 text-left font-medium" aria-expanded="false" aria-controls="fp${i}" id="fb${i}"><span class="faq-question flex-1">${f[0]}</span><span class="plus text-xl text-mid" aria-hidden="true">+</span></button></h3>
    <div class="faq-p" id="fp${i}" role="region" aria-labelledby="fb${i}"><div><p class="pb-6 text-mid text-sm font-light leading-relaxed max-w-xl">${f[1]}</p></div></div>
  </div>`).join("");
$("#faqlist").onclick = e => { const b = e.target.closest("button"); if (!b) return; const item = b.closest(".border-b"), o = !item.classList.contains("open"); item.classList.toggle("open", o); b.setAttribute("aria-expanded", o); };

/* Reveal leve: conteúdo visível por padrão se JS/IO indisponível */
if ("IntersectionObserver" in window) {
  const io = new IntersectionObserver(es => es.forEach(e => { if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); } }), { threshold: .12 });
  $$(".rv").forEach(el => io.observe(el));
} else $$(".rv").forEach(el => el.classList.add("in"));
