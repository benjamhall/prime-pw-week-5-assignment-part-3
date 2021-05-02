console.log('***** Music Collection *****');

let collection =[];


function addCollection (album){      // Function to add album to the collection
  console.log('in addCollection:', album);
  collection.push(album);
  console.log('album has been added');
  return true;
}
console.log('Add to the Album Collection');

let album1={
    title: 'The Beatles',
    artist: 'The Beatles',
    yearPublished: 1968,
  };
console.log('The Beatles by the Beatles:', album1);

let album2={
    title: 'Let it Be',
    artist: 'The Beatles',
    yearPublished: 1970,
};
console.log('Let it Be by the Beatles:', album2);

let album3={
    title: 'Sunflower',
    artist: 'The Beach Boys',
    yearPublished: 1970,
};
console.log('Sunflower by The Beach Boys:', album3);

let album4={
    title: ''
};
