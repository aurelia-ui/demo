import {inject, bindable, customElement, children, child, containerless} from 'aurelia-framework';
@customElement('dropdown')
@inject(Element)
export class DataTableCustomElement {

  @bindable expanded = false;
  @bindable title;
  @bindable iconClass;
  @bindable buttonClass;
  @bindable closeOnItemClick = true;

  @child("div") div;

  constructor(element) {
    this.element = element;
    document.addEventListener('click', this._onOutsideClick.bind(this));
  }

  attached(){
    this.div = this.element.querySelector("div");
    this.button = this.div.querySelector("button");
  }

  detached(){
    document.removeEventListener('click', this._onOutsideClick);
  }

  close(){
    this.expanded = false;
  }

  _onOutsideClick(e){
    // is outside?
    if (e.target != this.element && !this._isDescendant(this.element, e.target)) {
      this.expanded = false;
      return
    }
    // is target a toggle button?
    if (e.target == this.button || this._isDescendant(this.button, e.target)) {
      this.expanded = !this.expanded;
      return;
    }

    // click on the item
    if(this.closeOnItemClick) {
      this.expanded = false;
    }

  }

  _isDescendant(parent, child) {
    var node = child.parentNode;
    while (node != null) {
      if (node == parent) {
        return true;
      }
      node = node.parentNode;
    }
    return false;
  }
}
