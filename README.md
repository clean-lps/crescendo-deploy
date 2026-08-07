# crescendo-deploy

Repositorio central de despliegues estáticos para Crescendo Web.

La publicación se sirve desde la rama `main` mediante GitHub Pages.

Cada sitio vive en su propia carpeta y se publica en:

`https://clean-lps.github.io/crescendo-deploy/<sitio>/`

## Publicar otro sitio

1. Copia el build estático dentro de una carpeta nueva en la raíz.
2. Asegúrate de que sus assets usen rutas relativas o el prefijo `/crescendo-deploy/<sitio>/`.
3. Haz push a `main`; GitHub Pages publicará el repositorio desde la raíz de `main`.

Sitios incluidos:

- `miami-joyerias/`
- `luisbseafood/`
