import alt from '../alt';

class OmimActions {
  constructor() {
    this.generateActions(
      'getOmimGeneSuccess',
      'getOmimGeneWithPhenotypesSuccess',
      'getSnpSuccess',
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

  getSnp() {
    $.ajax({ url: '/api/snp/', data:{} })
      .done((data) => {
        this.actions.getSnpSuccess(data);
      });
  }
}

export default alt.createActions(OmimActions);