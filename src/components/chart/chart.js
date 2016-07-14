import {inject, customElement, child, bindable} from 'aurelia-framework'
import Chart from "chartjs"

@customElement('chart')
@inject(Element)
export class ChartElement {
    @bindable type;
    @bindable data;
    @bindable loading;
    @bindable options = {};
    @child("canvas") canvas;

    _chart;
    _attached = false;

    constructor(element) {
        this.element = element;
    }

    attached() {
        console.log('Chart attached');
        // workaround https://github.com/aurelia/templating/issues/400
        this.canvas =  this.element.querySelector("canvas");
        this._createOrUpdate();
        this._attached = true;
    }

    dataChanged() {
        if (this._attached)
            this._createOrUpdate();
    }

    detached() {
        console.log('Chart detached');
        if (this._chart) {
            this._chart.destroy();
            this._chart = undefined;
        }
        this._attached = false;
    }

    _createOrUpdate() {
        if (this.data) {
            console.log('Create chart 1');
            if (!this._chart) {
                console.log('Create chart 2');
                this._chart = new Chart(this.canvas, {
                    type: this.type,
                    data: this.data,
                    options: this.options || {}
                });
            } else
                this._chart.update();
        } else {
            if (this._chart) {
                this._chart.destroy();
                this._chart = undefined;
            }
        }
    }

}
