import { TemplateList } from '../TemplateList/index.js'

export const Search = {
    inputTextSearch: null,

    startSearch: function (inputTextSearch, data) {
        if (inputTextSearch) {
            this.inputTextSearch = inputTextSearch
        }

        this.inputTextSearch.addEventListener('keyup', function (e) {
            const value = e.target.value?.trim()
            const resultSearch = this.filterItemByName(value, data)
            TemplateList.listDataHtmlTemplateOn(resultSearch)

        }.bind(this))
    },

    filterItemByName(item, data) {
        return data?.filter((result) => result?.name?.toLowerCase().includes(item.toLowerCase()) ? result : null)
    }
}