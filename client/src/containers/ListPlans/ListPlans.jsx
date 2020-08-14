import React from 'react';
import Api from '../../utils/api'
import {Link} from 'react-router-dom'
import {Paper, Grid, IconButton} from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";
import { makeStyles } from "@material-ui/core/styles";

import Drawer from "../../components/Drawer";

const useStyles = makeStyles((theme) => ({
    root: {
      "& .MuiTextField-root": {
        margin: theme.spacing(1),
        width: "25ch",
        flexGrow: 1,
      },
    },
    
    paper: {
      padding: theme.spacing(2),
      textAlign: "center",
      color: theme.palette.text.secondary,
    },
  }));

const ListPlans = () => {
    const classes = useStyles();
    const [plans, setPlans] = React.useState([])
    React.useEffect(()=>{
      getPlans()
    },[])

    const deletePlan = (id) => {
      Api.delete('/plans/'+id).then(getPlans())
    }
    const getPlans = () => {
      Api.get('/plans').then(plans => {
        setPlans(plans.data)
      })
    }

    return (
        <div>
          <Drawer></Drawer>
            {plans.map(plan => (
              <Grid container spacing={3} key={plan._id}>  
                <Grid item xs={3}>
                <IconButton aria-label="delete" onClick={ev => deletePlan(plan._id) }>
                  <DeleteIcon />
                </IconButton>
                </Grid>
                <Grid item xs={9}>
                  <Link to={'editPlan/'+plan._id}>
                    <Paper className={classes.paper}>{plan.name}</Paper>
                </Link>
                </Grid>
                
              </Grid>
            ))}
            
        </div>
    );
};

export default ListPlans;