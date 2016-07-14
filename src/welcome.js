import {Prism} from 'prismjs';

export class Welcome {

  activate(){
    SystemJS.import("examples/dropdown/dropdown.html" + "!text").then(html => {
      this.htmlCode = Prism.highlight(html, Prism.languages.html);
    })
  }

}

