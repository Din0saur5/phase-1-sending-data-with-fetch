// Add your code here
const form = document.querySelector("form");
const body = document.body;




const submitData = (name, email) => {
 
   
   
   
   //Data format
    let user = {
        "name": name,
        "email": email
    }
    //post request format
    const configUser =  {
        method: 'POST',
        headers: {
            'Content-type': 'application/json',
            'Accept': 'application/json',
        },
        body:JSON.stringify(user)
    }
     
    //Post request
    return fetch('http://localhost:3000/users', configUser)
    .then((res) =>{
        return res.json()
    })
    .then((data)=>{
       const newID = document.createElement('p');
       newID.textContent = `${data.id}`;
        body.appendChild(newID);
    })
    .catch((error)=>{
        body.append(error.message);
      })
   
}








/*form.addEventListener('submit',(e) =>{
    e.preventDefault();
    const nameEntry = form.querySelector("#nameInput").value;
    const emailEntry = form.querySelector('#emailInput').value;
    submitData(nameEntry,emailEntry)


})
*/



