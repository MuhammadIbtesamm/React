import Student from './Student';

function App() {
  return(
    <>
    <Student name="Huzaifa" age="20" isStudent={true}/>
    <Student name="Ibtesam" age={20} isStudent={true}/>
    <Student name="Hanan" age={20} isStudent={true}/>
    <Student/>
    </>
  );
}

export default App
