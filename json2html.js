// json2html.js
export default function json2html(data) {
  // Start the table and include the data-user attribute
  let html = '<table data-user="gyogyasree@gmail.com">';

  // Add the table header row
  html += `
    <thead>
      <tr>
        <th>Name</th>
        <th>Age</th>
        <th>Gender</th>
      </tr>
    </thead>
  `;

  // Add the table body rows
  html += '<tbody>';
  data.forEach(item => {
    html += '<tr>';
    html += `<td>${item.Name || ''}</td>`;  // Add Name or an empty string if not present
    html += `<td>${item.Age || ''}</td>`;   // Add Age or an empty string if not present
    html += `<td>${item.Gender || ''}</td>`; // Add Gender or an empty string if not present
    html += '</tr>';
  });
  html += '</tbody>';

  // Close the table tag
  html += '</table>';

  return html;
}
