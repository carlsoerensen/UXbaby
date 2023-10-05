console.log(urlParams)
fetch(`https://abfrtnafkorgiedfqqev.supabase.co/rest/v1/oplaegsholdere`, {
  method: "GET",
  headers: {
    apikey: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFiZnJ0bmFma29yZ2llZGZxcWV2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTYyNDcwMDcsImV4cCI6MjAxMTgyMzAwN30.i6rJ2nfgh5Ybo40FtWbB783MzTUXCQtVaoeMYoy0AQw    ",
  },
})
  .then((res) => res.json())
  .then(showDatas);


function showDatas(items) {
  console.log(items)
  items.forEach(showData);
}


function showData(item) {
  console.log(item);
  //fang template
  const template = document.querySelector("#item_boks").content;
  //lav kopi
  const copy = template.cloneNode(true);

  copy.querySelector("h4").textContent = item.job;
  copy.querySelector("h3").textContent = item.season;
  copy.querySelector("p").textContent = item.description;
  copy.querySelector(".img").src = item.img;

  document.querySelector("main").appendChild(copy);
}



/*
https://abfrtnafkorgiedfqqev.supabase.co/rest/v1/oplaegsholdere
eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFiZnJ0bmFma29yZ2llZGZxcWV2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTYyNDcwMDcsImV4cCI6MjAxMTgyMzAwN30.i6rJ2nfgh5Ybo40FtWbB783MzTUXCQtVaoeMYoy0AQw 
*/
