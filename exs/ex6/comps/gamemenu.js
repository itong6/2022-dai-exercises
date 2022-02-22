//MUST HAVE - CREATE A TEMPLATE TAG
var template_menu = document.createElement("template"); //<template> </template> RULE

//To-do - CREATE THE UI HERE!
template_menu.innerHTML = `
        <style>
            .menu {
                color:#FFFF;
                background-color:#333;
                display:inline-flex;
                padding:10px;
            }
        </style>
<div class='menu'>
    menu
</div>
`;

//MUST HAVE - CREATE A CLASS WITH HTMLELEMENT POWERS (interfaces/functionalities)
class GameMenu extends HTMLElement {

    //MUST HAVE - CREATE A CONSTRUCTOR TO DO INITAL ASSOCIATIONS
    constructor(){
        super(); //pass on the HTMLElement super powers!
        this.attachShadow({mode:"open"}) //Attach it to the shadowRoot

        //To-do - CREATE THE STATES FOR THE UI HERE!
    
    }

    //MUST HAVE - FUNCTION THAT RUNS AFTER IT'S CONNECTED
    connectedCallback(){
        this.shadowRoot.appendChild(template_menu.content.cloneNode(true)); //use the template to make a clone
        if(this.getAttribute("name")){
            this.shadowRoot.querySelector('.menu').innerHTML = this.getAttribute("name");
        }
        
        this.shadowRoot.querySelector('.menu').onclick = () => {
            document.querySelector('#gamebg').changeBG(`./imgs/${this.getAttribute('name')}.svg`);
            document.querySelector('#particles').changeParticle(this.getAttribute('name')); 
        }
        
    }

    //To-do - CREATE THE FUNCTIONALITIES HERE!
}

//MUST HAVE - define the tag for the custom elements
customElements.define("game-menu", GameMenu)