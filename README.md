# Site modelo — estúdio de tatuagem

Landing page demonstrativa para um estúdio de tatuagem (HTML + Tailwind via CDN + JavaScript puro). Sem build e sem Node.js.

## Como abrir
Extraia o ZIP e abra `index.html` no navegador. É necessária internet para o Tailwind (CDN) e as fontes Google (Barlow Condensed e DM Sans); as imagens e demais arquivos são locais.

## O que editar
- `assets/js/main.js` — objeto `SITE_CONFIG` (nome, endereço, WhatsApp, e-mail, redes, crédito), além de `WORKS`, `SERVICES`, `ARTISTS` e `FAQ`. Os dados atuais são exemplos para substituir junto com o cliente.
- `index.html` — textos das seções.
- `assets/css/styles.css` — identidade visual e detalhes de composição.
- `assets/img/` — imagens (hero, studio, portfolio, artists, interface). Substitua mantendo o nome ou ajuste o caminho; `object-position` controla o recorte.

## Antes de publicar para um cliente
Troque todos os campos marcados com `SUBSTITUIR` no `SITE_CONFIG`. Nomes de artistas, endereço, e-mail e WhatsApp são demonstrativos. Confira os direitos de uso das fotos (os arquivos fornecidos aparentam vir de bancos de imagem como Pixabay/StockSnap).
