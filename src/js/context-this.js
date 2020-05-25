(function() {
  var Person = {
    init: function() {
      this.form = $("#form");
      this.bindEvents();
    },

    bindEvents: function() {
      // 'this.showName' losing context
      // this.form.on('submit', this.showName);
      this.form.on("submit", $.proxy(this.showName, this));
    },

    showName: function(event) {
      event.preventDefault();

      alert(this.form.find("input[type=text]").val());
    }
  };

  Person.init();
})();
