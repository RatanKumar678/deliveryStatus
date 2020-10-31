import { Directive, HostListener} from '@angular/core';
@Directive({
    selector: '[appAllowNumberOnly]'
})
export class AllowNumberOnlyDirective {
    regularExpression = new RegExp('^[0-9]+$');
    @HostListener('keydown', ['$event'])
    getKeyDown(event: any) {
       this.getTheKey(event);
    }
    @HostListener('past', ['$event'])
    getPastEvent(event: any) {
        this.getTheKey(event);
    }
    getTheKey(event: any) {
        const allowedKey = [46, 8, 13, 37, 39, 9, 16, 189];
        const charCode = (event.which) ? event.which : event.keyCode;
        if (event.shiftKey && event.key === 'Tab') {
            return true;
        } else if (allowedKey.indexOf(charCode) !== -1) {
            return true;
        } else if ((charCode < 48 || charCode > 57) && (charCode < 96 || charCode > 105)) {
            event.preventDefault();
        } else {
            return true;
        }
    }
}
