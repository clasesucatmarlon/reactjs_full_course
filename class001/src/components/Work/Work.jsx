import { useState } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";

const Work = () => {
  const [task, setTask] = useState([]);

  const getValues = (e) => {
    e.preventDefault();
    let [title, description] = e.target.elements;
    title = title.value.trim();
    description = description.value.trim();
    setTask([...task, { id: 1, title, description }]);
    console.log(task);
  };

  return (
    <Container>
      <Row className="justify-content-center bg-primary py-5">
        <h3 className="pb-5">Hola desde Work</h3>
        <Col md={6} xs={12} className="bg-secondary p-5 border">
          <Form onSubmit={getValues}>
            <Form.Group>
              <Form.Label className="font-weight-bold text-white text-uppercase">
                Título de la tarea
              </Form.Label>
              <Form.Control
                className="mb-3"
                type="text"
                placeholder="Ingrese tarea"
                name="title"
              />
            </Form.Group>

            <Form.Group>
              <Form.Label className="font-weight-bold text-white text-uppercase">
                Descripción de la tarea
              </Form.Label>
              <Form.Control
                as="textarea"
                rows={4}
                placeholder="Ingrese descripción"
                name="description"
              />
            </Form.Group>

            <Button className="w-100 mt-4" variant="primary" type="submit">
              Crear tarea
            </Button>
          </Form>
        </Col>

        <Col md={6} xs={12} className="bg-secondary p-5 border">
          <ul>
            {
              task.map((item, index) => {
                return (
                  <li key={index}>Tarea: {item.title} / Descripción: {item.description}</li>
                );
              })
            }
          </ul>
        </Col>
      </Row>
    </Container>
  );
};

export default Work;
