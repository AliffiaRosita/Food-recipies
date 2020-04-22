
class NavBar extends HTMLElement{

    // constructor(){
    //     super();
    //     this.shadowDOM = this.attachShadow({mode:"open"});
    // }
    connectedCallback(){
        this.innerHTML =`
        <nav class="navbar navbar-expand-lg navbar-dark bg-danger">
        <a class="navbar-brand" href="#">Food Recipies</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
      
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav mr-auto">
            <li class="nav-item">
              <a class="nav-link" href="index.html">Home <span class="sr-only">(current)</span></a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="foods.html">Foods</a>
            </li>
          </ul>
        </div>
      </nav>
        `;
    }
}
customElements.define("nav-bar", NavBar);