import { Component,OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit {

constructor(){}
ngOnInit(): void {
this.formValdation()
this.login()
}
formValdation(){
  let name:any = document.getElementById('name')
  let form:any = document.getElementById('sign')
  let email:any = document.getElementById('email');
  let password:any = document.getElementById('pass');
  let error:any = document.getElementById('error')
  form?.addEventListener('submit',(event:any)=>{
    if(email.value === '' || password.value === ''){
      error.innerHTML =  'Please enter  your email and password '
      event.preventDefault()
    }
    else if(name.value === ''){

      error.innerHTML = 'Please enter a valid name '
      event.preventDefault()
    }
    else if(email.value.indexOf('@') === -1){
      error.innerHTML = 'Please enter a valid email @'
      event.preventDefault()
    }
    else if(  password.value.length < 6 ){
      error.innerHTML = 'Password must be at least 6 characters '
      event.preventDefault()
    }
  })
}
login(){
  let form:any = document.getElementById('login')
  let email:any = document.getElementById('email1');
  let password:any = document.getElementById('pasw');
  let error:any = document.getElementById('error2')
  form?.addEventListener('submit',(event:any)=>{
    if(email.value  === '' || password.value === ''){
      error.innerHTML = 'Please enter your email and password '
      event.preventDefault()
    }
    else if(email.value.indexOf('@') === -1){
      error.innerHTML = 'Please enter a valid email @'
      event.preventDefault()
    }

  })
  
}


















































































// toggle(){
//   let container:any = document.getElementById('container')
//   container.classList.toggle('sign-in')
// 	container.classList.toggle('sign-up')
// }
// start(){
//   setTimeout(() => {
//     let container:any = document.getElementById('container')
//     container.classList.add('sign-in')
//   }, 200)
// }

// chack(){
//   let form = document.getElementById('form');
//   let email:any =  document.getElementById('email');
//   let password:any = document.getElementById('pass');
//   let errors:any = document.getElementById("error")
  
//   form?.addEventListener('submit',(event)=>{
  
//      if(email.value.indexOf(  '@' ) === -1){
//       errors.innerHTML = 'Invalid email'
//     errors.innerHTML = 'Please enter a valid Email @'
//     event.preventDefault()
//     }
//     if(password.value === '' || password.value ===  null || password.value === undefined){
//       errors.innerHTML = 'Please enter your password'
//       event.preventDefault()
//     }else if(  password.value.length < 6 ){
//       errors.innerHTML = 'Password must be at least 6 characters long'
//       event.preventDefault()
//     }
//     else if (!password.value.include('@')
//     || !password.value.include("#")  ){
//       errors.innerHTML = 'Password must include at least one of the following characters ! @ # $ '
//       event.preventDefault()
//     }
//     if (email.value ===  '' || password.value === '') {
//       errors.innerHTML = 'Please fill in all fields'
//       event.preventDefault()
//     }
//   })

// }
}
