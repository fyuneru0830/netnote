const app = new Vue({
  el: '#app',
  data: {
    //textbox
    userInput:"",
    //count the char
    count:0,
    //log the status from the server side
    status:""
  },
  watch:{
    //watch the userInput 
    userInput: function(){
      //count the length
      this.count = this.userInput.length;
      //do the push data
      this.pushData();
    }
  },
  mounted : function(){
      this.getData();
  },
  methods:{
    //get the original data from the server side
    getData:function(){
      axios.get('http://47.241.127.18/get.php')
      .then(response => this.userInput = response.data)
      .catch(error => console.log(error));

    },
    //push the data to server side
    pushData:function(){
        axios.get('http://47.241.127.18/save.php?value=' + this.userInput)
          .then(response => this.status = response.data)
          .catch(error => console.log(error));
    }
  }
   
})