import { Component, OnInit, ChangeDetectionStrategy, OnDestroy } from '@angular/core';
import { CombinedTestModel } from 'app/control-panel/models/test-master/combined-test/combined-test.model';
import { GridColumnModel } from 'app/shared/models/grid-column.model';
import { MatDialogConfig, MatDialog } from '@angular/material';
import { ActivatedRoute } from '@angular/router';
import { untilDestroyed } from 'ngx-take-until-destroy';
import { take } from 'rxjs/operators';
import { LinkTestToCombinedTestComponent } from '../_dialogues/link-test-to-combined-test/link-test-to-combined-test.component';

@Component({
  selector: 'app-combined-test-details',
  templateUrl: './combined-test-details.component.html',
  styleUrls: ['./combined-test-details.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CombinedTestDetailsComponent implements OnInit, OnDestroy {
  dosCode: string;
  test: CombinedTestModel;
  combinedTest: CombinedTestModel[];
  public displayedColumns: string[];
  public filteredColumns: GridColumnModel[];

  matDialogConfig: MatDialogConfig = {
    panelClass: 'mat-dialogue-no-padding',
    width: '1400px',
    autoFocus: false,
  };

  constructor(private readonly _activatedRoute: ActivatedRoute, private readonly matDialog: MatDialog) {}

  ngOnInit(): void {
    this._initializeDisplayedColumns();
    this._initializeValues();
    this._activatedRoute.queryParams.pipe(untilDestroyed(this)).subscribe((queryParams) => {
      const selectedId = queryParams['id'];
      if (selectedId) {
        this.test = this.combinedTest.find((x) => x.eclDosCode === selectedId);
      }
    });
  }

  private _initializeDisplayedColumns(): void {
    this.filteredColumns = [
      { columnName: 'id', displayValue: 'ID', isSelected: true },
      { columnName: 'activity', displayValue: 'Activity', isSelected: true },
      { columnName: 'testCategory', displayValue: 'Test Category', isSelected: false },
      { columnName: 'accreditiationSymbol', displayValue: 'Accreditiation Symbol', isSelected: false },
      { columnName: 'integrationCode', displayValue: 'Integration Code', isSelected: true },
      { columnName: 'testComponent', displayValue: 'Test Component', isSelected: true },
      { columnName: 'processingCenter', displayValue: 'Processing Center', isSelected: false },
      { columnName: 'outsourceVendorCode', displayValue: 'Outsource Vendor Code', isSelected: true },
      { columnName: 'method', displayValue: 'Method', isSelected: true },
      { columnName: 'unit', displayValue: 'Unit', isSelected: true },
      { columnName: 'referenceRange', displayValue: 'Reference Range', isSelected: true },
      { columnName: 'tat', displayValue: 'TAT', isSelected: true },
      { columnName: 'cptAmount', displayValue: 'CPT Amount', isSelected: false },
      { columnName: 'comments', displayValue: 'Comments', isSelected: true },
      { columnName: 'action', displayValue: 'Action', isSelected: true },
    ];
    const selectedColumns = this.filteredColumns.filter((x) => x.isSelected);
    this.displayedColumns = selectedColumns.map((x) => x.columnName);
  }

  public onColumnChooserClosed(selectedColumns: GridColumnModel[]): void {
    this.displayedColumns = selectedColumns.map((x) => x.columnName);
  }

  public onAddIndividualTestClicked(): void {
    this.matDialog
      .open(LinkTestToCombinedTestComponent, this.matDialogConfig)
      .afterClosed()
      .pipe(take(1))
      .subscribe();
  }

  public _initializeValues(): void {
    // this.combinedTest = [
    //   {
    //     dosCode: 'ECL-767',
    //     testId: '1313741',
    //     cptCode: '82465',
    //     testName: 'cholestrol,Total',
    //     specimen: '2 ml serum',
    //     specimenType: 'serum',
    //     storage: 'refrigerated',
    //     department: 'biochemistry',
    //     patientFee: '40.00',
    //     netFee: '10.00',
    //     location: 'dubai',
    //     currency: 'dihram',
    //     reportFormat: '',
    //     individualTest: [
    //       {
    //         id: '1708027',
    //         active: 'Active',
    //         testCategory: 'outsource',
    //         accreditationSymbol: '**',
    //         testComponent: 'blood',
    //         processingCenter: 'pathcare',
    //         outsourceVendorCode: 'HM052',
    //         method: 'CLIA',
    //         unit: '2 ml',
    //         referenceRange: '3.00 to 40.00',
    //         tat: '1',
    //         cptAmount: '4.00',
    //         integrationCode: 'T105',
    //         accreditation: 'not enable',
    //         comments: 'String',
    //       },
    //     ],
    //   },
    // ];
  }

  ngOnDestroy(): void {}
}
