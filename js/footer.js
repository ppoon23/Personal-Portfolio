class Footer extends HTMLElement {
    constructor() {
      super();
    }
  
    connectedCallback() {
      this.innerHTML = `
      <div class="container">
        <div class="row">
            <div class="col s12 m6">
            <ul class='center-on-small-only'>
                <a class="blue-grey-text text-lighten-1">all works © </a> <a class="blue-grey-text text-darken-3">Patrick Poon</a>
            </ul>
            </div>
            <div class="col s12 m6 right-align">
            <ul class='center-on-small-only'>
                <a class="blue-grey-text text-darken-3 fas fa-envelope fa-lg" href="mailto:abc@xyz.com? subject ABC Inquery" target="_blank"></a>
                &emsp;
                <a class="blue-grey-text text-darken-3 fab fa-github fa-lg" href="https://github.com/xxx/" target="_blank"></a>
                &emsp;
                <a class="blue-grey-text text-darken-3 fab fa-linkedin fa-lg" href="https://www.linkedin.com/in/xxx/" target="_blank"></a>
            </ul>
            </div>
        </div>
        </ul>
    </div>
    `;
    }
}
customElements.define('footer-component', Footer);
