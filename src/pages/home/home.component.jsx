import React from "react";
//STYLES
import "./home.styles.scss";
//REDUX
import { useSelector } from "react-redux";
//COMPONENTS
import Card from "../../components/card/card.component";
import AddButton from "../../components/add-button/add-button.component";
import Modal from "../../components/modal/modal.component";

const HomePage = () => {
  const students = useSelector((state) => state.student.students);
  console.log(students);
  return (
    <div className="home">
      <h1 className="title">Students Info</h1>
      {students.length ? (
        <div className="cards-container">
          {students.map((student) => {
            return <Card key={student.id} student={student} />;
          })}
        </div>
      ) : (
        <div className="no-data">No data....</div>
      )}
      <AddButton />
      <Modal />
    </div>
  );
};

export default HomePage;
