export const LocalStorageBD = {
    setLocalStorage(key, data) {
        try {
            if (data) {
                const string = JSON.stringify(data)
                localStorage.setItem(key, string)
                return true
            } else {
                throw new Error('Unable to save data')
            }
        } catch (error) {
            throw new Error('Unable to save data')
        }
    },
    getLocalStorage(key) {
        try {
            if (key?.length) {
                const data = localStorage.getItem(key)
                return JSON.parse(data)
            } else {
                throw new Error('Unable to save data')
            }
        } catch (error) {
            throw new Error('Unable to get data')
        }
    },
    saveLocalStorage(item, key) {
        try {
            const data = JSON.parse(localStorage.getItem(key))

            let newData = []


            if (key.length > 0) {

                if (item.id) {
                    const currentItem = data.find((currentItem) => item.id === currentItem.id)
                    currentItem.name = item.name
                    currentItem.colors = item.colors
                } else {
                    const newId = this.gerarId(data)
                    const newItem = {
                        ...item,
                        id: newId
                    }

                    if (data?.length > 0) {
                        newData = [
                            ...data,
                            newItem
                        ]
                    } else {
                        newData.push(newItem)

                    }

                }

                const string = JSON.stringify(newData?.length > 0 ? newData : data)

                localStorage.setItem(key, string)
                localStorage.removeItem('editThemeId')
                return newData
            } else {
                throw new Error('Unable to save data')
            }
        } catch (error) {
            throw new Error('Unable to get data')
        }
    },
    removeItemLocalStorage(key, item) {

        try {
            const data = JSON.parse(localStorage.getItem(key))

            if (key.length > 0 && item.id) {

                const currentItem = data.filter((currentItem) => item.id !== currentItem.id)
                const string = JSON.stringify(currentItem)
                localStorage.setItem(key, string)
                localStorage.removeItem('editThemeId')
                localStorage.removeItem('activeTheme')

                return currentItem
            } else {
                throw new Error('Unable to save data')
            }
        } catch (error) {
            throw new Error('Unable to get data')
        }
    },
    deleteLocalStorage(key) {
        try {
            if (key?.length) {
                localStorage.removeItem(key)
                return true
            } else {
                throw new Error('Unable to delete storage')
            }
        } catch (error) {
            throw new Error('Unable to delete storage')
        }
    },
    gerarId(data) {
        return data?.length + 1
    }
}