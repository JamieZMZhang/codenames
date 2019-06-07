import Game from "@/views/Game";
import Generator from "@/views/Generator";
import Menu from "@/views/Menu";

export default [
  {
    path: "/",
    component: Menu
  },
  {
    path: "/generator/:type/:size/:file",
    component: Generator
  },
  {
    path: "/game/:room",
    component: Game
  },
  {
    path: "*",
    redirect: "/"
  }
];
