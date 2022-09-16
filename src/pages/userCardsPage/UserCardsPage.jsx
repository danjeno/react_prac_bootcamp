import "./userCardsPage.css";
import UserCardsComponent from "../../components/userCardsComponent/UserCardsComponent";

function UserCardsPage() {
  return (
    <>
      <UserCardsComponent
        name={"Bob Johnson"}
        age={"25"}
        phone={"123456789"}
        email={"bob@email.com"}
      />
      <UserCardsComponent
        name={"Alice Smith"}
        age={"27"}
        phone={"987654321"}
        email={"alice@email.com"}
      />
      <UserCardsComponent
        name={"James Ford"}
        age={"22"}
        phone={"123123123"}
        email={"james@email.com"}
      />
    </>
  );
}

export default UserCardsPage;
