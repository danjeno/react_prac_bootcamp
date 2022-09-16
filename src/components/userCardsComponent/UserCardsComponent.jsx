import "./userCardsComponent.css";

function UserCardsComponent({name, age, phone, email}) {
  return (
    <div className='user-card'>
    <h1>{name}</h1>
    <p>Age : {age}</p>
    <p>Phone : {phone}</p>
    <p>Email : {email}</p>
  </div>
  )
}

export default UserCardsComponent