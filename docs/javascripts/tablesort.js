document$.subscribe(function() {
  var tables = document.querySelectorAll('#sortable-table')
  tables.forEach(function(table) {
    new Tablesort(table)
  })
})