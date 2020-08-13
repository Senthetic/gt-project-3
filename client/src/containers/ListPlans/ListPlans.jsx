import React from 'react';
import Api from '../../utils/api'
import {Link} from 'react-router-dom'
import Paper from "@material-ui/core/Paper";

const ListPlans = () => {
    const [plans, setPlans] = React.useState([])
    React.useEffect(()=>{
        Api.get('/plans').then(plans => {
            setPlans(plans.data)
        })
    },[])
    return (
        <div>
            {plans.map(plan => (
                <Link to={'editPlan/'+plan._id}>
                    <Paper>{plan.name}</Paper>
                </Link>
            ))}
            
        </div>
    );
};

export default ListPlans;