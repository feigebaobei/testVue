<template>
  <div class="formdiv">
    <input type="text" v-model="message0" placeholder="edit me">
    <p>message is: {{message0}}</p>
    <hr>
    <span>Multiline message is:</span>
    <p>{{message1}}</p>
    <textarea name="" id="" cols="30" rows="10" v-model="message1"></textarea>
    <hr>
    <input type="checkbox" id="checkbox" v-model="checked0">
    <label for="checkbox">{{checked0}}</label>
    <hr>
    <input type="checkbox" value="jack" id="jack" v-model="checkedNames">
    <label for="jack">jack</label>
    <input type="checkbox" value="john" id="john" v-model="checkedNames">
    <label for="john">john</label>
    <input type="checkbox" value="mike" id="mike" v-model="checkedNames">
    <label for="mike">mike</label>
    <p>checked names: {{checkedNames}}</p>
    <hr>
    <input type="radio" id="one" value="one" v-model="picked">
    <label for="one">one</label>
    <input type="radio" id="two" value="two" v-model="picked">
    <label for="two">two</label>
    <p>picked:{{picked}}</p>
    <hr>
    <select name="" id="" v-model="selected">
      <option value="" disabled="">请选择</option>
      <option value="A">A</option>
      <option value="B">B</option>
      <option value="C">C</option>
    </select>
    <p>selected: {{selected}}</p>
    <hr>
    <select name="" id="" v-model="selected1" multiple="">
      <option value="a">a</option>
      <option value="b">b</option>
      <option value="c">c</option>
    </select>
    <p>selected: {{selected1}}</p>
    <hr>
    <select name="" id="" v-model="selected2">
      <option v-for="option in options" :value="option.value">{{option.text}}</option>
    </select>
    <p>selected: {{selected2}}</p>
    <hr>
    <h2>值绑定</h2>
    <p>对于单选按钮，复选框及选择框的选项，v-model绑定的值通常是静态字符串。复选框也可以绑定布尔值。</p>
    <input type="radio" v-model="picked1" value="这是单选的值">
    <span>{{picked1}}</span>
    <input type="checkbox" v-model="toggle">
    <span>{{toggle}}</span>
    <select v-model="selected3">
      <option value="abc">abc</option>
      <option value="def">def</option>
      <option value="ghi">ghi</option>
    </select>
    <span>{{selected3}}</span>
    <hr>
    <input type="checkbox" v-model="toggle1" true-value="yes" false-value="no">
    <span>{{toggle1}}</span>
    <select name="" id="" v-model="selected4">
      <option :value="{ number: 123 }">123</option>
      <option :value="{ number: 456 }">456</option>
      <option :value="{ number: 789 }">789</option>
    </select>
    <span>{{selected4}}</span>
    <hr>
    <h2>修饰符</h2>
    <input type="text" v-model.lazy="message2">
    <p>{{message2}}</p>
    <hr>
    <input type="number" v-model.number="age">
    <p>{{age}}</p>
    <input type="text" v-model.trim="message3">
    <p>{{message3}}</p>
  </div>
</template>

<script>
  export default {
    data: function () {
      return {
        message0: '',
        message1: '',
        checked0: false,
        checkedNames: [],
        picked: '',
        selected: '',
        selected1: [],
        selected2: '',
        options: [
          { text: 'one', value: 1 },
          { text: 'two', value: 2 },
          { text: 'three', value: 3 }
        ],
        picked1: '',
        toggle: false,
        selected3: [],
        toggle1: 'yes',
        selected4: [],
        message2: '',
        age: '',
        message3: ''
      }
    }
  }
</script>