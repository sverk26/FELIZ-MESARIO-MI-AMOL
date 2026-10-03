# Feliz aniversario, Dulce María ❤️

Página web con dedicatoria para **Dulce María**, hecha con HTML, CSS y JavaScript nativo. Es un sitio estático listo para publicarse gratis con **GitHub Pages**: no usa backend, base de datos ni librerías externas.

## Estructura

```text
aniversario-dulce-maria/
│
├── index.html        ← estructura de la página
├── style.css         ← diseño, colores y animaciones
├── script.js         ← textos, música, globos, confeti y escena interactiva
│
├── audio/
│   ├── cuando-tu-me-besas.mp3   ← música de inicio
│   └── cumbia-del-amor.mp3      ← suena al responder Sí
├── video/
│   ├── nuestros-recuerdos.mp4
│   └── portada.jpg
│
└── README.md
```

## 1. Descargar o clonar

- **ZIP:** descomprime `el ZIP del proyecto`.
- **Git:** `git clone https://github.com/sverk26/FELIZ-MESARIO-MI-AMOL.git`

Para probarla, abre `index.html` con doble clic. Funciona sin servidor.

## 2. La música

- **Inicio:** `audio/cuando-tu-me-besas.mp3` (*Cuando tú me besas*, cover de LUCAH).
- **Al responder Sí:** `audio/cumbia-del-amor.mp3` (*La cumbia del amor*, Mauricio Mesones).

Ambos archivos los aportó Sverker para uso personal. Son canciones con derechos de autor: si publicas la página en un repositorio público, tenlo en cuenta.

**Si el MP3 de inicio falta o falla**, la página toca una melodía de cajita musical (*Para Elisa*) generada por el navegador (Web Audio API). La música empieza al pulsar el botón inicial, porque los navegadores bloquean el sonido automático. En iPhone, el volumen se controla con los botones físicos.

## 3. Subirlo a GitHub

1. En [github.com](https://github.com) pulsa **New repository**, ponle el nombre `aniversario-dulce-maria`, déjalo **Public** y pulsa **Create repository**.
2. Pulsa **uploading an existing file** y arrastra **el contenido** de la carpeta (no la carpeta). `index.html` debe quedar en la raíz.
3. Pulsa **Commit changes**.

Con Git:

```bash
git init && git add . && git commit -m "Página con dedicatoria para Dulce María"
git branch -M main
git remote add origin https://github.com/sverk26/FELIZ-MESARIO-MI-AMOL.git
git push -u origin main
```

## 4. Activar GitHub Pages

**Settings → Pages → Build and deployment → Source: Deploy from a branch → Branch: `main` / `(root)` → Save.** La página estará lista en 1 a 3 minutos.

## 5. Dirección publicada

```text
https://TU-USUARIO.github.io/aniversario-dulce-maria/
```

## 6. Personalización

Todo lo editable está al inicio de **`script.js`**, en `CONFIG`. En los textos, `{name}` se reemplaza por el nombre.

| Qué cambiar | Dónde |
|---|---|
| Nombre | `CONFIG.name` |
| Dedicatoria | `CONFIG.message` (un párrafo por línea) |
| Textos de bienvenida, escena interactiva y cierre | `CONFIG.welcome…`, `CONFIG.centerpiece`, `CONFIG.closing…` |
| Botones | `CONFIG.buttons` |
| Música | `CONFIG.music.src`, `CONFIG.music.volume` |
| Globos, confeti y símbolos flotantes | `CONFIG.balloonColors`, `CONFIG.confettiColors`, `CONFIG.decor` |
| Paleta general | Variables `:root` al inicio de **`style.css`** |

> Si cambias el nombre, actualiza también `<title>` y las etiquetas `og:` de `index.html`: son las que se ven al compartir el enlace.

## Solución de problemas

- **El MP3 suena en local pero no en GitHub Pages:** GitHub distingue mayúsculas y minúsculas en los nombres de archivo.
- **Error 404:** `index.html` debe estar en la raíz del repositorio.
- **No veo los cambios:** espera unos minutos y recarga con `Ctrl + F5`.
- **Tipografías distintas:** se cargan desde Google Fonts. Sin conexión, se usan fuentes del sistema.


## Video y canción del final

- `video/nuestros-recuerdos.mp4`: video de 79 s con 22 fotos y 2 clips (sin audio propio).
- Al presionar **Sí**, la música cambia a `audio/cumbia-del-amor.mp3` (*La cumbia del amor*, Mauricio Mesones; archivo aportado por Sverker para uso personal). Si faltara, sigue sonando la canción de inicio.
- Si publicas en GitHub Pages con repositorio público, cualquiera con el enlace puede ver las fotos y el video.
