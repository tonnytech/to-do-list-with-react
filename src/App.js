/* eslint-disable */

import './App.css';
import Header from './components/header';
import TodosLogic from './components/todosLogic';
import Navbar from './components/NavBar';
import Form from './components/Form';
import ControlledForm from './components/controlled-form';

function App() {
  return (
    <>
    <Navbar />
    <Header />
    <TodosLogic />
    <Form />
    <ControlledForm></ControlledForm>
    </>
  );
}

export default App;
