# Plano de Implementação: AndaSP MVP

Este documento define o escopo e as etapas para a criação do aplicativo web "AndaSP" em sua primeira versão (MVP), focada nas funcionalidades principais escolhidas.

## 1. Arquitetura (SPA com Injeção Dinâmica)
A aplicação será uma Single Page Application construída com HTML, CSS e JavaScript puros. Todo o conteúdo será carregado e trocado no DOM dinamicamente pelo JavaScript para garantir uma navegação fluida, parecendo um aplicativo nativo.

## 2. Tecnologias
- **HTML5:** Estrutura semântica.
- **CSS3:** Design System próprio (variáveis CSS para cores, tipografia, espaçamento) usando flexbox/grid.
- **JavaScript (ES6+):** Roteamento, manipulação do DOM e lógica da aplicação.
- **Leaflet.js:** Biblioteca leve de mapas via CDN.

## 3. Estrutura de Arquivos

```text
/
├── index.html          # Shell da aplicação (navbar e container principal)
├── css/
│   ├── design-system.css # Variáveis, tipografia, espaçamento, cores
│   └── styles.css      # Estilos dos componentes, layout e utilitários
├── js/
│   ├── app.js          # Roteador (Router) e inicialização (State)
│   ├── data.js         # Dados mockados (MASP, Ibirapuera, etc.)
│   ├── ui.js           # Funções de renderização de telas (Explorar, Local)
│   └── map.js          # Lógica de integração e renderização do Leaflet
```

## 4. Escopo do MVP (Telas Prioritárias)

### 4.1. Tela Explorar (Home)
- Barra de busca superior (mockada).
- Categorias horizontais roláveis (chips).
- Seção "Descubra São Paulo" (Destaques).
- Seção "Explore por região" (Bairros).
- Cards horizontais responsivos para os locais.

### 4.2. Página do Local (Detalhes)
- Imagem de capa ocupando o topo.
- Informações do local (Nome, Categoria, Avaliação).
- Botões de ação rápida: "Salvar", "Como chegar", "Roteiro".
- Descrição e informações adicionais (Horários, Endereço).

### 4.3. Tela de Mapa
- Mapa interativo (via Leaflet).
- Marcadores dos locais cadastrados.
- Bottom sheet simplificado ao clicar em um pino.

## 5. Etapas de Execução

- [ ] **Fase 1: Fundação**
  - Criar `index.html` básico.
  - Configurar `design-system.css` com as cores, fontes modernas (Inter ou similar) e espaçamentos.
- [ ] **Fase 2: Estrutura de Dados**
  - Criar `data.js` com a lista inicial de lugares turísticos de SP e suas coordenadas.
- [ ] **Fase 3: Lógica Base (SPA)**
  - Implementar o roteador em `app.js` e as funções de injeção no DOM.
- [ ] **Fase 4: Desenvolvimento das Telas**
  - Criar os templates da tela Explorar.
  - Criar os templates da Página do Local.
- [ ] **Fase 5: Integração do Mapa**
  - Adicionar Leaflet e criar a lógica em `map.js` para renderizar marcadores baseados no `data.js`.
- [ ] **Fase 6: Polimento UI/UX**
  - Ajustar responsividade, sombras, bordas arredondadas e interações (hover, active).

## Próximos Passos
Após a aprovação deste plano, iniciaremos imediatamente a **Fase 1 e Fase 2**.
