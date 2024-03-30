import { Component, Output, EventEmitter } from '@angular/core';
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
  @Output() questionSelected = new EventEmitter<string>();

  initialQuestions = [
    {
      title: "Dúvidas",
      icon: "doubt",
      questions: [
        "Qual o valor para entrar na paço?",
        "Quando o paço está aberto?"
      ]
    },
    {
      title: "Curiosidades",
      icon: "search",
      questions: [
        "Quem era o prefeito na época da criação?",
        "Quantos cômodos existem no paço?",
        "Quantas peças estão exibidas no paço?"
      ]
    },
    {
      title: "História",
      icon: "history",
      questions: [
        "Quando o paço foi criada?",
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

  selectQuestion(question: string) {
    this.questionSelected.emit(question);
  }
}
