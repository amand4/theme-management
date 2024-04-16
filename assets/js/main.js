import { TemplateList } from './TemplateList/index.js'
import { LocalStorageBD, mock } from './bd/index.js'
import { Search } from './Search/index.js'
import { Theme } from './Theme/index.js'

if (!LocalStorageBD.getLocalStorage('themes')?.length > 0) {
  LocalStorageBD.setLocalStorage('themes', mock)
}

//Set up the initial theme
const themes = LocalStorageBD.getLocalStorage('themes')
const templateList = document.getElementById('templateListHome')
TemplateList.setElement(templateList)
TemplateList.setDataList(themes)
TemplateList.listDataHtmlTemplate()
localStorage.removeItem('editThemeId')


const inputSearch = document.querySelector('.section-search .form-control')
Search.startSearch(inputSearch, themes)

Theme.setDataList(themes)

//Apply theme
const root = document.documentElement
Theme.setElementRoot(root)
Theme.applyTheme()

templateList.addEventListener('click', (event) => {
  const button = event.target

  const action = button.getAttribute('data-actions')
  if (button.tagName === 'BUTTON' || button.tagName === 'A') {
    if (action === 'apply') {
      Theme.setSelectedTheme(button)
      Theme.applyTheme()
    } else {
      const editThemeId = Number(button.getAttribute('data-id'))
      LocalStorageBD.setLocalStorage('editThemeId', editThemeId)
    }
  }
})

