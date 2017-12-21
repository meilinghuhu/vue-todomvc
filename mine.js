;(function(){
  const template = 
     `
      <div>
      <section class="todoapp">
      <todo-header></todo-header>
      <todo-list></todo-list>
      <todo-footer></todo-footer>
      </section>
      <app-footer></app-footer>
      </div>
    `
   
  
  window.app= {
    template,
    components: {
      todoHeader,
      todoList,
      todoFooter,
      appFooter
    }
    

  }

})()

