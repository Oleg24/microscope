Template.postItem.helpers({
  domain: function(){
    var a = document.createElement('a');
    a.href = this.url;
    console.log('this', this);
    return a.hostname;
  },
  firstName: function(){
    var name = this.author.split(' ')[1];
    return name;
  }
});