/* eslint-disable jsx-a11y/alt-text */
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container, Row, Col} from 'react-bootstrap';
function fnc_imagem(f_logo, w=200, h=200, func_name){

    if (func_name === ''){
        return (
 
            <img src={f_logo} 
                width={w} 
                height={h} 
                />
                
        )
        
    }else{
        return (
            
            <Container>
                <Row>

                    <Col>

                        <img src={f_logo} 
                            width={w} 
                            height={h} 
                            />
                    </Col>

                    <Col>
                        <h4 className='text-light mt-2'>{func_name}</h4> 
                    </Col>

                </Row>
            </Container> 

        )
    }
}

export default fnc_imagem;
