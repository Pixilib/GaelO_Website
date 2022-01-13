
import { Button, Container } from "react-bootstrap";


const Error404 = ()=> {

return(

    <Container>
        <h1>Page 404 </h1>
        <span> You need to follow this link to return on the site</span>
        <Button variant="link" className="text-primary" href="gaelo.fr"  > Gaelo.fr </Button>
    </Container>


)


}

export default Error404