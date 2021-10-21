import React, { Component } from 'react';
import { Card, CardImg, CardBody, CardText, CardTitle } from 'reactstrap';

class DishDetail extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    renderComments(comments){
        if(comments !=null){
            const commentsList = comments.map(
                (arrayItem, arrayItemIndex, wholeArray) => { return(
                    <li key={arrayItem.id}>
                        <p>
                            {arrayItem.comment}
                            <br/>
                            --{arrayItem.author}, {new Intl.DateTimeFormat('en-US', {year:'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(arrayItem.date)))}
                        </p>
                    </li>
                );
            }
            );
            return (
                <div>
                    <h4>Comments</h4>
                    <ul className="list-unstyled">
                        {commentsList}
                    </ul>
                </div>
            );
        }
        else{
            return(
                <div></div>
            );
        }
    }

    renderDish(dish){
        if(dish !=null){
            return (
                <Card>
                    <CardImg width="100%" src={dish.image} alt={dish.name} />
                    <CardBody>
                        <CardTitle>{<h5>{dish.name}</h5>}</CardTitle> 
                        <CardText>{dish.description}</CardText>
                    </CardBody>
                </Card>
            );
        }
        else{
            return(
                <div></div>
            );
        }
    }

    render() {
        const dish = this.props.dish;
        if(dish !=null){
            return (
                <div className="container">
                <div className="row">
                <div className="col-12 col-md-5 m-1">
                    {this.renderDish(dish)}
                </div>
                <div className="col-12 col-md-5 m-1">
                     {this.renderComments(dish.comments)}
                </div>
                </div>
                </div>
            );
        }
        else{
            return(
                <div></div>
            );
        }
    }
}

export default DishDetail;