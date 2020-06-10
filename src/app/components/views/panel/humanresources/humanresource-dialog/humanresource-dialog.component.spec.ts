import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HumanresourceDialogComponent } from './humanresource-dialog.component';

describe('HumanresourceDialogComponent', () => {
  let component: HumanresourceDialogComponent;
  let fixture: ComponentFixture<HumanresourceDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HumanresourceDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HumanresourceDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
