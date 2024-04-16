export const TemplateList = {
    element: null,
    dataList: [],

    setElement(element) {
        if (element) {
            element.innerHTML = ''
            this.element = element
        }
    },

    setDataList(data) {
        if (data?.length > 0) {
            this.dataList = data
        }
    },

    listDataHtmlTemplate() {

        this.dataList.length > 0 ? this.dataList?.forEach((item) => {

            const template = this.getTemplateItem(item)
            this.element?.appendChild(template)
        }) : this.element.innerHTML = 'Nenhum tema encontrado.'
    },

    listDataHtmlTemplateOn(data) {

        this.element.innerHTML = ''

        data.length > 0 ? data?.forEach((item) => {

            const template = this.getTemplateItem(item)
            this.element?.appendChild(template)
        }) : this.element.innerHTML = 'Nenhum tema encontrado.'

    },

    getTemplateItem(item) {

        const { id, name, colors } = item
        const templateCard = document.createElement('div')

        templateCard.classList.add('template-card')

        templateCard.innerHTML = `
        <div class="card theme-card">
            <div class="card-body">
                <div class="menu">
                    <p class="">MT</p>
                    <ul>
                        <li class="me-3">
                        <p class="">Themes</p>
                        </li>
                        <li>
                        <p class="link-active">Register</p>
                        </li>
                    </ul>
        
                </div>
                <h5> Welcome to TM - Theme Manager </h5>
                <p class="description"> Where creativity meets efficiency. Our platform offers a seamless experience for managing all your themes effortlessly. With its sleek design and intuitive interface, TM empowers you to unleash your creativity and bring your projects to life.
                </p>
                <div class="button">
                <span>Learn More</span>
                </div>
                <div class="buttons-options">
                <a class="btn theme-bg"data-id="${id}" data-actions="edit" href="./src/pages/register.html">View</a>
                <button type="button" class="btn" data-id="${id}" data-actions="apply">Apply</button>
                </div>
            </div>
            </div>
            <div class="card-description">
            <p><strong>Theme:</strong> ${name}</p>
        </div>
        `

        const themeCard = templateCard.querySelector('.theme-card')
        const span = templateCard.querySelector('span')
        const linkActive = templateCard.querySelector('p.link-active')
        themeCard.style.backgroundColor = colors.secondary
        span.style.backgroundColor = colors.primary
        linkActive.style.borderColor = colors.primary
        return templateCard
    }

}
