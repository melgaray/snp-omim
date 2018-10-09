
import alt from '../alt';
import GetStatsActions from '../actions/StatsActions';

class StatsStore {
  
  constructor() {
    this.bindActions(GetStatsActions);
    this.genes = [];
    this.genesWithPhenotypes = [];
    
  }

  onGetOmimGeneSuccess(data){
  	this.genes = data;
  }

  onGetOmimGeneWithPhenotypesSuccess(data) {
  	this.genesWithPhenotypes = data;
  }
}

export default alt.createStore(StatsStore);
