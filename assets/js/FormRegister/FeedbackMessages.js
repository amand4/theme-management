export const FeedbackMessages = {
  element: null,
  message: {
    type: '',
    text: ''
  },

  displayMessage() {
    this.element.classList.add(this.message.type)
    document.querySelector('.notification div p').innerHTML = (this.message.text)
    setTimeout(() => {
      this.element.classList.remove(this.message.type)
    }, 2000)
  },

  setMessage(type, action) {
    const textOptions = {
      success: `Success: The theme was ${action} successfully`,
      error: `Error: All fields are required`
    }
    this.message.type = type
    this.message.text = textOptions[type] || ''
    return this.message
  },

  setElement(element) {
    if (element) {
      this.element = element
    }
    return this.element
  }

}