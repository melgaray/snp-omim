import React from 'react';
import { Chart } from 'react-google-charts';
import StatsStore from '../stores/StatsStore';
import StatsActions from '../actions/StatsActions';
 
export default class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = StatsStore.getState();
    this.onChange = this.onChange.bind(this);
  }

  componentDidMount() {
    StatsStore.listen(this.onChange);
    StatsActions.getOmimGenes();
    StatsActions.getOmimGenesWithPhenotypes();
  }

  componentWillUnmount() {
    StatsStore.unlisten(this.onChange);
    this.setState({data : [
          ['Type', 'Count', {role: 'annotation'}]
        ]});
  }


  onChange(state) {
    this.setState(state);
    this.setState({data : [...this.state.data, ['Total Genes', this.state.genes.length, this.state.genes.length]]});
    this.setState({data : [...this.state.data, ['Genes with known Phenotypes', this.state.genesWithPhenotypes.length, this.state.genesWithPhenotypes.length]]});
  }

  render() {
    const totalGenes = 0;
    const totalGenesWithPhenotypes = 0;

    return (
      <div className={'my-pretty-chart-container'}>
        <Chart
          chartType="ColumnChart"
          data={this.state.data}
          options={{}}
          graph_id="BarChart"
          width="50%"
          
          legend_toggle
        />
      </div>
    );
  }
}