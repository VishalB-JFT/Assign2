async function getData() {
    let apiData = await fetch('https://jsonplaceholder.typicode.com/users')
    const data = await apiData.json()
    for(let i=0; i < data.length; i++ ){
        let id=data[i]['id']
        let name=data[i]['name']
        let username=data[i]['username']
        let phone=data[i]['phone']
        let email=data[i]['email']
        let website = data[i]['website']

      
        var table=document.getElementById('table')
        var row=table.insertRow(i+1)
        var cell0=row.insertCell(0)
        var cell1=row.insertCell(1)
        var cell2=row.insertCell(2)
        var cell3=row.insertCell(3)
        var cell4=row.insertCell(4)
        var cell5=row.insertCell(5)
        // var cell6=row.insertCell(6)

        cell0.innerText=id
        cell1.innerText=name
        cell2.innerText=phone
        cell3.innerText=username
        cell4.innerText=email
        cell5.innerText=website
       
    }
}
getData()

            // var button_trash=document.createElement('button')
                // button_edit.setAttribute('class','fas fa-edit')
                // button_trash.setAttribute('class','fas fa-trash')
                // var button_edit=document.createElement('BUTTON')
                // cell5.innerHtml=button_edit