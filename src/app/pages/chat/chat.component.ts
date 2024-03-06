import { Component } from '@angular/core';
import { ArrowLeftComponent } from '../../icons/arrow-left/arrow-left.component';
import { Router } from '@angular/router';
import { ChatSuggestionsComponent } from '../../components/chat-suggestions/chat-suggestions.component';


@Component({
  selector: 'app-chat',
  standalone: true,
  imports: [
    ArrowLeftComponent,
    ChatSuggestionsComponent
  ],
  templateUrl: './chat.component.html',
  styleUrl: './chat.component.scss'
})
export class ChatComponent {

  constructor(private route: Router) {}

  closeChat() {
    this.route.navigate([""])
  }
}
