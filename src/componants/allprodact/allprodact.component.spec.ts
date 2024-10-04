import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllprodactComponent } from './allprodact.component';

describe('AllprodactComponent', () => {
  let component: AllprodactComponent;
  let fixture: ComponentFixture<AllprodactComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AllprodactComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AllprodactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
