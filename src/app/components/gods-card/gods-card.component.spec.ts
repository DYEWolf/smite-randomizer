import { ComponentFixture, TestBed } from '@angular/core/testing';
import { GodsCardComponent } from './gods-card.component';

describe('GodsCardComponent', () => {
  let component: GodsCardComponent;
  let fixture: ComponentFixture<GodsCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GodsCardComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(GodsCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
