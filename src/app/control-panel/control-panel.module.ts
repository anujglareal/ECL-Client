import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule, DatePipe } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { MatSidenavModule } from '@angular/material/sidenav';
import { TranslateModule } from '@ngx-translate/core';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { MatTabsModule } from '@angular/material/tabs';
import { MatSelectModule } from '@angular/material/select';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatChipsModule } from '@angular/material/chips';
import { FormsModule } from '@angular/forms';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatCardModule } from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { FlexModule } from '@angular/flex-layout';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatRadioModule } from '@angular/material/radio';
import { MatTableModule } from '@angular/material/table';
import { MatDialogModule } from '@angular/material/dialog';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { NgxLoadingModule } from 'ngx-loading';
import { CalendarModule, DateAdapter } from 'angular-calendar';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';
import { MatStepperModule } from '@angular/material/stepper';
import { NgChatModule } from 'ng-chat';
import { MatExpansionModule, MatFormFieldModule, MatInputModule, MatIconModule, MatPaginatorModule, MatSlideToggleModule } from '@angular/material';
import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { AgmCoreModule } from '@agm/core';
import { ControlPanelRouting } from './control-panel.routing';
import { ControlPanelComponent } from './control-panel.component';
import { HttpClientModule } from '@angular/common/http';
import { EquipmentComponent } from './components/equipment/equipment.component';
import { RefernceRangeComponent } from './components/refernce-range/refernce-range.component';
import { OutsourcingManagementComponent } from './components/outsourcing-management/outsourcing-management.component';
import { OrganizationComponent } from './components/organization/organization.component';
import { CombinedTestComponent } from './components/test-masters/combined-test/combined-test.component';
import { IndividualTestComponent } from './components/test-masters/individual-test/individual-test.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { ProfileTestComponent } from './components/test-masters/profile-test/profile-test.component';
import { HomeDashboardComponent } from './components/dashboards/home-dashboard/home-dashboard.component';
import { ReferenceRangeDataTableComponent } from './components/refernce-range/reference-range-data-table/reference-range-data-table.component';
import { AddReferenceRangeComponent } from './components/refernce-range/_dialogues/add-reference-range/add-reference-range.component';
import { EditReferenceRangeComponent } from './components/refernce-range/_dialogues/edit-reference-range/edit-reference-range.component';
import { EquipmentListDataTableComponent } from './components/equipment/equipment-list-data-table/equipment-list-data-table.component';
import { AddEquipmentComponent } from './components/equipment/_dialogues/add-equipment/add-equipment.component';
import { EditEquipmentComponent } from './components/equipment/_dialogues/edit-equipment/edit-equipment.component';
import { OrganisationListDataTableComponent } from './components/organization/organisation-list-data-table/organisation-list-data-table.component';
import { AddOrganisationComponent } from './shared/add-organisation/add-organisation.component';
import { EditOrganisationComponent } from './components/organization/_dialogues/edit-organisation/edit-organisation.component';
import { AddReferalLabComponent } from './components/outsourcing-management/_dialogues/add-referal-lab/add-referal-lab.component';
import { EditReferalLabComponent } from './components/outsourcing-management/_dialogues/edit-referal-lab/edit-referal-lab.component';
import { ReferalLabListDataTableComponent } from './components/outsourcing-management/referal-lab-list-data-table/referal-lab-list-data-table.component';
import { ProfileTestListDataTableComponent } from './components/test-masters/profile-test/profile-test-list-data-table/profile-test-list-data-table.component';
import { IndividualTestListDataTableComponent } from './components/test-masters/individual-test/individual-test-list-data-table/individual-test-list-data-table.component';
import { CombinedTestListDataTableComponent } from './components/test-masters/combined-test/combined-test-list-data-table/combined-test-list-data-table.component';
import { AddCombinedTestComponent } from './components/test-masters/combined-test/_dialogues/add-combined-test/add-combined-test.component';
import { EditCombinedTestComponent } from './components/test-masters/combined-test/_dialogues/edit-combined-test/edit-combined-test.component';
import { AddProfileTestComponent } from './components/test-masters/profile-test/_dialogues/add-profile-test/add-profile-test.component';
import { LinkTestToProfiletestComponent } from './components/test-masters/profile-test/_dialogues/link-test-to-profiletest/link-test-to-profiletest.component';
import { EditProfileTestComponent } from './components/test-masters/profile-test/_dialogues/edit-profile-test/edit-profile-test.component';
import { AddIndividualTestComponent } from './components/test-masters/individual-test/_dialogues/add-individual-test/add-individual-test.component';
import { EditIndividualTestComponent } from './components/test-masters/individual-test/_dialogues/edit-individual-test/edit-individual-test.component';
import { ControlPanelMenu } from './config/control-panel-menu';
import { PatientFeedbackSurveyComponent } from './components/dashboards/home-dashboard/surveys/patient-feedback-survey/patient-feedback-survey.component';
import { AccountFeedbackSurveyComponent } from './components/dashboards/home-dashboard/surveys/account-feedback-survey/account-feedback-survey.component';
import { AddDoctorComponent } from './components/doctor/_dialogues/add-doctor/add-doctor.component';
import { DoctorComponent } from './components/doctor/doctor.component';
import { EditDoctorComponent } from './components/doctor/_dialogues/edit-doctor/edit-doctor.component';
import { DoctorListDataTableComponent } from './components/doctor/doctor-list-data-table/doctor-list-data-table.component';
import { OutsourcingManagementRibbonMenuComponent } from './components/outsourcing-management/outsourcing-management-ribbon-menu/outsourcing-management-ribbon-menu.component';
import { OutsourcingManagementSearchComponent } from './components/outsourcing-management/outsourcing-management-search/outsourcing-management-search.component';
import { OutsourcingManagementListComponent } from './components/outsourcing-management/outsourcing-management-list/outsourcing-management-list.component';
import { IndividualTestListComponent } from './components/test-masters/individual-test/individual-test-list/individual-test-list.component';
import { IndividualTestRibbonMenuComponent } from './components/test-masters/individual-test/individual-test-ribbon-menu/individual-test-ribbon-menu.component';
import { IndividualTestSearchComponent } from './components/test-masters/individual-test/individual-test-search/individual-test-search.component';
import { OrganisationRibbonMenuComponent } from './components/organization/organisation-ribbon-menu/organisation-ribbon-menu.component';
import { OrganisationsSearchComponent } from './components/organization/organisations-search/organisations-search.component';
import { OrganisationListComponent } from './components/organization/organisation-list/organisation-list.component';
import { OrganisationPriceListComponent } from './components/organisation-price-list/organisation-price-list.component';
import { OrganisationPriceListDataTableComponent } from './components/organisation-price-list/organisation-price-list-data-table/organisation-price-list-data-table.component';
import { OrganisationPriceListRibbonMenuComponent } from './components/organisation-price-list/organisation-price-list-ribbon-menu/organisation-price-list-ribbon-menu.component';
import { OrganisationPriceListDataListComponent } from './components/organisation-price-list/organisation-price-list-data-list/organisation-price-list-data-list.component';
import { OrganisationPriceListSearchComponent } from './components/organisation-price-list/organisation-price-list-search/organisation-price-list-search.component';
import { AddOrganisationPriceListComponent } from './components/organisation-price-list/_dialogues/add-organisation-price-list/add-organisation-price-list.component';
import { EditOrganisationPriceListComponent } from './components/organisation-price-list/_dialogues/edit-organisation-price-list/edit-organisation-price-list.component';

