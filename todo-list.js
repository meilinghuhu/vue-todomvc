;(function(){
  const template = 
     `
    <!-- This section should be hidden by default and shown when there are todos -->
    <section class="main">
     <input id="toggle-all" class="toggle-all" type="checkbox">
     <label for="toggle-all">Mark all as complete</label>
<ul class="todo-list">
<!-- These are here just to show the structure of the list items -->
<li class="completed">
<div class="view">
 <input class="toggle" type="checkbox" checked>
 <label>Taste JavaScript</label>
 <button class="destroy"></button>
</div>
<input class="edit" value="Create a TodoMVC template">
</li>
<li>
<div class="view">
 <input class="toggle" type="checkbox">
 <label>Buy a unicorn</label>
 <button class="destroy"></button>
</div>
<input class="edit" value="Rule the web">
</li>
</ul>
</section>
    `
  

  window.todoList={
    template
  }
})()