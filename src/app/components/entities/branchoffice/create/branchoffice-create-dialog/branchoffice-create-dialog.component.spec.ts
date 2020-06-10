import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BranchofficeCreateDialogComponent } from './branchoffice-create-dialog.component';

describe('BranchofficeCreateDialogComponent', () => {
  let component: BranchofficeCreateDialogComponent;
  let fixture: ComponentFixture<BranchofficeCreateDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BranchofficeCreateDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BranchofficeCreateDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
