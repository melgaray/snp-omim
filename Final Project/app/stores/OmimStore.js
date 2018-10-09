import alt from '../alt';
import GetOmimActions from '../actions/OmimActions';

class OmimStore {
  
  constructor() {
    this.bindActions(GetOmimActions);
    this.genes = [];
    this.genesWithPhenotypes = [];
    this.snp = [];
    this.data = [
        	['Type', 'Count', {role: 'annotation'}]
        ];
  }

  onGetOmimGeneSuccess(data){
  	this.genes = data;
  }

  onGetOmimGeneWithPhenotypesSuccess(data) {
  	this.genesWithPhenotypes = data;
  }

  onGetSnpSuccess(data){
  	this.snp = data;
  }
}

export default alt.createStore(OmimStore);