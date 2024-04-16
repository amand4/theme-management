import { LocalStorageBD } from '../bd/index.js'

export const Theme = {
  elementRoot: null,
  defaultThemeColors: {
    primary: '#8b0f00',
    secondary: '#0e0e0e',
    success: '#26a65b',
    danger: '#ff0000',
    warning: '#fffFFF'

  },
  dataList: [],

  setElementRoot(element) {
    if (element) {
      this.elementRoot = element
    }
  },

  setDataList(data) {
    if (data?.length > 0) {
      this.dataList = data
    }
  },

  findThemeById(id) {
    return this.dataList.find(theme => theme.id === id)
  },

  applyDefaultTheme() {
    this.setElementStyleProperty(this.defaultThemeColors)
  },

  setSelectedTheme(element) {
    const selectedThemeId = Number(element.getAttribute('data-id'))
    const selectedTheme = this.findThemeById(selectedThemeId)
    LocalStorageBD.setLocalStorage('activeTheme', selectedTheme)
  },

  getSelectedTheme() {
    return LocalStorageBD.getLocalStorage('activeTheme')
  },

  setElementStyleProperty(colors) {
    for (const key in colors) {
      if (colors.hasOwnProperty(key)) {
        this.elementRoot.style.setProperty(`--bs-${key}`, colors[key])
      }
    }
  },

  applyTheme() {
    const activeTheme = this.getSelectedTheme()
    if (activeTheme) {
      const { colors } = activeTheme
      this.setElementStyleProperty(colors)
    } else {
      this.applyDefaultTheme()
    }
  }
}