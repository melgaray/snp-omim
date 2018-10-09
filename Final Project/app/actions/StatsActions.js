import alt from '../alt';

class StatsActions {
  constructor() {
    this.generateActions(
      'getOmimGeneSuccess',
      'getOmimGeneWithPhenotypesSuccess',
      'getOmimGeneFail'
    );
  }

  getOmimGenes() {
  	$.ajax({ url: '/api/omim', data:{} })
  		.done((data) => {
  			this.actions.getOmimGeneSuccess(data);
  		})
  		.fail((jqXhr) => {
  			this.actions.getOmimGeneFail(jqXhr);
  		});	
	}

  getOmimGenesWithPhenotypes() {
    $.ajax({ url: '/api/omimWithPhenotype/', data:{} })
      .done((data) => {
        this.actions.getOmimGeneWithPhenotypesSuccess(data);
      });
  }
}

export default alt.createActions(StatsActions);