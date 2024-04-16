import { Theme } from '../Theme/index.js'
import { LocalStorageBD } from '../bd/LocalStorageBD.js'
import { FeedbackMessages } from './FeedbackMessages.js'

const DEFAULT_VALUES_FORMS = {
  name: '',
  colors: {
    primary: '#000000',
    secondary: '#000000',
    success: '#000000',
    danger: '#000000',
    warning: '#000000'
  }
}

const FormRegister = {
  element: null,
  data: DEFAULT_VALUES_FORMS,

  edit(data, id) {
    const selectedThemeEdit = data.find(theme => theme.id === id)
    this.data = selectedThemeEdit
    this.setInitialValue(selectedThemeEdit)
    this.updateThumbnail()
  },

  delete(id) {
    const editThemeId = LocalStorageBD.getLocalStorage('editThemeId')
    const item = themes.find(theme => theme.id === id)
    LocalStorageBD.removeItemLocalStorage('themes', item)
    this.setInitialValue()
  },

  startForm(element) {
    if (element) {
      this.element = element

      this.element.addEventListener('submit', function (e) {
        e.preventDefault()
        const actionsButtons = e.submitter
        const isDeletion = actionsButtons.classList.contains('btn-delete')
        if (isDeletion) {
          this.delete(editThemeId)
          FeedbackMessages.setMessage('success',
            'deleted'
          )
        } else {
          const inputs = e.target.querySelectorAll('input')

          inputs.forEach(input => {
            this.setValue(input.name, input.value)
          })

          if (this.validateForm()) {
            this.submit(this.data)
            FeedbackMessages.setMessage('success',
              'created'
            )
          } else {
            FeedbackMessages.setMessage('error')
          }
        }
        FeedbackMessages.displayMessage()
        setTimeout(() => {
          window.location.reload()
        }, 2500)

      }.bind(this))
    }
  },

  setInitialValue(dataEdit = this.data) {
    const inputs = document.querySelectorAll('input')
    inputs.forEach(input => {
      if (input.name === 'name') {
        input.value = dataEdit[input.name]
      } else {
        input.value = dataEdit.colors[input.name]
      }
    })
  },

  setValue(inputName, inputValue) {
    if (inputName === 'name' && inputValue) {
      this.data = { ...this.data, name: inputValue }

    } else if (inputName !== 'name' && inputValue) {
      this.data.colors[inputName] = inputValue
    }
  },

  validateForm() {
    if (this.data.name.trim() === '') {
      return false
    }
    return true
  },

  updateThumbnail() {
    const inputs = this.element.querySelectorAll('input')
    inputs.forEach(input => {
      this.setValue(input.name, input.value)
    })
    const templateList = document.getElementById('templateListRegister')
    templateList.innerHTML = ''
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
        <p class="description"> Where creativity meets efficiency. Our platform offers a seamless experience
          for managing all your themes effortlessly. With its sleek design and intuitive interface, TM
          empowers you to unleash your creativity and bring your projects to life.
        </p>
        <div class="button">
          <span>Learn More</span>
        </div>
      </div>
    </div>
    <div class="card-description">
      <p><strong>Theme:</strong> ${this.data.name}</p>
    </div>
    `

    const themeCard = templateCard.querySelector('.theme-card')
    const span = templateCard.querySelector('span')
    const linkActive = templateCard.querySelector('p.link-active')
    themeCard.style.backgroundColor = this.data.colors.secondary
    span.style.backgroundColor = this.data.colors.primary
    linkActive.style.borderColor = this.data.colors.primary

    templateList.append(templateCard)
  },

  submit(data) {
    LocalStorageBD.saveLocalStorage(data, 'themes')
  }
}

//Initialize form
const form = document.querySelector("form")
FormRegister.startForm(form)
FormRegister.updateThumbnail()

const inputs = document.querySelectorAll('input')
inputs.forEach(input => {
  input.addEventListener('input', function (e) {
    FormRegister.updateThumbnail(inputs)
  })
})

const elementNotification = document.querySelector('.notification')
FeedbackMessages.setElement(elementNotification)

//Select active theme and hide remove button if it is a new theme
const editThemeId = LocalStorageBD.getLocalStorage('editThemeId')
const buttonDelete = document.querySelector('.btn-delete')

const themes = LocalStorageBD.getLocalStorage('themes')
if (editThemeId) {
  FormRegister.edit(themes, editThemeId)
} else {
  buttonDelete.remove()
}

//Apply theme
const root = document.documentElement
Theme.setElementRoot(root)
Theme.applyTheme()
