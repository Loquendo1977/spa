export function Loader() {
    const $loader = document.createElement("img");

    $loader.src = "/loading.gif";
    $loader.alt = "cargando...";
    $loader.classList.add("loader");

    return $loader;
}