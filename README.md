# SocialWork — Mockup LinkedIn (Expo)

Projeto de mockup visual do LinkedIn feito com Expo (React Native híbrido).
Sem banco de dados — apenas interface.

## Passos iniciais (setup)

1. Instalar Node.js (LTS) e npm
2. Instalar Expo CLI via `npx`
3. Criar o projeto: `npx create-expo-app@latest .`
4. Limpar o boilerplate padrão do Expo
5. Instalar navegação (Expo Router: `expo-router` e dependências)
6. Criar as telas do mockup (mínimo 6)
7. Rodar com `npx expo start`

## Como rodar

```bash
npm install
npx expo start
```

## Telas (baseadas nos prints)

1. Welcome
2. Login
3. Início (Feed) — post de certificações cloud
4. Minha rede — convites, Patches, Premium
5. Publicação — composer
6. Notificações — filtros e lista
7. Vagas — preferências e lista
8. Mensagens
9. Perfil
10. Pessoas (lista da API)
11. Detalhe da pessoa (`user/[id]`)
12. Detalhe da vaga (`job/[id]`)
13. Conversa (`chat/[id]`)

## API (Aula 9)

A tela **Minha rede → Gerenciar minha rede** busca pessoas em
`https://jsonplaceholder.typicode.com/users`. Para trocar a API, crie um `.env`
com `EXPO_PUBLIC_API_URL=...`.

## Armazenamento local (Aula 10)

- `services/storage.ts` guarda dados no aparelho (AsyncStorage).
- A sessão do login é salva: fechou e abriu o app, continua logado.
- A última lista de pessoas fica em cache e aparece mesmo sem internet.
