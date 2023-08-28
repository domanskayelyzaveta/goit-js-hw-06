const e=document.querySelector(".login-form");console.log(e),e.addEventListener("submit",(function(o){o.preventDefault();const l=e.elements.email.value,s=e.elements.password.value;if(""===l||""===s)alert("Всі поля повинні бути заповнені");else{const o={email:l,password:s};console.log(o),e.reset()}}));
//# sourceMappingURL=task-08.0a90f687.js.map
