import { createVsCodeTheme } from "vscode-typed-theme-generator";

createVsCodeTheme({
  rootPath: __dirname,
  outputFolder: "./themes",
  themes: [
    {
      id: "rainbow-black",
      uiTheme: "vs-dark",
      label: "Rainbow Black",
      filename: "rainbow-black-color-theme.json",
      theme: {
        name: "Rainbow Black",
        semanticHighlighting: true,
      },
    },
  ],
});
