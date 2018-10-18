import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LecturehallformComponent } from './lecturehallform.component';

describe('LecturehallformComponent', () => {
  let component: LecturehallformComponent;
  let fixture: ComponentFixture<LecturehallformComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LecturehallformComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LecturehallformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
