<script>
export default {
  data() {
    return {
      output: null,
      prev: null,
      cur: null,
      operator: null,
      operatorActions: {
        '+': (a, b) => a + b,
        '-': (a, b) => a - b,
        '*': (a, b) => a * b,
        '/': (a, b) => a / b,
      },
    };
  },

  methods: {
    clear() {
      this.output = null;
      this.cur = null;
      this.prev = null;
      this.operator = null;
    },
    calculator(n) {
      if (!this.cur && !this.prev) {
        alert('숫자를 먼저 입력하세요.');
        return;
      }
      if (this.operator !== '' && !this.cur) {
        alert('사칙연산 기호를 연속해서 누를 수 없습니다.');
        return;
      }
      if (n === '=' && this.prev === this.cur) {
        return;
      }
      this.cur = Number(this.cur);
      if (this.operator !== null) {
        this.prev = this.operatorActions[this.operator](this.cur, this.prev);
        if (n === '=') {
          this.output = this.prev;
          this.operator = null;
          this.cur = this.prev;
        } else {
          this.output = null;
          this.operator = n;
          this.cur = null;
        }
      } else {
        this.output = null;
        this.operator = n;
        this.prev = this.cur;
        this.cur = null;
      }
    },
  },
};
</script>
