import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiferenciaisComponent } from './diferenciais.component';

describe('DiferenciaisComponent', () => {
  let component: DiferenciaisComponent;
  let fixture: ComponentFixture<DiferenciaisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DiferenciaisComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DiferenciaisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
