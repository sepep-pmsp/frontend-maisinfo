import { Component, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-search-btn',
  standalone: true,
  imports: [],
  templateUrl: './search-btn.component.html',
  styleUrl: './search-btn.component.css'
})
export class SearchBtnComponent implements AfterViewInit {
  anyChecked = false;

  ngAfterViewInit(): void {
    this.initializeEventListeners();
  }

  private initializeEventListeners(): void {
    const checkboxes = document.querySelectorAll('.list-itens input[type="checkbox"]');
    const searchField = document.getElementById('searchField') as HTMLInputElement;
    const searchButton = document.getElementById('searchButton') as HTMLButtonElement;

    checkboxes.forEach(checkbox => {
      checkbox.addEventListener('change', () => {
        this.anyChecked = Array.from(checkboxes).some(cb => (cb as HTMLInputElement).checked);
        if (this.anyChecked) {
          searchField.style.display = 'none';
          searchButton.style.display = 'block';
        } else {
          searchField.style.display = 'block';
          searchButton.style.display = 'none';
        }
      });
    });

    searchButton.addEventListener('click', () => {
      const selectedItems = Array.from(checkboxes)
        .filter(cb => (cb as HTMLInputElement).checked)
        .map(cb => (cb as HTMLInputElement).value);
      alert('Pesquisar itens selecionados: ' + selectedItems.join('/'));
      window.location.href = '/';
    });
  }
}
