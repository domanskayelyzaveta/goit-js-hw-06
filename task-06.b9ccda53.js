const t=document.querySelector("#validation-input");t.addEventListener("blur",(function(e){const n=t.value.length,a=+t.dataset.length;console.log(+t.dataset.length),a>n?t.classList.add("invalid"):t.classList.add("valid")})),t.addEventListener("focus",(function(e){t.classList.remove("valid","invalid")}));
//# sourceMappingURL=task-06.b9ccda53.js.map
