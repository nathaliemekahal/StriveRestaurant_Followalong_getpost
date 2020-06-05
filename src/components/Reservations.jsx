import React from 'react'
import {ListGroup} from 'react-bootstrap'


class Reservations extends React.Component{
    state = {
      reservations: []
    }
    componentDidMount=async()=>{
        //Place to make fetches
        console.log('I am in the component did mount method')
        try{
            let response=await fetch("https://striveschool.herokuapp.com/api/reservation")
            let reservations = await response.json()
            console.log('RESERVATIONS',reservations)
            this.setState({
                reservations 
                //the same as: 
                // reservations: reservations
                // since they have same name
            })
        }catch(err){
            console.log(err)
        }
    }
    render(){
        return(
            <div className="mt-2">
                 <ListGroup>
                { this.state.reservations.length>0&&
                    this.state.reservations.map((reservations,i)=>{
                        return (
                           
                        <ListGroup.Item>
                            From: {reservations.name}, for {reservations.numberOfPersons}
                            at {reservations.dateTime}
                        </ListGroup.Item>
                        
                        
                        )
                       
                    })
                }
                </ListGroup>
                {
                    this.state.reservations.length===0&&(<div>No Reservation for now!!</div>)
                        
                }
            </div>
        )
    }
}
export default Reservations