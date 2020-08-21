let currentIndex = 0
axios.get('/api/tables')
  .then(res => {

    res.data.forEach(table => {
      currentIndex++
      let itemElem = document.createElement('li')
      itemElem.innerHTML = `
      <div>
        <p>
          Table: ${currentIndex} <br>
          Name: ${table.name} <br>
          Email: ${table.email} <br>
          Phone: ${table.phone} <br>
          ID: ${table.id}
        </p>   
      </div>
      `
      document.getElementById('tables').append(itemElem)
    })
  })
  .catch(err => console.error(err))
