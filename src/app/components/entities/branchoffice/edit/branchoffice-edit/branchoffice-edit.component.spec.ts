import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BranchofficeEditComponent } from './branchoffice-edit.component';

describe('BranchofficeEditComponent', () => {
  let component: BranchofficeEditComponent;
  let fixture: ComponentFixture<BranchofficeEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BranchofficeEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BranchofficeEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
