import pluginJs from "@eslint/js";


export default [
  pluginJs.configs.recommended,
  {
    rules: {
      "no-console": "off",
      "no-undef": "off"
    }
  }
];