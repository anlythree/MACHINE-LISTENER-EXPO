import {Appearance} from 'react-native';
import {ColorValue} from "react-native/Libraries/StyleSheet/StyleSheet";

/**
 * 颜色主题配置
 */
export type ColorTheme = {
  text: ColorValue,
  background: ColorValue,
  subBackGround: ColorValue,
  thirdBackGround: ColorValue,
  tint: ColorValue,
  tintDeep: ColorValue,
  subTint: ColorValue,
  simpleTint: ColorValue,
  textDefault: ColorValue,
  tabIconDefault: ColorValue,
  tabIconSelected: ColorValue,
}

const light: ColorTheme = {
  text: '#000',
  background: '#FFFFFF',
  subBackGround: '#E7E7E7',
  thirdBackGround: 'rgba(231,231,231,0.4)',
  tint: '#F1CA4D',
  tintDeep: '#ccaa38',
  subTint: '#7f6cd2',
  simpleTint: '#ffdc86',
  textDefault: '#ccc',
  tabIconDefault: '#ccc',
  tabIconSelected: '#FE5F03',
}

// const light: ColorTheme = {
//     text: '#000',
//     background: '#FFFFFF',
//     subBackGround: '#E7E7E7',
//     thirdBackGround: 'rgba(231,231,231,0.4)',
//     tint: '#E16478',
//     tintDeep: '#b95564',
//     subTint: '#174E7C',
//     simpleTint: '#FFB4BD',
//     textDefault: '#ccc',
//     tabIconDefault: '#ccc',
//     tabIconSelected: '#E16478',
// }

const dark:ColorTheme = {
  text: '#fff',
  background: '#000',
  subBackGround: '#E7E7E7',
  thirdBackGround: 'rgba(231,231,231,0.4)',
  tint: '#0b2538',
  tintDeep: '#0B2538FF',
  subTint: '#5d779a',
  simpleTint: '#5D779AFF',
  textDefault: '#ccc',
  tabIconDefault: '#ccc',
  tabIconSelected: '#174E7C',
}

/**
 * 获取颜色主题
 * 目前simulator中只能用开发者模式，而开发者模式只会返回light，所以这里只能手动切换主题了
 *
 * @param colorType 0:白昼 1:黑夜
 */
export const colorTheme = (colorType?:number): ColorTheme => {
  if(colorType){
    // colorType有值按照colorType来获取颜色主题
    return colorType == 0 ? light : dark
  }
  // colorType没有值，根据当前系统主题取值
  // todo-anlythree 网上说是因为开发者模式，所以总是获取到light模式，要调试黑夜模式要手动设置
  // console.log("颜色主题："+Appearance.getColorScheme())
  return  Appearance.getColorScheme() === 'light' ? light:dark
}
