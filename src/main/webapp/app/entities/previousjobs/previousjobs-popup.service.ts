import { Injectable, Component } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { Previousjobs } from './previousjobs.model';
import { PreviousjobsService } from './previousjobs.service';
@Injectable()
export class PreviousjobsPopupService {
    private isOpen = false;
    constructor (
        private modalService: NgbModal,
        private router: Router,
        private previousjobsService: PreviousjobsService

    ) {}

    open (component: Component, id?: number | any): NgbModalRef {
        if (this.isOpen) {
            return;
        }
        this.isOpen = true;

        if (id) {
            this.previousjobsService.find(id).subscribe(previousjobs => {
                this.previousjobsModalRef(component, previousjobs);
            });
        } else {
            return this.previousjobsModalRef(component, new Previousjobs());
        }
    }

    previousjobsModalRef(component: Component, previousjobs: Previousjobs): NgbModalRef {
        let modalRef = this.modalService.open(component, { size: 'lg', backdrop: 'static'});
        modalRef.componentInstance.previousjobs = previousjobs;
        modalRef.result.then(result => {
            this.router.navigate([{ outlets: { popup: null }}], { replaceUrl: true });
            this.isOpen = false;
        }, (reason) => {
            this.router.navigate([{ outlets: { popup: null }}], { replaceUrl: true });
            this.isOpen = false;
        });
        return modalRef;
    }
}
