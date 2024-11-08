export function createMenuIcon(): HTMLElement {
    
    // lo crea con un blank slate
    const menuicon = document.createElement('nav');

    // lo clasifica
    menuicon.classList.add('menu-icon');
    
    // lo agrega
    document.body.appendChild(menuicon);

    // lo transforma en algo... usar innerhtml es lento e inseguro... mejor evitarlo
    // menuicon.innerHTML = `
    // <div class="container" id="icon-bar">
    // <div class="bar1"></div>
    // <div class="bar2"></div>
    // <div class="bar3"></div>
    // </div>
    // `;

    // esta es la forma inenetendible y larga, pero la mas recomendable
    const container = document.createElement('div');
    container.classList.add("container");
    container.id = "icon-bar";
    
    const bar1 = document.createElement('div');
    container.classList.add("bar1");
    
    const bar2 = document.createElement('div');
    container.classList.add("bar2");
    
    const bar3 = document.createElement('div');
    container.classList.add("bar3");
    
    menuicon.appendChild(container)

    container.appendChild(bar1);
    container.appendChild(bar2);
    container.appendChild(bar3);

    // lo hace funcional
    container.addEventListener("click", function() {
        this.classList.toggle('change')
    })

    // lo devuelve
    return menuicon;
}
