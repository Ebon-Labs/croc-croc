# Pendências

## 10 de novembro de 2026 — domínio próprio e Search Console

O site está em **https://croc-croc.pages.dev**. Título, descrição, cardápio para o Google, `robots.txt` e `sitemap.xml` já apontam para esse endereço. A entrada no Search Console fica para depois da compra do domínio, para não cadastrar o endereço provisório e ter de refazer.

1. Comprar o domínio personalizado.
2. Apontar o domínio para o projeto **croc-croc** no Cloudflare Pages.
3. Trocar `https://croc-croc.pages.dev` pelo domínio novo no `index.html` (canonical, Open Graph e dados do cardápio), no `robots.txt` e no `sitemap.xml`.
4. Publicar o site.
5. Em [search.google.com/search-console](https://search.google.com/search-console), adicionar a propriedade pelo prefixo do URL novo.
6. Verificar com a tag HTML que o Google fornecer e colocar essa tag no `index.html`.
7. Enviar `sitemap.xml` e pedir a indexação da página inicial.

A listagem no Google costuma levar alguns dias depois do envio.
