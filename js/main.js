// Listen for form Submit
document.getElementById('myForm').addEventListener('submit', saveBookmark);

// Save bookmark
function saveBookmark(e){
  // Get form values
  var siteName = document.getElementById('siteName').value;
  var siteURL = document.getElementById('siteURL').value;

  var bookmark = {
    name: siteName,
    url: siteUrl
  }

  console.log(bookmark);

  // Test if bookmarks is null
  if(localStorage.getItem('bookmarks') === null){
    // Init array
    var bookmarks = [];
    // Add to array
    bookmarks.push(bookmark);
    // Set to localStorage
    localStorage.setItem('bookmarks', JSON.stringify(bookmarks));
  }

  // Prevent form from submitting
  e.preventDefault();
}
