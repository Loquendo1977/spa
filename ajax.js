

// este helper nos ayuda a hacer mas rapidas las peticiones asincronas
export async function ajax(props) {
    let {url, cbSuccess} = props;

    await fetch(url)
    .then(res => res.ok ? res.json() : Promise.reject(res))
    .then(json => cbSuccess(json))
    .catch(err => {
        let message = err.statusText || "Ocurrio un error al acceder a la API";
        document.getElementById("main").innerHTML = `<div class="error">Error ${err.status}: ${message}</div>`;
        document.querySelector(".loader").style.display = "none";
    })
}