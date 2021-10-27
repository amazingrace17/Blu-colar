import React from 'react'

import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'

const Results = (props) => {
    const {repos} = props;
    console.log("repos :" , repos)
    return (
        <Container>
          {repos && repos.map((_repo)=>(
              <Col>
                  < h2 key = {_repo.id} > Repo {_repo.id}</h2>
                  <img src={_repo.owner.avatar_url}  width={50} height={30} alt="" />
               <p>  fullname = {_repo.full_name} , stars = {_repo.stargazers_count} , description = {_repo.description},
              issues = {_repo.open_issues} , Username = {_repo.name}, Avatar = {_repo.owner.avatar_url}</p> 
              
              
              </Col>
    
              
          ))}
        </Container>
    )
}

export default Results
