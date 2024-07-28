let search_face_button = document.getElementById("search_face_button");
search_face_button.onclick = search_face;

function search_face(){
    var search = document.getElementById("search_form");

        search.style.display = 'block';
        search_face_button.style.display = 'none';
        search_display = 1;
}