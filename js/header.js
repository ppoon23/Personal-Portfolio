class Header extends HTMLElement {
    constructor() {
      super();
    }

 
  connectedCallback() {
    this.innerHTML = `
    <nav class="white" role="navigation">
        <div class="nav-wrapper container">
        <ul class="left hide-on-med-and-down">
            <li><a class="blue-grey-text text-lighten-1" href="/Personal-Portfolio-Template/index.html">Home</a></li>
            <li><a class="blue-grey-text text-lighten-1" href="/Personal-Portfolio-Template/aboutme.html">About me</a></li>
            <li><a class="blue-grey-text text-lighten-1" href="/Personal-Portfolio-Template/projects.html">Projects</a></li>
            <li><a class="blue-grey-text text-lighten-1" href="/Personal-Portfolio-Template/contact.html">Contact</a></li>
        </ul>
        <ul class="right hide-on-med-and-down">
            <a class="right-align blue-grey-text text-darken-3">HELLO MY NAME IS </a>
        </ul>

        <ul id="nav-mobile" class="sidenav">
            <li><a class="blue-grey-text text-lighten-1" href="/Personal-Portfolio-Template/index.html">Home</a></li>
            <li><a class="blue-grey-text text-lighten-1" href="/Personal-Portfolio-Template/aboutme.html">About me</a></li>
            <li><a class="blue-grey-text text-lighten-1" href="/Personal-Portfolio-Template/projects.html">Projects</a></li>
            <li><a class="blue-grey-text text-lighten-1" href="/Personal-Portfolio-Template/contact.html">Contact</a></li>
        </ul>
        <a href="#" data-target="nav-mobile" class="sidenav-trigger"><i class="black-text material-icons">menu</i></a>
        </div>
    </nav>
    `;

    
  }
}
customElements.define('header-component', Header);