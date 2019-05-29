import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TacheViewComponent } from './tache-view.component';

describe('TacheViewComponent', () => {
  let component: TacheViewComponent;
  let fixture: ComponentFixture<TacheViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TacheViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TacheViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
