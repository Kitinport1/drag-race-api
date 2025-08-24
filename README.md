```markdown
# 🎭 Drag Race API

Uma API temática do mundo do **Drag Race** desenvolvida com Fastify e TypeScript. Perfect para apps que precisam de um toque de glamour e diversão! 💅👑
## ✨ Características

- 🏠 **Houses Famosas** - Dados das principais drag houses do mundo
- 👑 **Drag Queens** - Informações sobre queens icônicas
- 🏆 **Vencedoras** - Contagem de queens coroadas
- 🔍 **Busca Inteligente** - Sistema de pesquisa por query
- 🔒 **Dados Protegidos** - API segura sem exposição de dados sensíveis
- 🌐 **CORS Habilitado** - Pronto para integração frontend

## 🚀 Começando

### 📋 Pré-requisitos

- Node.js 20+
- npm ou yarn
- Git

### 🔧 Instalação

```bash
# Clone o repositório
git clone https://github.com/seu-usuario/drag-race-api.git

# Entre no diretório
cd drag-race-api

# Instale as dependências
npm install
```

### ⚡ Executando

```bash
# Modo desenvolvimento (com hot reload)
npm run dev

# Build para produção
npm run build

# Executar versão compilada
npm start
```

## 📡 Endpoints da API

### 🏠 Houses
```http
GET /houses
```
Retorna contagem e lista de houses disponíveis.

### 👑 Queens
```http
GET /queens
```
Retorna número total de queens no sistema.

### 🔍 Buscar Queen por ID
```http
GET /queens/:id
```
Verifica se uma queen específica existe no sistema.

### 🏆 Vencedoras
```http
GET /queens/winners
```
Retorna contagem de queens vencedoras.

### 🔎 Pesquisa
```http
POST /search
Content-Type: application/json

{
  "query": "termo de busca"
}
```
Realiza busca por houses e queens.

### 🩺 Health Check
```http
GET /
```
Verifica se a API está funcionando.

## 🛠️ Tecnologias Utilizadas

- **Fastify** - Framework web rápido e low-overhead
- **TypeScript** - Superset JavaScript com tipagem estática
- **@fastify/cors** - Middleware CORS para Fastify
- **tsx** - Executor TypeScript para desenvolvimento

## 📦 Estrutura do Projeto

```
drag-race-api/
├── src/
│   └── index.ts          # Arquivo principal da API
├── package.json          # Dependências e scripts
├── tsconfig.json         # Configuração TypeScript
├── .gitignore           # Arquivos ignorados pelo Git
└── README.md            # Este arquivo
```

## 🧪 Testando a API

### Com Thunder Client (VS Code)
1. Instale a extensão Thunder Client
2. Importe as rotas de exemplo
3. Teste cada endpoint

### Com curl
```bash
# Health Check
curl http://localhost:3333/

# Listar houses
curl http://localhost:3333/houses

# Buscar queen
curl http://localhost:3333/queens/1
```

### Com Navegador
```bash
# Apenas abra:
http://localhost:3333/
http://localhost:3333/houses
```

## 🔧 Configuração

### Variáveis de Ambiente
Crie um arquivo `.env` (opcional):

```env
PORT=3333
NODE_ENV=development
```

### Porta
A API roda na porta **3333** por padrão. Para alterar:

```typescript
server.listen({ port: process.env.PORT || 3333 }, () => {
  console.log(`Server running on port ${process.env.PORT || 3333}`);
});
```

## 🤝 Contribuindo

1. Fork o projeto
2. Crie uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request

## 📝 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para detalhes.

## 👨‍💻 Autor

**LUA** - [GitHub](https://github.com/kitinport1) - [Email](limalauane@outlook.com)

## 🙌 Agradecimentos

- **RuPaul** - Pela inspiração e pelo mundo do Drag Race
- **Comunidade Drag** - Pela cultura e diversidade
- **Fastify Team** - Pelo excelente framework
- **TypeScript** - Pela tipagem que salva vidas

---

<p align="center">
💅 <strong>Now sashay away to code!</strong> 👑
</p>

<div align="center">

![API Status](https://img.shields.io/badge/Status-Serving%20Looks!-ff69b4.svg)
![Last Commit](https://img.shields.io/badge/Last%20Commit-Today-green.svg)
![Version](https://img.shields.io/badge/Version-1.0.0-blue.svg)

</div>
```
