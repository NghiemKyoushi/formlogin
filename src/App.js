import React from "react"
import Form from './component/form';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import TableInform from './component/table'
class App extends React.Component {
  constructor(props){
    super(props);

    this.state={
      inform: []
    }
    this.handleAdd = this.handleAdd.bind(this);

  }
  handleAdd(input){
    
    if(input.username === "" || input.email === ""){
      alert("need fill full information");
    }else{
      const {inform} = this.state;
      const inform1 = {
        username: input.username,
        email:input.email
      }
      console.log(inform1);
      inform.push(inform1);
      console.log(inform);
      this.setState({
        inform: inform
      })
    }

   
  }
  render(){
    const inform = this.state.inform;
    return (
      
      <div className="App">
        <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
          <Grid item xs={6} md={8}>
          <Form onSubmit = {this.handleAdd} />
          </Grid>
          <Grid item xs={6} md={4}>
           <TableInform inform = {inform}  />
          </Grid>
        </Grid>
      </Box>
      </div>
    );

  }


}

export default App;
