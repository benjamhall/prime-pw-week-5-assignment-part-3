console.log('***** Music Collection *****')

let collection =[];


function addCollection (album){      // Function to add album to the collection
  console.log('in addCollection:', album);
  collection.push(album);
  console.log('album has been added');
  return true;
}
console.log('addCollection works');

let album1 = {
    title: 'The Beatles',
    artist: 'The Beatles',
    yearPublished: 1968,
  };
console.log('The Beatles album:', album1);

let album2 = {
    title: ''
    artist: ''
}
