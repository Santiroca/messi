# 🐐 Messi Collection

🌐 **[Ver app / View app](https://santiroca.github.io/messi/)**

---

## 🇦🇷 Español

Aplicación web personal para trackear mi colección de camisetas de Lionel Messi.

### ¿Qué tiene?

- **89 camisetas** en el catálogo — Barcelona (43), PSG (8), Inter Miami (10) y Argentina (28)
- **Mi Colección** — registrá cuáles tenés con categoría y condición
- **Las que faltan** — mirá cuáles te quedan por conseguir
- **Catálogo completo** — organizado por temporada, filtrable por club y equipación
- **Stats por temporada** — goles, asistencias y títulos con cada camiseta
- **Favoritos** ⭐ — marcá tus preferidas
- **Buscador** 🔍 — encontrá cualquier camiseta al instante
- **Progreso** 📊 — barras por club y dona con el % total de tu colección
- **Partidos en vivo** 🏟️ — los partidos que vi en cancha con resumen en video
- Funciona como **app nativa** en iPhone (agregar a pantalla de inicio)
- Datos guardados localmente en el dispositivo

### Estructura

```
messi/
├── index.html        # App completa
├── images/           # Imágenes de las camisetas
│   ├── 0.png - 88.png
│   ├── logo.png
│   └── icon-*.png
└── manifest.json     # Config para instalar como app
```

### Uso local

```bash
git clone https://github.com/santiroca/messi.git
cd messi
python3 -m http.server 8000
# Abrí http://localhost:8000
```

---

## 🇬🇧 English

Personal web app to track my Lionel Messi jersey collection.

### Features

- **89 jerseys** in the catalog — Barcelona (43), PSG (8), Inter Miami (10) and Argentina (28)
- **My Collection** — log which ones you own with category and condition
- **Missing** — see which ones you still need to get
- **Full Catalog** — organized by season, filterable by club and kit type
- **Season stats** — goals, assists and titles with each jersey
- **Favorites** ⭐ — mark your top picks
- **Search** 🔍 — find any jersey instantly
- **Progress** 📊 — club bars and donut chart with your total collection %
- **Live Matches** 🏟️ — matches attended with video highlights
- Works as a **native app** on iPhone (add to home screen)
- Data saved locally on device

### Structure

```
messi/
├── index.html        # Full app
├── images/           # Jersey images
│   ├── 0.png - 88.png
│   ├── logo.png
│   └── icon-*.png
└── manifest.json     # PWA config
```

### Local setup

```bash
git clone https://github.com/santiroca/messi.git
cd messi
python3 -m http.server 8000
# Open http://localhost:8000
```

