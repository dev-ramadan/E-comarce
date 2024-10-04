import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProdcutDetilsComponent } from './prodcut-detils.component';

describe('ProdcutDetilsComponent', () => {
  let component: ProdcutDetilsComponent;
  let fixture: ComponentFixture<ProdcutDetilsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProdcutDetilsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProdcutDetilsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
