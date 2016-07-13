import 'prismjs';
import {inject, customAttribute} from 'aurelia-framework';

@customAttribute('syntax-highlight')
@inject(Element)
export class SyntaxHighlight {
  constructor(element) {
    this.element = element;
  }

  attached() {
    Prism.highlightElement(this.element);
  }
}
