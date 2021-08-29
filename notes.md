#Learing from basics react 


### A js file can have multiple state, and we have three ways to handle those state.
- First is by creating sepeate useState as I did in expenseForm.js 
- Second is by creating one state handler for all three , but we need to add all the other values in handler function and then give event.target.value to the one for which that handler is cretaed
- third is by using prevSate
const selectItems = (event) => {
  setUserInput(prevState => ({
      yourWishList: [...prevState, event.target.value] // update this 
  })
}


### how to clear inputs?
by adding two way binding!!!
what is two binding
Answer- two way binding means to give a value attribute to your form giving it the value of that particular state variable. as done in expenseform.js and then after declaration of the method which takes the value of diffrent input tags u call the setUserInput with blank values. 
if you are using 1 way of declaring then use setEnteredTitle(''),setEnteredAmount(''),setEnteredDate('')


### Child to parent component communcation 
* step 1 will be to declare  a function in parent component 
* step 2 will be to create a custom prop that expalins what it does and will just point to that function eg. - onSaveExpenseData={savedExpenseDataHandler}
* step 3 will be to call the function you made in parent in child component through props and passing the data in that function call from child to parent. check NewExpense.js (parent) and ExpenseForm.js (child)


## Lifting State up is similar to child to parent communcation

### controlled and uncontrolled components & statefull and stateless components
- stateless components are also called dumb components
- controlled components are those in which form data is handled by react Component.
  - is one that takes its current value through props and notifies changes through callbacks like onChange. A parent component "controls" it by handling the callback and managing its own state and passing the new values as props to the controlled component. You could also call this a "dumb component".
 >  // Controlled:
  > `<input type="text" value={value} onChange={handleChange} />`


- UNCONTROLLED COMPONENTS is when form data is handled by DOM itself.
 - is one that stores its own state internally, and you query the DOM using a ref to find its current value when you need it. This is a bit more like traditional HTML.
> // Uncontrolled:
`<input type="text" defaultValue="foo" ref={inputRef} />`
> // Use `inputRef.current.value` to read the current value of `<input>`

*In JavaScript, functions are just objects (i.e. regular values) and hence you can pass them as values via props to a component. If that component then calls that function, it executes - and that's how you can trigger a function defined in a parent component from inside a child component.*

