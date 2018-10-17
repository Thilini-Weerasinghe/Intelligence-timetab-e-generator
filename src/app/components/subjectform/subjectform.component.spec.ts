import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubjectformComponent } from './subjectform.component';

describe('SubjectformComponent', () => {
  let component: SubjectformComponent;
  let fixture: ComponentFixture<SubjectformComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubjectformComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubjectformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
