import { Component } from '@angular/core';
import { ArrowLeftComponent } from '../../icons/arrow-left/arrow-left.component';
import { Router } from '@angular/router';
import { ChatSuggestionsComponent } from '../../components/chat-suggestions/chat-suggestions.component';
import { CommonModule } from '@angular/common';
import { Message } from '../../types/message.type';
import { ChatDialogComponent } from '../../components/chat-dialog/chat-dialog.component';


@Component({
  selector: 'app-chat',
  standalone: true,
  imports: [
    ArrowLeftComponent,
    ChatSuggestionsComponent,
    CommonModule,
    ChatDialogComponent
  ],
  templateUrl: './chat.component.html',
  styleUrl: './chat.component.scss'
})
export class ChatComponent {

  constructor(private route: Router) {}

  closeChat() {
    this.route.navigate([""])
  }

  questions: Array<Message> = []

  sendSuggestedQuestion(question: string) {
    this.questions.push({
      type: 'request',
      message: question
    })
  }
}
