export class Welcome {

  
  activate(){
    SystemJS.import("dropdown/dropdown.html" + "!text").then(html => {
      this.htmlCode = Prism.highlight(html, Prism.languages.html);
    })
  }  
}

