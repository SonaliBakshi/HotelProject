import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BoookformComponent } from './boookform.component';

describe('BoookformComponent', () => {
  let component: BoookformComponent;
  let fixture: ComponentFixture<BoookformComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BoookformComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BoookformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
