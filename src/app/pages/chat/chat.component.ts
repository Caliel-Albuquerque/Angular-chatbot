import { Component } from '@angular/core';
import { ArrowLeftComponent } from '../../icons/arrow-left/arrow-left.component';
import { Router } from '@angular/router';
import { ChatSuggestionsComponent } from '../../components/chat-suggestions/chat-suggestions.component';
import { CommonModule } from '@angular/common';
import { Message } from '../../types/message.type';
import { ChatDialogComponent } from '../../components/chat-dialog/chat-dialog.component';
import { MessageService } from '../../services/message.service';



@Component({
  selector: 'app-chat',
  standalone: true,
  imports: [
    ArrowLeftComponent,
    ChatSuggestionsComponent,
    CommonModule,
    ChatDialogComponent
  ],
  providers: [

    MessageService
  ],
  templateUrl: './chat.component.html',
  styleUrl: './chat.component.scss'
})
export class ChatComponent {

  constructor(private route: Router, private service: MessageService) {}

  closeChat() {
    this.route.navigate([""])
  }

  questions: Array<Message> = JSON.parse(localStorage.getItem("messages") ?? "[]")

  updateLocalStorage() {
    localStorage.setItem("message", JSON.stringify(this.questions))
  }

  sendSuggestedQuestion(question: string) {
    this.questions.push({
      type: 'request',
      message: question
    })

    this.updateLocalStorage();
    this.sendMessage(question);
  }

  sendMessage(message: string) {
    this.service.sendData(message).subscribe({
      next:(body) => {
        this.questions.push({
          type: 'response',
          message: body.response
        })
        this.updateLocalStorage();
      }
    })
  }
}
