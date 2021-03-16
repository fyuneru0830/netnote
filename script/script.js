const app = new Vue({
  el: '#app',
  data: {
    //textbox
    userInput:"",
    //count the char
    count:0,
    //log the status from the server side
    status:"",
    url:"",
    id:""
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
      this.getId();
      this.getData();
  },
  methods:{
    //get the original data from the server side
    getData:function(){
      axios.get('http://47.241.127.18/api/get.php?id='+ this.id)
      .then(response => this.userInput = response.data)
      .catch(error => console.log(error));

    },
    //push the data to server side
    pushData:function(){
        var params = new URLSearchParams();
        params.append('id', this.id);
        params.append('value', this.userInput);
        const res = axios.post('http://47.241.127.18/api/save.php', params);
        // axios.get('http://47.241.127.18/api/save.php?id='+ this.id +'&value=' + this.userInput)
        //   .then(response => this.status = response.data)
        //   .catch(error => console.log(error));
    },
    //get url
    getUrl:function(){
      this.url =  decodeURI(location.href);
    },
    //get id from url
    getId:function(){
      this.getUrl();
      const idArray = this.url.split('/');
      this.id = idArray[idArray.length - 1];
    }
  }
   
})