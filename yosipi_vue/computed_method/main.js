new Vue({
  el: '#app',
  data: {
    counter: 0,
    otherCounter: 0,
  },
  computed: {
    lessThan3Computed: function(){
      return this.counter < 3 ? '3より下' : '3より上だよ'
    },
  },
  methods: {
    lessThan3Method: function() {
      return this.counter > 3 ? '3より上' : '3以下'
    },
  },
});