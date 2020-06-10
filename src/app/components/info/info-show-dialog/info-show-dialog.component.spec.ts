import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoShowDialogComponent } from './info-show-dialog.component';

describe('InfoShowDialogComponent', () => {
  let component: InfoShowDialogComponent;
  let fixture: ComponentFixture<InfoShowDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InfoShowDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InfoShowDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
