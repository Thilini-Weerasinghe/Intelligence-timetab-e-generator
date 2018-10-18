import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LecturerformComponent } from './lecturerform.component';

describe('LecturerformComponent', () => {
  let component: LecturerformComponent;
  let fixture: ComponentFixture<LecturerformComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LecturerformComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LecturerformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
