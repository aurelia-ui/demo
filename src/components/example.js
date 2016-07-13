import {inject, bindable, customElement, children, child, containerless} from 'aurelia-framework';
import {HttpClient} from 'aurelia-fetch-client';
import 'fetch';
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
    SystemJS.import(this.id + ".js.map" + "!text").then(sourceMap => {
      this.jsCode = JSON.parse(sourceMap).sourcesContent[0];
    })
    SystemJS.import(this.id + ".html" + "!text").then(html => {
      this.htmlCode = html;
    })

  }
}
