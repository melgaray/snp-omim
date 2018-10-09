import React from 'react';
import OmimStore from '../stores/OmimStore';
import OmimActions from '../actions/OmimActions';
import Omim from './Omim';

class Home extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = OmimStore.getState();
    this.onChange = this.onChange.bind(this);
  }

  componentDidMount() {
  	OmimStore.listen(this.onChange);
    OmimActions.getOmimGenes();
    OmimActions.getOmimGenesWithPhenotypes();
    OmimActions.getSnp();
  }

  componentWillUnmount() {
  	OmimStore.unlisten(this.onChange);
  }


  onChange(state) {
    this.setState(state);
  }

  mapPhenotypeList(list) {
  	if (list) {
	  	return list.map((item, index) => {
	  		return (
	  			<div className='well well-sm' key={index}>
	  				<div><strong>Phenotype Name:</strong> {item.phenotypeMap.phenotype}</div>
	  				<div><strong>Phenotype MIM Number:</strong> <a href={`https://omim.org/entry/${item.phenotypeMap.phenotypeMimNumber}`} target='_blank'>{item.phenotypeMap.phenotypeMimNumber}</a></div>
	  				<div><strong>Phenotype Inheritance:</strong> {item.phenotypeMap.phenotypeInheritance}</div>
	  			</div>
			)
	  	});
  	}
  }

  mapSnpList(list) {
  	if (list && list.constructor === Array) {
	  	return list.map((item, index) => {
	  		return (
	  			<li className='well well-sm' key={index}>
	  				<a href={`https://www.ncbi.nlm.nih.gov/projects/SNP/snp_ref.cgi?rs=${item}`} target='_blank'>{item}</a>
	  			</li>
			)
	  	});
  	}
  	else if (list){
  		return (
	  			<li className='well well-sm' key={list}>
	  				<a href={`https://www.ncbi.nlm.nih.gov/projects/SNP/snp_ref.cgi?rs=${list}`} target='_blank'>{list}</a>
	  			</li>
		)
  	}
  }

  getPhenotypeCount(list) {
  	if (list){
  		return list.length;
  	}
  	else return 0;
  }

	render() {
		var geneNodes = this.state.genes.map((gene, index) => {
			const geneObject = JSON.parse(gene.contents);
			const geneMap = geneObject.omim.listResponse.geneMapList[0].geneMap;
			const snpContents = JSON.parse(gene.snpContents);
		  return (
		    <div className='panel panel-primary' key={gene._id}>
		    	<div className='panel-heading'>{geneMap.geneName}</div>
		    	<div className='panel-body'>
		    		<ul className='list'>
  						<li><strong>Gene Name: </strong>{geneMap.geneName}</li>
  						<li><strong>Gene Symbols: </strong>{geneMap.geneSymbols}</li>
  						<li><strong>MIM Number: </strong><a href={`https://omim.org/entry/${geneMap.mimNumber}`} target='_blank'>{geneMap.mimNumber}</a></li>
  						<li><strong>Known Phenotypes: </strong><span className='badge'>{this.getPhenotypeCount(geneMap.phenotypeMapList)}</span></li>
  						
  						<p>{this.mapPhenotypeList(geneMap.phenotypeMapList)}</p>
  						<li><strong>Known SNPs: </strong><span className='badge'>{gene.snpCount}</span></li>
  						<li><strong>Known Pathogenic SNPs: </strong><span className='badge badge-danger'>{gene.snpPathogenicCount}</span></li>
  						<p><ul className='list-inline'>{this.mapSnpList(snpContents.IdList.Id)}</ul></p>
  					</ul>
  					
		    	</div>
		    </div>
		  );
		});
		

		return (
			<div>
				<div className='alert alert-info'>
					Mitochondrial Disorders And Genetic Variations
				</div>
				<div className='container'>
					<ul className='list-group'>
						<li className='list-group-item'><strong>Total genes: </strong>{this.state.genes.length}</li>
						<li className='list-group-item'><strong>Total genes with known phenotypes: </strong>{this.state.genesWithPhenotypes.length}</li>
					</ul>
					{geneNodes}
				</div>
			</div>
		);
	}
}

export default Home;