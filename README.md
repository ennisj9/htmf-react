# htmf-react
An [HTMF](https://www.npmjs.com/package/htmf) implementation for use with react. Using HTMF allows for quick DOM expression without JSX.

## Usage

```
$ npm i htmf-react
```
An example of creating a react component with HTMF:
```javascript
import Mf from 'htmf-react';

function LoginBlock(){

  const handleSubmit = e => {
    //
  }

  return Mf($ => { $ 
    .a('div #login')
      .b('h3 .headerclass')
        .text('Please login')
      .b('form').submit(handleSubmit)
        .c('label' {for: 'username'})
          .text('Username')
        .c('input .inputBox', {type: 'text', name: 'username'})
        .c('label' {for: 'password'})
          .text('Password')
        .c('input .inputBox', {type: 'password', name: 'password'})
      .b('input', {type: 'submit', value: 'Sign in'}) 
      .b('a', {href: '/resetPassword'})
        .text('Forgot password')
  })

}
export default LoginBlock;
```
In addition to HTMF core features, htmf-react adds the following helper event functions:

```
keyDown, keyPress, keyUp,
blur, focus,
change, input, submit,
click, contextMenu, doubleClick, mouseDown, mouseUp,
mouseEnter, mouseLeave, mouseMove, mouseOut, mouseOver
```
So that you can add event listeners easily.

## Quick examples

Easier events:

```javascript
$
.a('div')
  .b('div .button').click(e => alert('button clicked!'))
```

Single element by passing in an array instead of a function:

```javascript
let divWithText = Mf(['div .class', {attrkey: 'value'}], 'some text inside');
```

And finally, a shorthand for creating text nodes:

```javascript
$
.a('div')
  .b(String, 'an inline ')
  .b('span').text('span with')
  .b(String, ' text around it')

//<div>an inline <span>span with</span> text around it</div>
```