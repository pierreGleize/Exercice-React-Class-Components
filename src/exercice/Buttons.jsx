import { Alert, Container, Accordion, Button } from "react-bootstrap";


const Buttons = () => {

    const bootstrapClasses = ['primary', 'secondary', 'success', 'danger', 'warning', 'info', 'light', 'dark']
    return (
       <Container>
            <h1>Hello World</h1>
      
        {bootstrapClasses.map((variant) => (
            <Alert key={variant} variant={variant}>
            This is a {variant} alert—check it out!
            </Alert>
        ))}
           <Accordion defaultActiveKey="1">
      <Accordion.Item eventKey="0">
        <Accordion.Header>Accordion Item #1</Accordion.Header>
        <Accordion.Body>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="0">
        <Accordion.Header>Accordion Item #2</Accordion.Header>
        <Accordion.Body>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>

        {bootstrapClasses.map((button) =>(
            <Button key={button} variant={button}>Button</Button>
        ))}
       
         </Container>
    );
};

export default Buttons;