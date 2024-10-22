import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SucsesseComponent } from './sucsesse.component';

describe('SucsesseComponent', () => {
  let component: SucsesseComponent;
  let fixture: ComponentFixture<SucsesseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SucsesseComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SucsesseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
