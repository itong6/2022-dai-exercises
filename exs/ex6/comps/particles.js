//MUST HAVE - CREATE A TEMPLATE TAG
var template_comp = document.createElement("template"); //<template> </template> RULE

//To-do - CREATE THE UI HERE!
template_comp.innerHTML = `
<style>
    .par {
        background:red;
        width:25px;
        height:25px;
        border-radius:50%
    }
</style>
<div class='par'>

</div>
`;

//MUST HAVE - CREATE A CLASS WITH HTMLELEMENT POWERS (interfaces/functionalities)
class GameParticles extends HTMLElement {

    //MUST HAVE - CREATE A CONSTRUCTOR TO DO INITAL ASSOCIATIONS
    constructor(){
        super(); //pass on the HTMLElement super powers!
        this.attachShadow({mode:"open"}) //Attach it to the shadowRoot

        //To-do - CREATE THE STATES FOR THE UI HERE!
    }

    //MUST HAVE - FUNCTION THAT RUNS AFTER IT'S CONNECTED
    connectedCallback(){
        this.shadowRoot.appendChild(template_comp.content.cloneNode(true)); //use the template to make a clone
        //this.shadowRoot.querySelector('.par').onclick = () => this.changeParticle();
    }

    //To-do - CREATE THE FUNCTIONALITIES HERE!
    changeParticle(type='snow'){
        if(type === 'snow'){
            this.shadowRoot.querySelector('.par').style.cssText = `
            background:white;
            `
        }

        if(type === 'desert'){
            this.shadowRoot.querySelector('.par').style.cssText = `
            background:yellow;
            `
        }

        if(type === 'forest'){
            this.shadowRoot.querySelector('.par').style.cssText = `
            background:green;
            `
        }

        if(type === 'valley'){
            this.shadowRoot.querySelector('.par').style.cssText = `
            background:blue;
            `
        }
    }

}

//MUST HAVE - define the tag for the custom elements
customElements.define("game-particles", GameParticles)