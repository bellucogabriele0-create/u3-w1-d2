import { useState } from 'react';
import Alert from 'react-bootstrap/Alert';
import Button from 'react-bootstrap/Button';

function Welcome () {
  const [show, setShow] = useState(true);

  return (
    <>
      <Alert show={show} variant="success">
        <Alert.Heading>eccoti qua</Alert.Heading>
        <p>
         benvenuto 
        </p>
        <hr />
        <div className="d-flex justify-content-end">
          <Button onClick={() => setShow(false)} variant="outline-success">
           chiudi
          </Button>
        </div>
      </Alert>

     
    </>
  );
}

export default Welcome ;