import { render as FooterRender } from "./footer";
import { render as ContentRender } from "./content";
import { render as HederRender } from "app01/Header";
// import * as utils from "utils/utils";

const el = document.querySelector("#app");

ContentRender(el);
FooterRender(el);
HederRender(el);
