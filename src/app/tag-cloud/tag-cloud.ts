import { Component, NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule, NgFor } from '@angular/common';
import{ signal } from '@angular/core';

@Component({
  selector: 'app-tag-cloud',
  standalone: true,
  imports: [FormsModule,NgFor ,CommonModule],
  templateUrl: './tag-cloud.html',
  styleUrls: ['./tag-cloud.css'],
})
export class TagCloudComponent {


  searchText = '';
  sortAsc_tagName = false;
  sortAsc_bookmarks = false;
  sortAsc_description = false;

  toggle_sort= false;

  tags = [
    {
      name: 'Angular',
      bookmarks: 3789,
      description: 'A TypeScript-based web application framework for building single-page applications',
      related: ['TypeScript', 'Frontend', 'SPA']
    },
    {
      name: 'Node.js',
      bookmarks: 2345,
      description: "A JavaScript runtime built on Chrome's V8 JavaScript engine",
      related: ['JavaScript', 'Backend', 'Server']
    },
    {
      name: 'Python',
      bookmarks: 3456,
      description: 'A high-level programming language known for its readability and versatility',
      related: ['Programming', 'Data Science', 'Machine Learning']
    },
    {
      name: 'React',
      bookmarks: 1234,
      description: 'A JavaScript library for building user interfaces',
      related: ['JavaScript', 'Frontend', 'UI']
    },
    {
      name: 'Ruby on Rails',
      bookmarks: 2678,
      description: 'A server-side web application framework written in Ruby',
      related: ['Ruby', 'Backend', 'Web Development']
    },
    {
      name: 'Vue.js',
      bookmarks: 1567,
      description: 'A progressive JavaScript framework for building user interfaces',
      related: ['JavaScript', 'Frontend', 'UI']
    }
  ];

  get filteredTags() {
   return  this.tags
      .filter(tag =>
        tag.name.toLowerCase().includes(this.searchText.toLowerCase())
      )
      .sort((a, b) =>
        this.sortAsc_tagName
          ? a.name.localeCompare(b.name)
          : b.name.localeCompare(a.name)
      );
  }

  toggleSort_tagName() {
    this.sortAsc_tagName = !this.sortAsc_tagName;
  }

  editTag(tag: any) {
    alert(`Edit ${tag.name}`);
  }

  deleteTag(tag: any) {
    alert(`Delete ${tag.name}`);
  }

  toggleSort() {
this.toggle_sort = !this.toggle_sort;
}

sortByTagName() {
  this.sortAsc_tagName = !this.sortAsc_tagName;
  this.sortAsc_description = false;
  this.sortAsc_bookmarks = false;
  this.toggle_sort = false;
this.tags.sort((a, b) =>
  this.sortAsc_tagName
    ? a.name.localeCompare(b.name)
    : b.name.localeCompare(a.name)
);
}

sortByBookmarks() {
  this.sortAsc_bookmarks = !this.sortAsc_bookmarks;
  this.toggle_sort = false;
  this.sortAsc_tagName = false;
    this.sortAsc_description = false;
this.tags.sort((a, b) =>
  this.sortAsc_bookmarks
    ? a.bookmarks - b.bookmarks
    : b.bookmarks - a.bookmarks
);
}

sortByDescription() {
  this.sortAsc_description = !this.sortAsc_description;
  this.toggle_sort = false;
  this.sortAsc_tagName = false;
  this.sortAsc_bookmarks = false;
this.tags.sort((a, b) =>
  this.sortAsc_description
    ? a.description.localeCompare(b.description)
    : b.description.localeCompare(a.description)
);
}

}
