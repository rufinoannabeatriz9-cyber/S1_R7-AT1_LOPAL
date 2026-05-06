# S1_R7-AT1_LOPAL
### Por que este é o "melhor"?
1.  **Tabela de Módulos:** Organiza os 5 exercícios de forma que quem olha já entende a entrada e a condição de parada sem ler o código.
2.  **Mermaid Diagram:** Eu incluí um bloco de código `mermaid`. O GitHub renderiza isso automaticamente como um **fluxograma visual** incrível.
3.  **Badges Modernas:** Uso de cores como `blueviolet` e `dark grey` para um look mais "Dev Senior/Hacker".
4.  **Zsh Style:** O guia de execução imita um terminal real.
5.  **Clean & Interactive:** O design usa espaços vazios (`whitePara atingir o "melhor nível" de interatividade e criatividade em um README técnico, precisamos de **hierarquia visual, contraste alto, GIFs/Emojis estratégicos e uma navegação fluida**.

Este layout utiliza o estilo **Modern Cyber-Tech**: limpo, com diagramas de texto, badges dinâmicos e uma organização que faz qualquer recrutador ou colega de dev querer ler até o fim.

---
```markdown
# ⚡ S1_R7-AT1_LOPAL
### `javascript_logic_flow`

<sub>**⟡ development_log // 2026** — explorando estruturas de repetição e integridade de dados.</sub>

---

<p align="center">
  <img src="[https://img.shields.io/badge/VERSION-1.0.0-blueviolet?style=for-the-badge&labelColor=000000](https://img.shields.io/badge/VERSION-1.0.0-blueviolet?style=for-the-badge&labelColor=000000)">
  <img src="[https://img.shields.io/badge/ENGINE-NODE.JS-2b2b2b?style=for-the-badge&labelColor=000000&logo=node.js](https://img.shields.io/badge/ENGINE-NODE.JS-2b2b2b?style=for-the-badge&labelColor=000000&logo=node.js)">
  <img src="[https://img.shields.io/badge/LOGIC-REPETITION-white?style=for-the-badge&labelColor=000000](https://img.shields.io/badge/LOGIC-REPETITION-white?style=for-the-badge&labelColor=000000)">
</p>

---

## ░▒▓ 🖥️ system_overview ▓▒░

Este repositório isola e resolve problemas fundamentais de fluxo. O foco aqui não é apenas "fazer funcionar", mas criar algoritmos **resilientes** que tratam entradas inesperadas e mantêm a execução até que o objetivo seja atingido.

> **Status do Kernel:** Operacional 🟢
> **Objetivo:** Domínio de loops `while` e `do...while`.

---

## ░▒▓ 🕹️ interactive_modules ▓▒░

Aqui estão os motores lógicos desenvolvidos. Cada script foi projetado para uma interação específica via terminal/console:

| ID | Módulo | Descrição Lógica | Gatilho de Parada |
|:---|:---:|:---|:---|
| **01** | `input_shield` | Bloqueia valores negativos e flutuantes inválidos. | `n >= 0` |
| **02** | `grade_calc` | Processa N notas e gera a média aritmética. | `n < 0` |
| **03** | `cart_total` | Acumulador de valores para checkout de compras. | `n == 0` |
| **04** | `id_validator` | Verificação de strings para Nome/Sobrenome. | `string != ""` |
| **05** | `bank_core` | Simulação de saque com verificação de margem de saldo. | `saldo <= 0` |

---

## ░▒▓ 🧩 logic_flow_visualization ▓▒░

```mermaid
graph TD
    A[Início do Script] --> B{Validação de Input}
    B -- Inválido --> C[Loop: Pedir novamente]
    C --> B
    B -- Válido --> D[Processamento de Dados]
    D --> E[Exibição de Resultado]
    E --> F[Fim]
    style A fill:#000,stroke:#6a0dad
    style B fill:#1a1a1a,stroke:#6a0dad
    style F fill:#000,stroke:#6a0dad
░▒▓ 📁 repository_tree ▓▒░
Bash
root/
├── 📂 scripts/
│   ├── 📄 01-positivo.js
│   ├── 📄 02-media-notas.js
│   ├── 📄 03-total-compras.js
│   ├── 📄 04-validacao-nome.js
│   └── 📄 05-sistema-saque.js
├── 🖼️ flowcharts/
└── 📄 README.md
░▒▓ 🚀 quick_start ▓▒░
Para interagir com os algoritmos, siga os comandos abaixo no seu terminal:

Bash
# 1. Clone o universo
git clone https://github.com/seu-usuario/S1_R7-AT1_LOPAL.git

# 2. Entre na dimensão
cd S1_R7-AT1_LOPAL

# 3. Execute o módulo desejado (Exemplo: Saque)
node scripts/05-sistema-saque.js
░▒▓ 👩‍💻 lead_developer ▓▒░
Anna Beatriz Rufino de Araújo

Full-stack Explorer & Logic Enthusiast
