import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SortingNavComponent } from './sorting-nav.component';

describe('SortingNavComponent', () => {
  let component: SortingNavComponent;
  let fixture: ComponentFixture<SortingNavComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SortingNavComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SortingNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
