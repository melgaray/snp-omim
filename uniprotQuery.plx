#!/usr/bin/perl -w
use warnings;
use strict;
use XML::Simple;
use MongoDB;
use Cpanel::JSON::XS qw(encode_json decode_json);
use LWP::Simple;

use Data::Dumper;

my $client = MongoDB->connect();
my $db = $client->get_database('phenotype');
my $genes = $db->get_collection( 'genes' );
my $phenotypes = $db->get_collection( 'phenotypes' );

my $all_genes = $genes->find;

while (my $object = $all_genes->next) {
    	my $gene = decode_json $object-> {'contents'};
	my $id = $object-> {_id};
	#print "$id\n"; 
	#print Dumper $gene->{omim}->{listResponse}->{geneMapList};
	#print $object-> {contents}; 
	sleep 1;
	my @genemapList = @{$gene->{omim}->{listResponse}->{geneMapList}};
	if (@genemapList) {
		foreach my $geneMap (@genemapList)
		{
			my $geneSymbols = $geneMap->{geneMap}->{geneSymbols};
			my @genes = split(/,/, $geneSymbols);
			my $geneSymbol = $genes[0];
			#print $geneSymbol;
			#my $phenotype = $geneMap->{geneMap}->{phenotypeMapList};
			#print Dumper $phenotype;
			my $pathogenicTerm = $geneSymbol . "[Gene+Name] +AND+pathogenic[Clinical+Significance]";
			my $term = $geneSymbol . "[Gene+Name]";
			my $base = 'http://eutils.ncbi.nlm.nih.gov/entrez/eutils/';
			my $url = $base . "esearch.fcgi?db=snp&term=$term";
			my $pathogenicUrl = $base . "esearch.fcgi?db=snp&term=$pathogenicTerm";
			#print $url;
			my $response = get($url);
			my $pathogenicResponse = get($pathogenicUrl);
			
			my $xml = new XML::Simple;
			my $data = $xml->XMLin($response);
			my $pathogeneicResponseData = $xml->XMLin($pathogenicResponse);

			# $phenotypes->insert_one( {
			# 	_id => $id,
			# 	snpCount => $data->{Count},
			# 	pathogenicCount => $pathogeneicResponseData->{Count},
			# 	contents => $pathogeneicResponseData
			# });
			$genes->update_one({"_id" => $id}, {'$set' =>  {snpCount => $data->{Count},
				snpPathogenicCount => $pathogeneicResponseData->{Count},
				snpContents => encode_json $pathogeneicResponseData}});
			
			#my $contents = $response->decoded_content;
			#my $xml = new XML::Simple;
			#my $data = $xml->XMLin($response);
			#print Dumper $data;
			#if ($phenotype) {
			#	my @phenotypeMapList = @{$phenotype};
			#	#print Dumper @phenotypeMapList;
			#}
		}
	}
}
