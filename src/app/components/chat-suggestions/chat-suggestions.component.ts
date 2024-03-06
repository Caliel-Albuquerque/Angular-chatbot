import { Component } from '@angular/core';
import { IconDoubtComponent } from '../../icons/icon-doubt/icon-doubt.component';
import { IconSearchComponent } from '../../icons/icon-search/icon-search.component';
import { IconHistoryComponent } from '../../icons/icon-history/icon-history.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-chat-suggestions',
  standalone: true,
  imports: [
    IconDoubtComponent,
    IconSearchComponent,
    IconHistoryComponent,
    CommonModule

  ],
  templateUrl: './chat-suggestions.component.html',
  styleUrl: './chat-suggestions.component.scss'
})
export class ChatSuggestionsComponent {

  initialQuestions = [
    {
      title: "Dúvidas",
      icon: "doubt",
      questions: [
        "Qual o valor para entrar no museu?",
        "Quando o museu está aberto?"
      ]
    },
    {
      title: "Curiosidades",
      icon: "search",
      questions: [
        "Quem era o prefeito na época da criação?",
        "Quantos cômodos existem no museu?",
        "Quantas peças estão exibidas no museu?"
      ]
    },
    {
      title: "História",
      icon: "history",
      questions: [
        "Quando o Museu foi criado?",
        "Qual o estilo arquitetônico do prédio?",
        "Quem foi o arquiteto do prédio?"
      ]
    }
  ]

  trackByFn(index: any, item: any): any {
    return item.id;
  }

  trackByQuestionFn(index: any, question: any): any {
    return question; 
  }
}
