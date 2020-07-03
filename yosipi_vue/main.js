new Vue({
  el: '#app',
  data: {
    number: 0,
    event: 'click',
    message: 'こんにちは',
    counter: 0,
  },
  methods: {
    countUp: function() {
      this.number += 1
    },
  },
  computed: {
    ltt: function(){
      return this.counter < 4 ? '３より下' : '3より上だよ'
    }
  }
});