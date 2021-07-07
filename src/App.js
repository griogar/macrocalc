import React, { useState } from 'react';
import { Button, Col, Container, Form } from 'react-bootstrap';
import { Results } from './Components/Results';
import './App.css';

const App = () => {
  const [results, setresults] = useState({
    gender: null,
    age: null,
    goal: "1"
  });

  const handleInput = (evt) => {
    const value = evt.target.value;
    setresults({
      ...results,
      [evt.target.id]: value
    })
  }

  const ages = [];
  for (let a = 13; a <= 70; a++) { ages.push(a); }

  const heights = [];
  for (let h = 48; h <= 84; h++) { heights.push(h); }

  const [formResult, setformResult] = useState()
  const handleSubmit = (event) => {
    event.preventDefault();
    let bmr = "";
    if (results.male) {
      bmr = (4.536 * results.weight) + (15.88 * results.height) - (5 * results.age) + 5;
    } else {
      bmr = (4.536 * results.weight) + (15.88 * results.height) - (5 * results.age) - 161;
    }

    setformResult(
      <Results bmr={bmr} multiplier={results.activity} weight={results.weight} goal={parseFloat(results.goal)} />
    )

    return (
      <Results />
    )
  }

  return (
    <>
      <h1 className="header">Macro Calculator</h1>
      <Container>
        <Form>
          <Form.Row className="justify-content-md-center">
            <Col md={6}>
              <Form.Row>
                <Col md={6}>
                  <Form.Group>
                    <Form.Label>Gender:</Form.Label>
                    <Form.Control as="select" id="gender" defaultValue='' onChange={handleInput}>
                      <option disabled></option>
                      <option>Male</option>
                      <option>Female</option>
                    </Form.Control>
                  </Form.Group>
                </Col>
                <Col md={6}>
                  <Form.Group>
                    <Form.Label>Age:</Form.Label>
                    <Form.Control as="select" custom id="age" defaultValue='' onChange={handleInput}>
                      <option disabled></option>
                      {ages.map(age => (
                        <option key={age} value={age}>
                          {age}
                        </option>
                      ))
                      }
                    </Form.Control>
                  </Form.Group>
                </Col>
              </Form.Row>
              <Form.Row>
                <Col md={6}>
                  <Form.Group>
                    <Form.Label>Height (in inches):</Form.Label>
                    <Form.Control as="select" custom id="height" defaultValue='' onChange={handleInput}>
                      <option disabled></option>
                      {heights.map((height) => (
                        <option key={height} value={height}>
                          {height}
                        </option>
                      ))
                      }
                    </Form.Control>
                  </Form.Group>
                </Col>
                <Col md={6}>
                  <Form.Group>
                    <Form.Label>Enter your weight (in lbs):</Form.Label>
                    <Form.Control placeholder="Weight" id="weight" type="number" onChange={handleInput} />
                  </Form.Group>
                </Col>
              </Form.Row>
              <Form.Row>
                <Col md={6}>
                  <Form.Group>
                    <Form.Label>Activity Level:</Form.Label>
                    <Form.Control as="select" id="activity" defaultValue='' onChange={handleInput}>
                      <option disabled></option>
                      <option value='1.2'>Sedentary</option>
                      <option value='1.375'>Lightly Active</option>
                      <option value='1.55'>Moderately Active</option>
                      <option value='1.725'>Very Active</option>
                      <option value='1.9'>Extremely Active</option>
                    </Form.Control>
                  </Form.Group>
                </Col>
                <Col md={6}>
                  <Form.Group>
                    <Form.Label>Body Composition Goal:</Form.Label>
                    <Form.Control as="select" id="goal" defaultValue="" onChange={handleInput}>
                      <option value="1">Maintain</option>
                      <option value="0.8">Fat Loss</option>
                      <option value="1.1">Muscle Gain</option>
                    </Form.Control>
                  </Form.Group>
                </Col>
              </Form.Row>
              <Form.Row className="justify-content-md-center">
                <Col md={12}>
                  <Button variant="primary" type="submit" onClick={handleSubmit}>Submit</Button>
                </Col>
              </Form.Row>
            </Col>
          </Form.Row>
          <Form.Row className="justify-content-md-center">
            <Col md="6">
              <hr/>
            </Col>
          </Form.Row>
          <Form.Row className="justify-content-md-center">
            <Col md={6}>
              {formResult}
            </Col>
          </Form.Row>
        </Form>
      </Container>
    </>
  );
}

export default App;
