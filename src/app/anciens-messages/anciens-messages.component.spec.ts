import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnciensMessagesComponent } from './anciens-messages.component';

describe('AnciensMessagesComponent', () => {
  let component: AnciensMessagesComponent;
  let fixture: ComponentFixture<AnciensMessagesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnciensMessagesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AnciensMessagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