@NgModule({
  declarations: [
    ControlPanelComponent,
    RefernceRangeComponent,
    ReferenceRangeDataTableComponent,
    AddReferenceRangeComponent,
    PatientFeedbackSurveyComponent,
    AccountFeedbackSurveyComponent,
    EditReferenceRangeComponent,
    EquipmentComponent,
    EquipmentListDataTableComponent,
    AddEquipmentComponent,
    EditEquipmentComponent,
    OutsourcingManagementComponent,
    OrganizationComponent,
    OrganisationListDataTableComponent,
    AddOrganisationComponent,
    EditOrganisationComponent,
    OutsourcingManagementComponent,
    AddReferalLabComponent,
    EditReferalLabComponent,
    ReferalLabListDataTableComponent,
    ProfileTestComponent,
    IndividualTestComponent,
    CombinedTestComponent,
    ProfileTestListDataTableComponent,
    IndividualTestListDataTableComponent,
    CombinedTestListDataTableComponent,
    AddCombinedTestComponent,
    EditCombinedTestComponent,
    AddProfileTestComponent,
    EditProfileTestComponent,
    LinkTestToProfiletestComponent,
    AddIndividualTestComponent,
    EditIndividualTestComponent,
    NotFoundComponent,
    HomeDashboardComponent,
    AddDoctorComponent,
    DoctorComponent,
    DoctorListDataTableComponent,
    EditDoctorComponent,
    OutsourcingManagementRibbonMenuComponent,
    OutsourcingManagementSearchComponent,
    OutsourcingManagementListComponent,
    IndividualTestListComponent,
    IndividualTestRibbonMenuComponent,
    IndividualTestSearchComponent,
    OrganisationRibbonMenuComponent,
    OrganisationsSearchComponent,
    OrganisationListComponent,
    OrganisationPriceListComponent,
    OrganisationPriceListDataTableComponent,
    OrganisationPriceListRibbonMenuComponent,
    OrganisationPriceListDataListComponent,
    OrganisationPriceListSearchComponent,
    AddOrganisationPriceListComponent,
    EditOrganisationPriceListComponent
  ],
  providers: [
    DatePipe,
    ControlPanelMenu,
    MatDatepickerModule,
  ],
  imports: [
    RouterModule,
    CommonModule,
    SharedModule,
    MatIconModule,
    MatSidenavModule,
    TranslateModule,
    PerfectScrollbarModule,
    MatListModule,
    MatMenuModule,
    MatTabsModule,
    MatSelectModule,
    MatCheckboxModule,
    FormsModule,
    MatProgressBarModule,
    NgChatModule,
    MatDialogModule,
    HttpClientModule,
    MatCardModule,
    MatExpansionModule,
    MatFormFieldModule,
    MatToolbarModule,
    MatExpansionModule,
    MatButtonModule,
    MatSnackBarModule,
    FlexModule,
    MatInputModule,
    MatDatepickerModule,
    MatSlideToggleModule,
    MatRadioModule,
    ControlPanelRouting,
    MatTableModule,
    MatPaginatorModule,
    MatDialogModule,
    MatProgressSpinnerModule,
    NgxLoadingModule,
    MatStepperModule,
    MatChipsModule,
    CalendarModule.forRoot({
      provide: DateAdapter,
      useFactory: adapterFactory,
    }),
    AgmCoreModule,
  ],
  exports: [
    RouterModule, ControlPanelComponent
  ],
  entryComponents: [
    AddCombinedTestComponent,
    EditCombinedTestComponent,
    AddProfileTestComponent,
    EditProfileTestComponent,
    LinkTestToProfiletestComponent,
    AddIndividualTestComponent,
    EditIndividualTestComponent,
    AddOrganisationComponent,
    EditOrganisationComponent,
    AddReferalLabComponent,
    EditReferalLabComponent,
    EditReferalLabComponent,
    AddReferenceRangeComponent,
    EditReferenceRangeComponent,
    AddEquipmentComponent,
    EditEquipmentComponent,
    AddDoctorComponent,
    EditDoctorComponent,
    OutsourcingManagementSearchComponent,
    IndividualTestSearchComponent,
    OrganisationsSearchComponent,
    AddOrganisationPriceListComponent,
    EditOrganisationPriceListComponent,
    OrganisationPriceListSearchComponent
  ],
})
export class ControlPanelModule {}
