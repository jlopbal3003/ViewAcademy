import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChatPdfComponent } from './chat-pdf.component';

describe('ChatPdfComponent', () => {
  let component: ChatPdfComponent;
  let fixture: ComponentFixture<ChatPdfComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ChatPdfComponent]
    });
    fixture = TestBed.createComponent(ChatPdfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
