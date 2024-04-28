class navBar{
  constructor(menu, navlist, navlinks){
    this.menu = document.querySelector(menu)
    this.navlist = document.querySelector(navlist)
    this.navlinks = document.querySelectorAll(navlinks)
    this.activeClass = "active"

    this.handleClick = this.handleClick.bind(this)
  }

  animatelinks(){
    this.navlinks.forEach((link,index) =>{
      
      link.style.animation
      ? (link.style.animation = "")
      : (link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`)
    })
  }


  handleClick(){
    this.navlist.classList.toggle(this.activeClass)
    this.menu.classList.toggle(this.activeClass)
    this.animatelinks()
  }


  addClickEvent() {
    this.menu.addEventListener("click", this.handleClick)
  }

  init(){
    if(this.menu){
      this.addClickEvent()
    }
    return this
  }
}

const navbar = new navBar(
  ".menu",
  ".nav-list",
  ".nav-list li",
)
navbar.init()