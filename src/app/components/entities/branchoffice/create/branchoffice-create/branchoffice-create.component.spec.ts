import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BranchofficeCreateComponent } from './branchoffice-create.component';

describe('BranchofficeCreateComponent', () => {
  let component: BranchofficeCreateComponent;
  let fixture: ComponentFixture<BranchofficeCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BranchofficeCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BranchofficeCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
