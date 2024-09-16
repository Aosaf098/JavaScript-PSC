// Clicking on the button the font, font size, and color of the paragraph text will be changed.

document.getElementById('jsstyle').addEventListener('click', function() {
    const paragraph = document.getElementById('text')
    paragraph.style.fontSize = '1.2rem'
    paragraph.style.color = 'slateblue'
    paragraph.style.fontFamily = 'Roboto, sans-serif'
})


// Write a JavaScript function to get the values of First and Last names of the following form.

document.getElementById('name-btn').addEventListener('click', function() {
    const firstNameCon = document.getElementById('finp')
    const firstName = firstNameCon.value

    const lastNameCon = document.getElementById('linp')
    const lastName = lastNameCon.value

    const output = `${firstName} ${lastName}`

    const nameContainer = document.getElementById('task-2')
    const showName = document.createElement('p')
    showName.innerText = output
    nameContainer.appendChild(showName)
})

// Write a JavaScript program to set paragraph background color.

const capitalism = document.getElementById('capitalism')
capitalism.style.backgroundColor = 'slateblue'
capitalism.style.color = 'yellow'


// Write a JavaScript function to get the value of the href, hreflang, rel, target, and type attributes of the specified link.

document.getElementById('attr-btn').addEventListener('click', function() {
    const anchor = document.getElementById('w3r')
    const hRef = anchor.getAttribute('href')
    const hrefLang = anchor.getAttribute('hreflang')
    const reL = anchor.getAttribute('rel')
    const tarGet = anchor.getAttribute('target')
    const attr = anchor.getAttribute('type')

    const linkContainer = document.getElementById('task-4')
    const showLink = document.createElement('p')
    showLink.innerText = `${hRef} \n${hrefLang} \n${reL} \n${tarGet} \n${attr}`
    linkContainer.appendChild(showLink)
})


// Write a JavaScript function to add rows to a table.

document.getElementById('insert-row').addEventListener('click', function() {
    const newTableCon = document.getElementById('sample-table')
    const row = newTableCon.insertRow(0)
    const cell1 = row.insertCell(0)
    const cell2 = row.insertCell(1)
    cell1.innerHTML = 'Row3 Cell1'
    cell2.innerHTML = 'Row3 Cell2'
  
})



// const newTableCon = document.getElementById('sample-table')
// const newTable = document.createElement('tr')
// newTable.innerHTML = `<tr>
//                         <td>Row3 Cell1</td>
//                         <td>Row3 Cell2</td>
//                     </tr>`  
// newTableCon.appendChild(newTable)


// Write a JavaScript function that accepts a row, column (to identify a particular cell) and a string to update the cell's contents.


// Write a JavaScript function to create a table, accept row and column numbers, and input row-column numbers as cell content (e.g. Row-0 Column-0)

document.getElementById('create-table').addEventListener('click', function() {
    const tableContainer = document.getElementById('table-7')
    const rowNum = 3
    const cellNum = 3
    const newTable = document.createElement('table')
    for (let i = 1; i <= rowNum; i++) {
        const newTableRow = document.createElement('tr')
        for (let j = 1; j <= cellNum; j++) {
            const newTableData = document.createElement('td')
            newTableData.innerText = `Row ${i} Column ${j}`
            newTableRow.appendChild(newTableData)
        }
        newTable.appendChild(newTableRow)
    }
    tableContainer.appendChild(newTable)
})


// Write a JavaScript program to remove items from a drop-down list.

document.getElementById('sel-rem').addEventListener('click', function() {
    const color = document.getElementById('color-select')
    const index = color.selectedIndex
    color.remove(index)   
})


// Write a JavaScript program to count and display dropdown list items in an alert window.

document.getElementById('count-display').addEventListener('click', function() {
    const showOption = document.getElementById('task-9')
    const count = document.createElement('div')

    const dropdown = document.getElementById('dropdown')
    count.innerText = dropdown.options.length
    // console.log(dropdown.options[0].text);
    // console.log(dropdown.options[1].text);
    // console.log(dropdown.options[2].text);
    // console.log(dropdown.options[3].text);
    showOption.appendChild(count)
    let list1 = document.createElement('li')
    let list2 = document.createElement('li')
    let list3 = document.createElement('li')
    let list4 = document.createElement('li')
    list1.innerText = dropdown.options[0].text
    list2.innerText = dropdown.options[1].text
    list3.innerText = dropdown.options[2].text
    list4.innerText = dropdown.options[3].text
    showOption.appendChild(list1)
    showOption.appendChild(list2)
    showOption.appendChild(list3)
    showOption.appendChild(list4)
})

// Write a JavaScript program to calculate sphere volume.

document.getElementById('sphere').addEventListener('click', function() {
    const radius = document.getElementById('radius').value
    const volumeSphere = (4/3) * 3.14 * (radius ** 3)
    const volume = document.getElementById('volume')
    volume.value = volumeSphere.toFixed(2)
    

})