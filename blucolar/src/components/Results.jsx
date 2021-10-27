import React from 'react'
import ListGroup from 'react-bootstrap'
import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'

const Results = (props) => {
    const {repos} = props;
    console.log("repos :" , repos)
    return (
        <Container>
          {repos && repos.map((_repo)=>(
              <row>
                  < h2 key = {_repo.id} ></h2>
              <p>  fullname = {_repo.full_name} , stars = {_repo.stargazers_count} , description = {_repo.description},
              issues = {_repo.open_issues}</p> 
              <p> </p>
              </row>
    
              
          ))}
        </Container>
    )
}

export default Results
