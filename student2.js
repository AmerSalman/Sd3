    // Build html for table.
    var html = 
        `<table border="1">
            <tr>
                <th>ID</th>
                <th>Name</th>
            </tr>`;
    // Iterate over all the students
    for (var student of students) {
        html += student.tableRow();
    }
    // End html table.
    html += `</table>`
    // Get the main element
    var main = document.getElementById("main");
    // Set the innerHTML to html
    main.innerHTML = html;
}