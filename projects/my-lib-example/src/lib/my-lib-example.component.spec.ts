import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyLibExampleComponent } from './my-lib-example.component';

describe('MyLibExampleComponent', () => {
  let component: MyLibExampleComponent;
  let fixture: ComponentFixture<MyLibExampleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MyLibExampleComponent]
    });
    fixture = TestBed.createComponent(MyLibExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
