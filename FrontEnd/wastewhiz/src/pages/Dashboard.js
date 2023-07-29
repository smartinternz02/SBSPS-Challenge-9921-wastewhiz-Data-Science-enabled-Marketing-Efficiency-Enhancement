import Chart from "../components/Chart";
import "./Dashboard.css";

const Dashboard = () => {
    return (
        <div className="card"> 
            <Chart
                url="https://public.tableau.com/views/IBMHACK/Sheet1?:language=en-GB&:display_count=n&:origin=viz_share_link"
            />
        </div>
    );
}

export default Dashboard;