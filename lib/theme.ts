export type Theme = "dark" | "light";
export const THEME_KEY = "sr-theme";

/** Inline script (runs before paint) so the saved theme applies without a flash. */
export const themeInitScript = `try{var t=localStorage.getItem("${THEME_KEY}");if(t==="light"||t==="dark"){document.documentElement.dataset.theme=t;var m=document.querySelector('meta[name="theme-color"]');if(m)m.setAttribute("content",t==="light"?"#f5f3ee":"#0e0f11")}}catch(e){}`;
