import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieCouroselComponent } from './movie-courosel.component';

describe('MovieCouroselComponent', () => {
  let component: MovieCouroselComponent;
  let fixture: ComponentFixture<MovieCouroselComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MovieCouroselComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MovieCouroselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
