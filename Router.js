import { ajax } from "./ajax.js";
import api from "./wp_api.js";
import { Post } from "./Post.js";
import { PostCard } from "./PostCard.js";
import { SearchCard } from "./SearchCard.js";

export async function Router() {
    let {hash} = location;

    if(!hash || hash === "#/"){
        document.getElementById("main").innerHTML = `<h2>Seccion del menu</h2>`;
        await ajax({
            url: api.POSTS,
            cbSuccess: (posts) =>{
                console.log(posts);
                let html = "";
                posts.forEach(el => {
                    html += PostCard(el);
                });
                document.getElementById("main").innerHTML = html;
            }
          });
    }else if(hash.includes("#/search")){
        let query = localStorage.getItem("wpSearch");

        if(!query) {
            document.querySelector(".loader").style.display = "none";
            return false
        }
        
        await ajax({
            url: `${api.SEARCH}${query}`,
            cbSuccess: (search) => {
                let html = ``;
                
                if(search.length === 0){
                    html = `
                    <p>Error no existen resultados de busqueda para el termino <mark>${query}</mark></p>
                    `;
                }else{
                    search.forEach((post) => (html += SearchCard(post)));
                }
                document.getElementById("main").innerHTML = html;
            }
        });
    }else if(hash === "#/contacto"){
        document.getElementById("main").innerHTML = `<h2>Seccion de contacto</h2>`;
    }else{
        await ajax({
            url: `${api.POST}/${localStorage.getItem("wpPostId")}`,
            cbSuccess: (post) =>{
                document.getElementById("main").innerHTML = Post(post);
            }
          });

    }
    document.querySelector(".loader").style.display = "none";
}