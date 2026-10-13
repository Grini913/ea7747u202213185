import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Newoutdoor } from './newoutdoor';

describe('Newoutdoor', () => {
  let component: Newoutdoor;
  let fixture: ComponentFixture<Newoutdoor>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Newoutdoor],
    }).compileComponents();

    fixture = TestBed.createComponent(Newoutdoor);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
