import {Injectable} from '@angular/core';

export interface IWord {
  key: string;
  meaning: string;
}

@Injectable({
  providedIn: 'root'
})
export class DictionaryService {
  private words: IWord[] = [
    {
      key: 'service',
      meaning: 'dịch vụ'
    }, {
      key: 'sport',
      meaning: 'the duc the thao'
    }, {
      key: 'banana',
      meaning: 'chuoi'
    }, {
      key: 'mango',
      meaning: 'xoai'
    }, {
      key: 'hastalavista',
      meaning: 'hasta la vista, baby'
    }
  ];

  constructor() {
  }

  search(word: string): string {
    if (!word) {
      return '';
    }
    const w = this.words.find(item => item.key === word.toLowerCase());
    if (w) {
      return w.meaning;
    }
    return 'Not found';
  }

  getAll(): IWord[] {
    return this.words;
  }
}
