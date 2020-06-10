import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InfomachineryComponent } from './infomachinery.component';

describe('InfomachineryComponent', () => {
  let component: InfomachineryComponent;
  let fixture: ComponentFixture<InfomachineryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InfomachineryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InfomachineryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
