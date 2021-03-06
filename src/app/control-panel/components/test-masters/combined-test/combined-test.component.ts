import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { MatDialog, MatDialogConfig, PageEvent } from '@angular/material';
import { take } from 'rxjs/operators';
import { AddCombinedTestComponent } from './_dialogues/add-combined-test/add-combined-test.component';
import { EditCombinedTestComponent } from './_dialogues/edit-combined-test/edit-combined-test.component';
import { TestModel } from 'app/control-panel/models/tests/test.model';
import { DISPLAY_MODE } from 'app/main/models/constants';
import { ActivatedRoute, Router } from '@angular/router';
import { CombinedTestModel } from 'app/control-panel/models/test-master/combined-test/combined-test.model';
import { CombinedTestService } from 'app/control-panel/services/combinedtest.service';
import { CombinedTest } from './test.model';
import { LinkTestToCombinedTestComponent } from './_dialogues/link-test-to-combined-test/link-test-to-combined-test.component';

@Component({
  selector: 'app-combined-test',
  templateUrl: './combined-test.component.html',
  styleUrls: ['./combined-test.component.scss'],
})
export class CombinedTestComponent implements OnInit {
  public tests: CombinedTestModel[];
  public showListView: boolean;
  public pageEvent: PageEvent;
  public pageSizeOptions: number[];
  public lastSavedTest: CombinedTestModel;
  public isFetchingTests: boolean;

  matDialogConfig: MatDialogConfig = {
    panelClass: 'mat-dialogue-no-padding',
    width: '1400px',
    autoFocus: false,
  };

  constructor(
    private readonly matDialog: MatDialog,
    private readonly _activatedRoute: ActivatedRoute,
    private readonly _router: Router,
    private combinedTestService: CombinedTestService,
    private readonly cRef: ChangeDetectorRef,
  ) {
    this.pageEvent = { pageIndex: 0, pageSize: 10 } as PageEvent;
    this.pageSizeOptions = [10, 25, 50, 100];
  }

  ngOnInit(): void {
    this.getAllCombinedTest();
    this._activatedRoute.queryParams.subscribe((queryParams) => {
      this.showListView = queryParams['view'] === DISPLAY_MODE.LIST;
    });
  }

  public onManageButtonClicked(combinedTestId: number): void {
    this._router.navigate(['/control-panel/combined-test-details'], { queryParams: { id: combinedTestId } });
  }

  public onAddCombinedTestButtonClicked(): void {
    this.matDialog
      .open(AddCombinedTestComponent, this.matDialogConfig)
      .afterClosed()
      .pipe(take(1))
      .subscribe(() => {
        this.getAllCombinedTest();
      });
  }

  public getAllCombinedTest(): void {
    this.isFetchingTests = true;
    this.combinedTestService.getAllTests().subscribe((data: CombinedTestModel[]) => {
      this.tests = data;
      this.isFetchingTests = false;
    });
  }

  public onAddButtonClicked(testId: string): void {
    const dialogRef = this.matDialog.open(LinkTestToCombinedTestComponent, this.matDialogConfig);
    dialogRef.afterClosed().subscribe((data) => {
      if (data[0] === 'save') {
        const Payload = data[1].map((individualtest) => {
          return {
            combineTestId: testId,
            individualTestId: individualtest.individualTestId,
            ActiveStatus: 1,
          };
        });
        this.combinedTestService.addIndividualTestsToCombineTest(Payload).subscribe((recievedData) => {
          this.getAllCombinedTest();
        });
      }
    });
  }
  public onEditTestClicked(test: any): void {
    this.matDialogConfig.data = test;
    this.matDialog
      .open(EditCombinedTestComponent, this.matDialogConfig)
      .afterClosed()
      .pipe(take(1))
      .subscribe(() => {
        this.getAllCombinedTest();
      });
  }

  public onDeleteCombinedTestClicked(combinedTestId: string): void {
    this.combinedTestService.deleteCombinedTest(combinedTestId).subscribe(() => {
      this.getAllCombinedTest();
    });
  }

  public onShowListViewButtonClicked(): void {
    this._router.navigate([], { queryParams: { view: DISPLAY_MODE.LIST } });
  }

  public onShowTableViewButtonClicked(): void {
    this._router.navigate([], { queryParams: { view: DISPLAY_MODE.TABLE } });
  }

  public onDeleteTestClicked(testId: string): void {}
}
