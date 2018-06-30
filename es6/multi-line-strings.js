// ========== Multi-line strings ==========

// ---------- ES5 ----------

var template = '<li *ngFor="let todo of todos" [ngClass]="{completed: todo.isDone}" >\n' +
  '  <div class="view">\n' +
  '    <input class="toggle" type="checkbox" [checked]="todo.isDone">\n' +
  '    <label></label>\n' +
  '    <button class="destroy"></button>\n' +
  '  </div>\n' +
  '  <input class="edit" value="">\n' +
  '</li>';
console.log(template);

// ---------- ES6 ----------

// Use ` to create multi-line string instead of concat of several strings with '\n'.

const template = `<li *ngFor="let todo of todos" [ngClass]="{completed: todo.isDone}" >
  <div class="view">
    <input class="toggle" type="checkbox" [checked]="todo.isDone">
    <label></label>
    <button class="destroy"></button>
  </div>
  <input class="edit" value="">
</li>`;
console.log(template);