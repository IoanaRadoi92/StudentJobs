import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { StudentjobsCompanyModule } from './company/company.module';
import { StudentjobsTitleModule } from './title/title.module';
/* jhipster-needle-add-entity-module-import - JHipster will add entity modules imports here */

@NgModule({
    imports: [
        StudentjobsCompanyModule,
        StudentjobsTitleModule,
        /* jhipster-needle-add-entity-module - JHipster will add entity modules here */
    ],
    declarations: [],
    entryComponents: [],
    providers: [],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class StudentjobsEntityModule {}
