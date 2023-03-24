// import logo from './logo.svg';
import './App.css';
import { Button, Container, Row, Col, ListGroup } from 'react-bootstrap';
import "bootstrap/dist/css/bootstrap.min.css"

import { useState } from 'react';
function App() {
  const [selectedArr, setSelectedArr] = useState({
    activeObject: null,
    objects: [{ id: 1, name: "7 Days", values: [7000, 700, 6300] }, { id: 2, name: "15 Days", values: [15000, 2250, 12750] }, { id: 3, name: "30 Days", values: [30000, 6000, 24000] }]
  });

  function toggleActive(index) {
    setSelectedArr({ ...selectedArr, activeObject: selectedArr.objects[index] });
  }

  function toggleActiveStyles(index) {
    if (selectedArr.objects[index] === selectedArr.activeObject) {
      return "active";
    }
    else {
      return "inactive";
    }
  }

  function variantCheck(index) {
    if (selectedArr.objects[index] === selectedArr.activeObject) {
      return "primary"
    }
  }

  function isActivated(index) {
    if (selectedArr.objects[index] === selectedArr.activeObject) {
      return true
    }
    else {
      return false
    }
  }


  return (
    <div className="App">
      <header className="App-header"><b>Payment</b></header>
      <div className='border-header'></div>
      <div className='row-padding'></div>
      <Container>
        <Row>
          <Col>
            <ListGroup>
              <div className='empty-cell'></div>
              <ListGroup.Item><b>Per Day Price</b></ListGroup.Item>
              <ListGroup.Item><b>Total Savings</b></ListGroup.Item>
              <ListGroup.Item><b><b>Total Amount</b></b></ListGroup.Item>
            </ListGroup>
           </Col>
          {selectedArr.objects.map((elements, index) => (
            <Col>
              <ListGroup as="ul" >
                <ListGroup.Item as="li" key={index} active={isActivated(index)}>{elements.name}</ListGroup.Item>
                {elements.values.map(((elements) => (
                  <ListGroup.Item as="li" variant={variantCheck(index)}>
                    {elements}</ListGroup.Item>
                )))}
              </ListGroup>
            </Col>

          ))}
        </Row>
      </Container>

      <br></br>
      <div className='row-padding'>
        {selectedArr.objects.map((elements, index) => (

          <Button
            variant="light"
            key={index}
            className={toggleActiveStyles(index)} 
            onClick={() => {
              toggleActive(index);
            }}
          >{elements.name}</Button>
        ))}
      </div>
      <br></br>
      <div className="d-grid gap-2 row-padding">
        <Button variant="primary" size="lg">
          Pay With UPI
        </Button>
        <div size='sm'>       OR

        </div>
            
        <Button variant="outline-primary" size="lg" color='black'>
          Pay With other option
        </Button>
        <div className='text-grey'>
          * Terms and Conditions Applied
        </div>
      </div>
    </div>

  );
}

export default App;
