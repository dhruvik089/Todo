# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh
#todo

Use a Bootstrap v5.3 and vite-React

#### About useState
There are two different use state used .
1.input and
2.inputValue

Input state is a array and store a value of Input box
inputValue state is a store a value of input box.  

#### About handleSubmit function
when clicked on submit then called handleSubmit function. 
This function is append a inputValue state on input state array and then after inputValue set a null value

#### About handleDelete function
when clicked on Delete button then called handleDelete function
This function is a take index as a perameter and then after delete.
newTodos store a input array and return a splice array 1 element from index then after set array in input array.

