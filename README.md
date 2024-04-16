## Theme Management


## About Project:


The objective of this project is to showcase my skills and experience in frontend development by creating a web application for selecting and managing color themes, using a mock JSON to simulate API functionality, with an emphasis on the use of **Vanilla JavaScript**, **HTML**, and **CSS**.

### Technologies

- [CSS](https://developer.mozilla.org/pt-BR/docs/Web/CSS)
- [HTML](https://developer.mozilla.org/pt-BR/docs/Web/HTML)
- [Vanilla JavaScript](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript)
- [BootStrap](https://getbootstrap.com/)

## 🚀 Getting Started

### Prerequisites
- Git 2

### Install project

```bash
git clone git@github.com:amand4/theme-management.git
cd theme-management
```

### Start project
To start the project, command:

```bash
open index.html in your browser 
```

Or

```bash
run index.html with live server
```
- [Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer)

obs: If you have a problem with cors, I recommend running it with the live server

### Feature: Theme management:

1. **List themes:**

   - On the home screen, you can view registered themes.

   <img width="400" alt="list themes" src="./screens/image.png">

---

2. **Search temas:**

   - Search field allows you to search for themes by name.

   <img width="400" alt="Search temas" src="./screens/image-1.png">
---

3. **Create themes:**

   - To create a theme, access the registration screen through the menu.

   <img width="400" alt="Create themes" src="./screens/image-5.png">

   - Case success
   
   <img width="400" alt="message success created themes" src="./screens/image-8.png">

   - Or error: Do not fill in the name field
     
   <img width="400" alt="mensage error created themes" src="./screens/image-7.png">
     
---

4. **Edit themes:**

   - To access the editing screen:
   - click on the desired theme.
   - Click the "view" button.
   - You will be redirected to the editing screen.

   <img width="400" alt="Edit themes" src="./screens/image-4.png">
     
---

5. **Apply themes:**

   - Access the home screen:
   - click on the desired theme.
   - Click the "apply" button.

   <img width="400" alt="Apply themes" src="./screens/image-3.png">

   
---


6. **Delete themes:**

   - To access the editing screen:
   - click on the desired theme.
   - Click the "view" button.
   - If ok, go to the next stepYou will be redirected to the editing screen.
   - Click the "delete" button.

---

## Future Improvements
All mandatory test requirements have been developed. However, there are some points that I couldn't implement due to time constraints.

- User feedback: personalize messages for each action
- Add loading effect: when switching screens and actions
- Refactoring: divide more object responsibilities
- Add unit tests
