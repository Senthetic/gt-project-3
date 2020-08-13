import React from 'react';
import Api from '../../utils/api'
import {Link} from 'react-router-dom'
import Paper from "@material-ui/core/Paper";
import { makeStyles } from "@material-ui/core/styles";

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
        Api.get('/plans').then(plans => {
            setPlans(plans.data)
        })
    },[])
    return (
        <div>
            {plans.map(plan => (
              <Grid container spacing={3}>
              
                <Link to={'editPlan/'+plan._id}>
                    <Paper className={classes.paper}>{plan.name}</Paper>
                </Link>
              </Grid>
            ))}
            
        </div>
    );
};

export default ListPlans;