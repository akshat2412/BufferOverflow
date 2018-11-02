import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TagboxComponent } from './tagbox.component';

describe('TagboxComponent', () => {
  let component: TagboxComponent;
  let fixture: ComponentFixture<TagboxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TagboxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TagboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
