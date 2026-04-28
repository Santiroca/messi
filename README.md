# 🐐 Messi Collection

Aplicación web personal para trackear mi colección de camisetas de Lionel Messi.

## Features

- 85 camisetas en el catálogo (Barcelona, PSG, Inter Miami, Argentina)
- Registrar cuáles tenés y cuáles te faltan
- Categorías: Original s/núm, Original c/núm, China AAA, Trucha
- Filtrar por club y equipación (titular/suplente/tercera)
- Ordenar por temporada (más nueva / más vieja)
- Favoritos ⭐
- Buscador 🔍
- Progreso 📊 con barras por club y dona total
- Stats por temporada: goles, asistencias y títulos
- Datos guardados en el dispositivo (localStorage)

## Estructura

```
messi-collection/
├── index.html       # App completa
├── images/          # Imágenes de las camisetas (0.png - 88.png)
│   └── logo.png     # Logo silueta Messi
└── README.md
```

## Uso local

Abrí `index.html` en cualquier navegador. Para que las imágenes carguen correctamente desde local necesitás un servidor HTTP simple:

```bash
# Con Python
python3 -m http.server 8000
# Luego abrí http://localhost:8000
```

## GitHub Pages

La app está disponible en:
`https://[tuusuario].github.io/messi-collection`
