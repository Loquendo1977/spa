import { Header } from "./Header.js";
import { Main } from "./Main.js";
import {Loader} from "./Loader.js"
import { Router } from "./Router.js";
import { InfiniteScroll } from "./infinite_scroll.js";

export default function App (){
  const $root = document.getElementById("root");
  
  $root.innerHTML = null;
  $root.appendChild(Header());
  $root.appendChild(Main());
  $root.appendChild(Loader());

  Router();
  InfiniteScroll();
}