const { override, fixBabelImports, addLessLoader } = require("customize-cra");

module.exports = override(
  fixBabelImports("import", {
    libraryName: "antd",
    libraryDirectory: "es",
    style: true // change importing css to less
  }),
  addLessLoader({
    javascriptEnabled: true,
    modifyVars: {
      "@primary-color": "#4b403d", // primary color for all components
      "@link-color": "#4b403d", // link color
      "@success-color": "#9ccc65", // success state color
      "@warning-color": "#fbc02d", // warning state color
      "@error-color": "#e57373", // error state color
      "@font-size-base": "14px", // major text font size
      "@heading-color": "#4b403d", // heading text color
      "@text-color": "##4b403d",
      "@text-color-secondary": "#8d8c8c", // secondary text color
      "@disabled-color": "#d9d6d4", // disable state color
      "@border-radius-base": "4px", // major border radius
      "@border-color-base": "#4b403d", // major border color
      "@box-shadow-base": "0 2px 8px rgba(0, 0, 0, .15);"
    }
  })
);
