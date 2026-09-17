# 📚 Akshat EBooks — Interactive Course Notes

Notes you can **see**. Each lesson from a course transcript becomes a modern, animated page that explains the topic step by step — with program run visualizations, memory state, and live-looking terminal output.

## ✨ Features

- **Modern React pages** with smooth animations (Vite + React + Framer Motion)
- Every lesson includes:
  - 🎯 **What we want from this lesson** (objectives)
  - 🧩 **Program blueprint** — purpose, input, processing, output, external files
  - 🔄 **Input → Process → Output** flow diagrams
  - 🎬 **Run visualizer** — watch the program execute line by line, with memory and console updating in real time
  - ✅ **Result** shown in a realistic terminal
- 🌗 **Dark / light mode** with one click
- 🖨 **Print = light mode, content only** (press `Ctrl+P` at any time)
- 📕 **Save all pages as PDF** — the whole book, one lesson per page, in order
- 📄 **Download as Word (.docx)** — full formatting, diagrams converted to images

## 🚀 Run locally

```bash
npm install
npm run dev
```

## 🗂 Adding lessons

Each lesson lives in `src/lessons/` and is registered in `src/lessons/index.js`. A lesson provides its objectives, explanations, blueprint, code, run steps and quiz — the components handle the visualization.
