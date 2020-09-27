import {Component, ElementRef, HostListener, Input, ViewChild} from '@angular/core';


@Component({
  selector: 'app-filter-input',
  templateUrl: './filter-input.component.pug',
  styleUrls: ['./filter-input.component.sass']
})
export class FilterInputComponent {

  @Input() name;
  visible;
  inputWord = '';
  @Input() List: string[];
  sortList: string[] = [];
  current;
  constructor(private elemRef: ElementRef) {
    console.log(this.name);
  }

  acceptFilter = (event) => {
    this.name = event.target.innerText;
    this.inputWord = event.target.innerText;
    this.visibleMenu();
  }

  visibleMenu() {
    this.current = -1;
    this.visible = !this.visible;
    this. sortList = this.List;
    this.inputWord = '';
    setTimeout(() => {
      this.elemRef.nativeElement.getElementsByTagName('input')[0].focus();
    }, 0);

  }

  @HostListener('window: click', ['$event'])
  closeFilter(event) {
   const elem = event.target;
   const sortMenu = elem.classList.contains('filterInput');
   const btn = elem.classList.contains('btn');
   if (!btn && !sortMenu) {
     this.visible = false;
     console.log('1');
   }
  }

  autoComplete = (event) => {
    this.sortList = [];
    console.log(this.inputWord.length);
    if (this.inputWord.length !== 0) {
      for (let i = 0; i < this.inputWord.length; i++) {
        for (let cat = 0; cat < this.List.length; cat++) {
          if (this.List[cat].slice(0, i + 1).toUpperCase() === this.inputWord.toUpperCase()) {
            // this.Categories[cat].slice(0, i + 1) === this.category.toUpperCase() ||
            // this.Categories[cat].slice(0, i + 1) === this.category.toLowerCase())
            this.sortList.push(this.List[cat]);
          }
        }
      }
    } else {
      this.sortList = this.List;
    }
  }

  addMouseHighlight(event) {
    this.removeActive();
    event.target.classList.add('autocomplete-active');
    const ul = this.elemRef.nativeElement.getElementsByTagName('li');
    for (let li = 0; li < ul.length; li++) {
      if (ul[li].className === 'autocomplete-active') {
        this.current = li;
      }
    }
  }

  removeMouseHighlight() {
    this.removeActive();
    this.current = -1;
  }

  arrowsNavigation = (event) => {
    const ul = this.elemRef.nativeElement.getElementsByTagName('li');
    if (event.key === 'ArrowDown') {
      this.removeActive();
      this.current++;
      if (this.current >= ul.length) { this.current = 0; }
      ul[this.current].classList.add('autocomplete-active');
    }
    if (event.key === 'ArrowUp') {
      this.removeActive();
      this.current--;
      if (this.current < 0) { this.current = ul.length - 1; }
      ul[this.current].classList.add('autocomplete-active');
    }
    if (event.key === 'Enter') {
      event.preventDefault();
      const activeLi = this.elemRef.nativeElement.getElementsByClassName('autocomplete-active')[0];
      this.name = activeLi.textContent;
      this.inputWord = activeLi.textContent;
      this.visibleMenu();
    }

  }

  removeActive() {
    const ul = this.elemRef.nativeElement.getElementsByTagName('li');
    for (const li of ul ) {
      li.classList.remove('autocomplete-active');
    }
  }

}

