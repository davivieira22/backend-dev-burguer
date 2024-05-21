import globals from "globals";
import pluginJs from "@eslint/js";
import js from "@eslint/js";



export default [
  js.configs.recommended,
  {
      rules: {
          "no-unused-vars": "warn",
      "local var":"off"
      }
  },

{languageOptions: 
  { globals: globals.node }},
pluginJs.configs.recommended,

];