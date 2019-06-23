import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShopingcarComponent } from './shopingcar.component';

describe('ShopingcarComponent', () => {
  let component: ShopingcarComponent;
  let fixture: ComponentFixture<ShopingcarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShopingcarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShopingcarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
