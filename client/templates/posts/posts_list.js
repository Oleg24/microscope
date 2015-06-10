var postsData = [ {
    title: 'Introducing Telescope',
    url: 'http://sachagreif.com/introducing-telescope/',
    author: 'Oleg Yanchinskiy'
  },
  {
    title: 'Meteor',
    url: 'http://meteor.com',
    author: 'Peter Shamatasra'
  }, 
  {
    title: 'The Meteor Book',
    url: 'http://themeteorbook.com',
    author: 'Joseph Shmosef'
  }
];

Template.postsList.helpers({
  posts: postsData
});