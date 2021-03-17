const app = new Vue({
  el: '#app',
  data: {
    //textbox
    textBox:"",
    //server side
    serverSide:"",
    //count the char
    count:0,
    //log the status from the server side
    status:"",
    url:"",
    id:"",
    diff:false,
    showDiff:false
  },
  watch:{
    //watch the userInput 
    textBox: function(){
      //count the length
      this.count = this.textBox.length;
      //do the push data to server side
      this.pushData();
    }
  },
  created : function(){
    //update the data from the server
    this.autoUpdate();
    this.changeShowDiff();
  },
  mounted : function(){
    //get the note id from the URL
      this.getId();
    //get the data from the server
      this.firstGetData();
      
  },
  methods:{
    firstGetData:function(){
      axios.get('http://47.241.127.18/api/get.php?id='+ this.id)
      .then(response => this.textBox = response.data)
      .catch(error => console.log(error));
    },
    //get the original data from the server side
    getData:function(){
      axios.get('http://47.241.127.18/api/get.php?id='+ this.id)
      .then(response => this.serverSide = response.data)
      .catch(error => console.log(error));
    },
    sync:function(){
      this.textBox = this.serverSide;
    },
    //push the data to server side
    pushData:function(){
        var params = new URLSearchParams();
        params.append('id', this.id);
        params.append('value', this.textBox);
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
    },
    update:function(){
      this.getData();
      if(this.textBox == this.serverSide){
        this.diff = false;
      }else{
        this.diff = true;
      }
      // console.log(this.diff);
    },

    //automatic get update
    autoUpdate:function(){
      setInterval(() => { this.update() }, 100);
    },
    changeShowDiff:function(){
      function check(){
        let count = 0;
        for(let i=0;i<300;i++){
          if(this.diff == true){
            count++;
            console.log(count)
          }
        }
        if(count == 300){
          this.showDiff = true;
        }
      }
      setInterval(() => { check() }, 100);
    }
  }
   
})