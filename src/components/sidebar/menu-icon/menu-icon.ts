export function createMenuIcon(target: HTMLElement): HTMLElement {

    const menuicon = document.createElement('nav');
    menuicon.classList.add("menu-icon");
    menuicon.setAttribute("id",'menu-icon-nav');
    
    const bar1 = document.createElement('div');
    // bar1.classList.add("menu-icon");
    bar1.classList.add("bar1");
    
    const bar2 = document.createElement('div');
    // bar2.classList.add("menu-icon");
    bar2.classList.add("bar2");
    
    const bar3 = document.createElement('div');
    // bar3.classList.add("menu-icon");
    bar3.classList.add("bar3");

    target?.appendChild(menuicon)

    menuicon.appendChild(bar1);
    menuicon.appendChild(bar2);
    menuicon.appendChild(bar3);

    // lo hace funcional
    menuicon.addEventListener("click", function() {
        this.classList.toggle('change')
    })

    // lo devuelve
    return menuicon;
}
