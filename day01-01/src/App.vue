<script>
export default {
  data() {
    return {
      display: '', // 출력되는 값
      current: '', // 지금 입력 중인 숫자
      prev: null, // 이전 숫자
      operator: null, // 연산자
    };
  },
  methods: {
    // 숫자 입력
    inputNum(num) {
      this.current += num;
      this.display = this.current;
    },

    // 소수점 입력
    inputDot() {
      if (this.current.includes('.')) return;
      this.current += this.current ? '.' : '0.';
      this.display = this.current;
    },

    // 기호 입력
    inputOp(op) {
      if (this.current === '') return;

      this.prev = Number(this.current);
      this.current = '';
      this.operator = op;
      this.display = '';
    },

    // =
    calculate() {
      if (this.prev === null || this.current === '' || !this.operator) return;

      const a = this.prev;
      const b = Number(this.current);
      let result = 0;

      if (this.operator === '+') result = a + b;
      else if (this.operator === '-') result = a - b;
      else if (this.operator === '*') result = a * b;
      else if (this.operator === '/') result = a / b;

      this.display = result.toString();

      // 결과를 다음 입력과 연결할 수 있게 설정
      this.prev = result;
      this.current = result.toString();
      this.operator = null;
    },

    // Clear
    clear() {
      this.display = '';
      this.current = '';
      this.prev = null;
      this.operator = null;
    },
  },
};
</script>

<template>
  <div class="calc-container">
    <div class="display">{{ display || 0 }}</div>

    <div class="btn c" @click="clear">C</div>
    <div class="btn op" @click="inputOp('/')">/</div>

    <div class="btn num" @click="inputNum('1')">1</div>
    <div class="btn num" @click="inputNum('2')">2</div>
    <div class="btn num" @click="inputNum('3')">3</div>
    <div class="btn op" @click="inputOp('*')">*</div>

    <div class="btn num" @click="inputNum('4')">4</div>
    <div class="btn num" @click="inputNum('5')">5</div>
    <div class="btn num" @click="inputNum('6')">6</div>
    <div class="btn op" @click="inputOp('+')">+</div>

    <div class="btn num" @click="inputNum('7')">7</div>
    <div class="btn num" @click="inputNum('8')">8</div>
    <div class="btn num" @click="inputNum('9')">9</div>
    <div class="btn op" @click="inputOp('-')">-</div>

    <div class="btn dot" @click="inputDot">.</div>
    <div class="btn num" @click="inputNum('0')">0</div>
    <div class="btn equal" @click="calculate">=</div>
  </div>
</template>

<style scoped>
.calc-container {
  width: 260px;
  background: #eee;
  border: 4px solid #999;
  padding: 10px;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 6px;
}

.display {
  grid-column: span 4;
  background: white;
  height: 60px;
  font-size: 28px;
  padding: 10px;
  text-align: right;
  border: 2px solid #aaa;
}

.btn {
  border: 2px solid #666;
  height: 55px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 22px;
  cursor: pointer;
}

.num {
  background: white;
}

.op {
  background: #e8a630;
}

.c {
  grid-column: span 3;
  background: #d9534f;
  color: white;
}

.equal {
  grid-column: span 2;
  background: #e8a630;
}

.dot {
  background: #2e7d32;
  color: white;
}
</style>
