export function Loader() {
    const $loader = document.createElement("img");

    $loader.src = "app/assets/loading.gif";
    $loader.alt = "cargando...";
    $loader.classList.add("loader");

    return $loader;
}