class Header extends HTMLElement {
    constructor() {
      super();
    }

    connectedCallback() {
      this.innerHTML = `
        <header class="header">
          <div>
            <div class="header-content">
              <div class="header-logo-container">
                <a href="../index.html">
                  <img width="190" src="https://www.zutec.com/wp-content/uploads/2021/02/logo.png">
                </a>
              </div>
              <nav class="header-nav">
                <ul style="display: flex; list-style-type: none; justify-content: space-between;">
                  <li>
                    <a href="../pages/dashboard.html">Dashboard</a> 
                  </li>
                  <li>
                    <a href="../pages/projects.html">Projects</a>  
                  </li>
                  <li>
                    <a href="../pages/admin.html">Admin</a> 
                  </li>
                  <li>
                    <a href="../pages/drawings.html">Drawings</a> 
                  </li>
                  <li>
                    <a href="../pages/bim.html">BIM</a> 
                  </li>
                </ul>
              </nav> 
              <div class="burger-menu-container">
                <div class="burger-menu" id="burgerMenu"> 
                  <img width="30" src="../images/burger-menu-icon.png">
                </div>
              </div>
            </div>
        </header>
      `;
    }
  }
  
  customElements.define('header-component', Header);