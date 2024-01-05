import "./style.css"
import "./topics/01-basic-types.ts";
import "./topics/02-object-interface.ts";
import "./topics/03-functions.ts";

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
<h1>Hola Mundo</h1>
`
console.log("Hola Mundo")
