import './App.css';
import {Form} from './components/Form';
import {FormToSubscribe} from './components/FormToSubscribe';
import {FormWithRef} from './components/FormWithRef';
import {UncontrolledForm} from './components/UncontrolledForm';

function App() {
  return (
    <div className="App">
      <h1>Регистрация</h1>
      <Form/>
      <FormToSubscribe/>
      <FormWithRef/>
      <UncontrolledForm />
    </div>
  );
}

export default App;
