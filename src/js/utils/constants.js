const Constants = (() => {
  const Get = {};
  function initConstants() {
    Get.fgPickerHEX = document.querySelector('hex-alpha-color-picker');
    Get.bgPickerHEX = document.querySelector('hex-color-picker');
    Get.fgPickerRGB = document.querySelector('rgba-string-color-picker');
    Get.bgPickerRGB = document.querySelector('rgb-string-color-picker');
    Get.fgPickerHSL = document.querySelector('hsla-string-color-picker');
    Get.bgPickerHSL = document.querySelector('hsl-string-color-picker');
  }
  return {
    initConstants,
    Get,
  };
})();

export default Constants;
