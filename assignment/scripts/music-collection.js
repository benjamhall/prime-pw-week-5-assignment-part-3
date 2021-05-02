console.log('***** Music Collection *****');

let collection =[];

function addCollection (title, artist, yearPublished){ // This function adds to the collection array 6 different songs with the title, artist and yearPublished
  let album={
    title: title,
    artist: artist,
    yearPublished: yearPublished,
  };
  collection.push(album);
  return album;
}

console.log(addCollection ('The Beatles', 'The Beatles', 1968));
console.log(addCollection ('Let it Be', 'The Beatles', 1970));
console.log(addCollection ('Sunflower', 'The Beach Boys', 1970));
console.log(addCollection ('You', 'Aretha Franklin', 1975));
console.log(addCollection ('A Night at the Opera', 'Queen', 1975));
console.log(addCollection ('I and Love and You', 'Avett Brothers', 2009));


console.log('albums added to collection:', (collection));

function showCollection (array){ //This function shows each title, artist and yearPublished in an easy to read sentence
  for(let album of collection){
    console.log(album.title + ' by ' + album.artist + ' published in ' + album.yearPublished);
  }
}

showCollection();

function findByArtist(artist){  //The goal of this function is to find a specific artist in the array
  let artistArray =[];
  for(i=0; i<collection.length; i++){
    if(artist === collection[i].artist){
      artistArray.push(collection[i]);
    }
  } return artistArray;
}

console.log(findByArtist ('The Beatles'));
console.log(findByArtist ('Michael Jackson'));


function search(searchTerm){
  let searchTermArray =[];
  for(i=0; i<collection.length; i++){
    if(collection[i].title === searchTerm || collection[i].artist === searchTerm || collection[i].yearPublished === searchTerm){
      searchTermArray.push(collection[i]);
      console.log(`${collection[i].title} by ${collection[i].artist} published in ${collection[i].yearPublished}`);
  }
  }
  return searchTermArray;
}

search('Avett Brothers');
search('You');
search(1975);
search('Michael Jackson');
