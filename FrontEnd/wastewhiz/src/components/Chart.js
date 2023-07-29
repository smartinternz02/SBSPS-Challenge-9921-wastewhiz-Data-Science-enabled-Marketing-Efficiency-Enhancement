import TableauReport from 'tableau-react'

const Chart = (props) => {

    return (
        <TableauReport
            url={props.url}
        />
    );
  }
  
  export default Chart;