import './style.css'
import "./topics/01-basic-types.ts";
import typescriptLogo from './typescript.svg'
import viteLogo from '/vite.svg'
import { setupCounter } from './counter.ts'

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
<h1>Hola Mundo</h1>
`
console.log("Hola Mundo")
