<!-- ruta de navegacion: identifica una pagina denro de la aplicacion -->
<!-- Cuando el usuario toca el enlace:
1. El navegador navega a /configuracion.
2. SvelteKit busca la página correspondiente.
3. La muestra en pantalla.
En SvelteKit, la relación sería:
URL:     /configuracion
Archivo: src/routes/configuracion/+page.svelte-->


<aside class = "sidebar">

    <nav aria-label="Navegacion principal">
      <a href = "/">Gestion de prospectos</a>
      <a href = "/configuracion">Configuracion</a>  
    </nav>
</aside>