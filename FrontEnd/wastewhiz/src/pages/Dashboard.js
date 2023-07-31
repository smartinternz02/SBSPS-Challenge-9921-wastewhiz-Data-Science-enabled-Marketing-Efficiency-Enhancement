import Chart from "../components/Chart";
import "./Dashboard.css";

const Dashboard = () => {
    return (
        <div> 
            <Chart
                url="https://public.tableau.com/views/NewDasboard_16908105173340/Dashboard1?:language=en-GB&:display_count=n&:origin=viz_share_link"
            />
        </div>
    );
}

export default Dashboard;
