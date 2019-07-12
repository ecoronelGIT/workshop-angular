import {Directive, ElementRef, Input, OnInit} from '@angular/core';
import * as $ from 'jquery';
import * as modal from 'jquery-modal'

@Directive({
    selector: '[modal-trigger]'
})
export class ModalTriggerDirective implements OnInit {
    @Input('modal-trigger') modalId: string;
    private el: HTMLElement;

    constructor(ref: ElementRef) {
        this.el = ref.nativeElement;
    }

    ngOnInit() {
        this.el.addEventListener('click', (e) => {
            //$(`#${this.modalId}`).modal({});
        });
    }
}
