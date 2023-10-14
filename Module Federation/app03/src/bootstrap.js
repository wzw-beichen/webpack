import { render as FooterRender } from "./footer";
import { render as ContentRender } from "./content";
import { render as HederRender } from "app01/Header";
import { render as ButtonRender } from "app02/Button";

const el = document.querySelector("#app");

ContentRender(el);
FooterRender(el);
HederRender(el);
ButtonRender(el);
