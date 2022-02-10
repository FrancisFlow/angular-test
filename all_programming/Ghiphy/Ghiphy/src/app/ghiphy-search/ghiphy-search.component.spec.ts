import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GhiphySearchComponent } from './ghiphy-search.component';

describe('GhiphySearchComponent', () => {
  let component: GhiphySearchComponent;
  let fixture: ComponentFixture<GhiphySearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GhiphySearchComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GhiphySearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
