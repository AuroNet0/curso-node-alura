import js from "@eslint/js";
import globals from "globals";

export default [
  // Aplica a configuração recomendada do ESLint
  js.configs.recommended, 
  {
    files: ["**/*.{js,mjs,cjs}"],
    languageOptions: {
      globals: {
        ...globals.node, // Mescla os globais do Node.js
      },
    },
    rules: {
      // Suas regras personalizadas entram aqui
    },
  },
];