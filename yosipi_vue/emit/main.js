const component = {
  props: ['totalNumber'],
  template: `
    <div>
      <button>押すと２増える</button>
    </div>
  `,
  methods: {
    increment() {
      this.$emit("my-click", this.totalNumber + 2);
    }
  }
};


new Vue({
  el: '#app',
  data : {
    number: 10
  },
  methods: {
    incrementNumber(value) {
      this.number = value;
    },
  },
  components: {
    'component': component,
  }
});