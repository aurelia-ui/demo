import {inject, bindable, customElement, children, child, containerless} from 'aurelia-framework';
import {HttpClient} from 'aurelia-fetch-client';
import 'fetch';
import {Prism} from 'prismjs';
@customElement('example')
@inject(Element, HttpClient)
export class ExampleCustomElement {

  @bindable id;
  active='demo';

  constructor(element, HttpClient) {
    this.element = element;
    this.HttpClient = HttpClient;
  }

  bind(){
      
  }

  attached(){
    console.log(Prism);
    SystemJS.import(this.id + ".js.map" + "!text").then(sourceMap => {
      this.jsCode = Prism.highlight(JSON.parse(sourceMap).sourcesContent[0], Prism.languages.javascript);
    });

    let template = this.id + ".html" + "!text";
    console.log("Importing template:", template);
    SystemJS.import(template).then(html => {
      this.htmlCode = Prism.highlight(html, Prism.languages.html);
    })

  }
}
