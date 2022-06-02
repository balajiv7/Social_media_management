import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignupuserviewComponent } from './signupuserview.component';

describe('SignupuserviewComponent', () => {
  let component: SignupuserviewComponent;
  let fixture: ComponentFixture<SignupuserviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SignupuserviewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SignupuserviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
